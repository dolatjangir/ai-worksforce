"use server";

import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import { loginSchema } from "./validations/auth";


export type LoginState =
  | {
      error?: string;
    }
  | undefined;

export async function authenticate(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return {
      error: "Enter a valid email and password.",
    };
  }

  try {
    await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirectTo: "/admin-dashboard",
    });

    return undefined;
  } catch (error) {
    /*
     * Auth.js uses NEXT_REDIRECT internally on successful
     * authentication. Never swallow unknown errors.
     */
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return {
          error: "Invalid email or password.",
        };
      }

      return {
        error: "Unable to sign in right now. Please try again.",
      };
    }

    throw error;
  }
}

export async function signInWithGoogle() {
  await signIn("google", {
    redirectTo: "/admin-dashboard",
  });
}

export async function signInWithMicrosoft() {
  await signIn("microsoft-entra-id", {
    redirectTo: "/admin-dashboard",
  });
}