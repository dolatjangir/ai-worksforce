"use client";

import {
  useActionState,
  useState,
  type ReactNode,
} from "react";

import {
  authenticate,
  signInWithGoogle,
  signInWithMicrosoft,
} from "../../../lib/auth-actions";

type IconName =
  | "mail"
  | "lock"
  | "eye"
  | "eyeOff"
  | "arrow"
  | "globe"
  | "shield"
  | "headphones";

function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),

    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
      </>
    ),

    eye: (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),

    eyeOff: (
      <>
        <path d="m3 3 18 18M10.6 6.1 12 6c6.5 0 10 6 10 6a18 18 0 0 1-3.1 3.5M6.2 6.2A20 20 0 0 0 2 12s3.5 6 10 6a12 12 0 0 0 5.8-1.5" />
        <path d="M10 10a2.8 2.8 0 0 0 4 4" />
      </>
    ),

    arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,

    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3.5 8h17M3.5 16h17" />
      </>
    ),

    shield: (
      <>
        <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),

    headphones: (
      <>
        <path d="M4 13v-2a8 8 0 0 1 16 0v2M20 17v1a3 3 0 0 1-3 3h-3" />
        <rect x="3" y="12" width="4" height="7" rx="2" />
        <rect x="17" y="12" width="4" height="7" rx="2" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="size-[22px]"
      aria-hidden="true"
    >
      <path
        fill="#FFC107"
        d="M43.6 20.1H42V20H24v8h11.3A12 12 0 1 1 32 14.7l5.7-5.7A20 20 0 1 0 44 24c0-1.3-.1-2.6-.4-3.9Z"
      />

      <path
        fill="#FF3D00"
        d="m6.3 14.7 6.6 4.8A12 12 0 0 1 32 14.7l5.7-5.7A20 20 0 0 0 6.3 14.7Z"
      />

      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2A12 12 0 0 1 12.7 28l-6.5 5A20 20 0 0 0 24 44Z"
      />

      <path
        fill="#1976D2"
        d="M43.6 20.1H42V20H24v8h11.3a12 12 0 0 1-4 5.6l6.2 5.2A20 20 0 0 0 44 24c0-1.3-.1-2.6-.4-3.9Z"
      />
    </svg>
  );
}

function MicrosoftLogo() {
  return (
    <span
      className="grid size-[23px] grid-cols-2 gap-[2px]"
      aria-hidden="true"
    >
      <span className="bg-[#f35325]" />
      <span className="bg-[#81bc06]" />
      <span className="bg-[#05a6f0]" />
      <span className="bg-[#ffba08]" />
    </span>
  );
}

type LoginProps = {
  forgotPasswordHref?: string;
  administratorHref?: string;
};

export default function AIWorksForceLogin({
  forgotPasswordHref = "/forgot-password",
  administratorHref = "/contact",
}: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);

  /*
   * Kept from your original UI so the visual/layout behavior
   * remains unchanged.
   *
   * The current Auth.js session policy is controlled server-side,
   * so this checkbox is not used to alter the JWT lifetime.
   */
  const [rememberMe, setRememberMe] = useState(true);

  /*
   * Server Action state.
   *
   * authenticate() is the Auth.js credentials login action.
   */
  const [state, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  const inputClass =
    "h-[52px] w-full rounded-[11px] border border-[#dce2f1] " +
    "bg-white/60 pl-[55px] pr-4 text-[16px] text-[#11152d] " +
    "outline-none placeholder:text-[#7682a7] " +
    "focus:border-[#3165ff] focus:ring-3 focus:ring-[#3165ff]/10";

  return (
    <main
      className="login-page relative isolate flex h-dvh w-full
        items-center justify-center overflow-hidden bg-[#e9efff]
        p-3 sm:p-4 lg:p-5"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {/* Soft blue background and diagonal shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(137deg,
              transparent 0% 16%,
              rgba(255,255,255,.38) 16% 27%,
              transparent 27% 34%,
              rgba(255,255,255,.58) 34% 48%,
              transparent 48% 76%,
              rgba(218,208,255,.6) 76% 84%,
              transparent 84%),
            radial-gradient(ellipse at 3% 0%, #9dbaff, transparent 48%),
            radial-gradient(ellipse at 98% 100%, #658aff, transparent 42%),
            linear-gradient(125deg, #dbe6ff, #f8fcff 68%, #d9d8ff)
          `,
        }}
      />

      <div
        className="mx-auto grid h-full min-h-0 w-full max-w-[1448px]
          grid-cols-1 items-stretch gap-[3px]
          lg:grid-cols-[842fr_602fr]"
      >
        {/* Exact left panel from the supplied reference */}
        <section
          aria-label="AI WorksForce: AI agents, automation, higher productivity, and enterprise-grade security."
          className="relative hidden h-full min-h-0 overflow-hidden
            rounded-[24px] bg-[#020b29] lg:block"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative aspect-[842/906] w-full shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/ai-worksforce-login.png"
                alt="AI WorksForce — Your AI Workforce for Real Business Results"
                width={1536}
                height={1024}
                fetchPriority="high"
                draggable={false}
                className="pointer-events-none absolute max-w-none select-none"
                style={{
                  width: "182.4228%",
                  height: "113.0243%",
                  left: "-5.5819%",
                  top: "-6.4018%",
                }}
              />
            </div>
          </div>
        </section>

        {/* Live sign-in panel */}
        <section
          aria-labelledby="sign-in-heading"
          className="login-panel relative flex h-full min-h-0 min-w-0
            flex-col justify-center rounded-[25px]
            border border-[#d9e3ff] bg-white/[0.97]
            px-5 py-4 sm:px-8 lg:px-[8%]"
        >
          {/* Exact brand mark and tagline from the reference */}
          <div
            role="img"
            aria-label="AI WorksForce. AI agents. Human experts. Managed results."
            className="login-brand relative aspect-[470/82] w-full
              max-w-[470px] shrink-0 overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ai-worksforce-login.png"
              alt=""
              width={1536}
              height={1024}
              draggable={false}
              className="pointer-events-none absolute max-w-none select-none"
              style={{
                width: "326.8085%",
                height: "1248.7805%",
                left: "-200%",
                top: "-157.3171%",
              }}
            />
          </div>

          <div className="login-intro mt-[29px]">
            <h1
              id="sign-in-heading"
              className="text-[28px] leading-[1.25] font-bold
                tracking-[-0.8px] text-[#090d26] sm:text-[30px]"
            >
              Sign in to your account
            </h1>

            <p className="mt-[9px] text-[17px] leading-[1.55] text-[#65729a]">
              Access your AI WorksForce dashboard and manage your business
              operations.
            </p>
          </div>

          {/* Credentials login */}
          <form
            action={formAction}
            className="login-form mt-[25px]"
          >
            <label
              htmlFor="email"
              className="mb-[9px] block text-[16px] font-medium text-[#10142c]"
            >
              Email Address
            </label>

            <div className="relative">
              <span
                className="pointer-events-none absolute inset-y-0 left-[18px]
                  flex items-center text-[#52618e]"
              >
                <Icon name="mail" className="size-[23px]" />
              </span>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="Enter your email address"
                required
                className={inputClass}
              />
            </div>

            <div className="mb-[9px] mt-[23px] flex items-center justify-between gap-3">
              <label
                htmlFor="password"
                className="login-password-label text-[16px] font-medium text-[#10142c]"
              >
                Password
              </label>

              <a
                href={forgotPasswordHref}
                className="text-[14px] text-[#0751ff] hover:underline
                  focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                Forgot password?
              </a>
            </div>

            <div className="relative">
              <span
                className="pointer-events-none absolute inset-y-0 left-[18px]
                  flex items-center text-[#52618e]"
              >
                <Icon name="lock" className="size-[23px]" />
              </span>

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                required
                minLength={8}
                className={`${inputClass} pr-[52px]`}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((value) => !value)
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
                aria-pressed={showPassword}
                className="absolute inset-y-0 right-1 flex w-11
                  items-center justify-center rounded-lg text-[#52618e]
                  focus-visible:outline-2 focus-visible:outline-[#3165ff]"
              >
                <Icon
                  name={showPassword ? "eyeOff" : "eye"}
                />
              </button>
            </div>

            <label
              className="mt-[14px] flex w-fit cursor-pointer
                items-center gap-[11px] text-[16px] text-[#52618e]"
            >
              <input
                name="rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={(event) =>
                  setRememberMe(event.target.checked)
                }
                className="login-remember size-[23px] cursor-pointer accent-[#1454ff]"
              />

              Remember me
            </label>

            {state?.error && (
              <p
                role="alert"
                aria-live="polite"
                className="mt-3 text-sm text-red-600"
              >
                {state.error}
              </p>
            )}

            <button
              type="submit"
              disabled={isPending}
              aria-busy={isPending}
              className="login-submit mt-[17px] flex h-[52px] w-full items-center
                justify-center gap-[15px] rounded-[11px]
                bg-linear-to-r from-[#0752ff] via-[#234dff] to-[#8538ff]
                text-[18px] font-semibold text-white
                shadow-[0_3px_7px_rgba(44,82,255,0.18)]
                transition-[filter] hover:brightness-105
                focus-visible:outline-2 focus-visible:outline-offset-4
                focus-visible:outline-[#3165ff]
                disabled:cursor-wait disabled:opacity-70"
            >
              {isPending ? "Signing in..." : "Sign In"}

              {!isPending && (
                <Icon
                  name="arrow"
                  className="size-[23px]"
                />
              )}
            </button>
          </form>

          <div className="login-divider my-[26px] flex items-center gap-[15px]">
            <span className="h-px flex-1 bg-[#e2e7f2]" />

            <span className="shrink-0 text-[14px] text-[#596994]">
              Or continue with
            </span>

            <span className="h-px flex-1 bg-[#e2e7f2]" />
          </div>

          <div className="login-social -mt-[10px] grid grid-cols-1 gap-[14px] sm:grid-cols-2">
            {/* Google OAuth */}
            <form action={signInWithGoogle}>
              <button
                type="submit"
                className="flex min-h-[52px] w-full items-center justify-center
                  gap-3 rounded-[11px] border border-[#dce3f2]
                  bg-white px-3 py-3 text-[14px] text-[#25325c]
                  hover:bg-[#f6f8ff] focus-visible:outline-2
                  focus-visible:outline-offset-2 focus-visible:outline-[#3165ff]"
              >
                <GoogleLogo />

                <span>Continue with Google</span>
              </button>
            </form>

            {/* Microsoft OAuth */}
            <form action={signInWithMicrosoft}>
              <button
                type="submit"
                className="flex min-h-[52px] w-full items-center justify-center
                  gap-3 rounded-[11px] border border-[#dce3f2]
                  bg-white px-3 py-3 text-[12px] text-[#25325c]
                  hover:bg-[#f6f8ff] focus-visible:outline-2
                  focus-visible:outline-offset-2 focus-visible:outline-[#3165ff]"
              >
                <MicrosoftLogo />

                <span>Continue with Microsoft</span>
              </button>
            </form>
          </div>

          <p className="login-contact text-center text-[14px] leading-6 text-[#5b6992]">
            Don&apos;t have an account?{" "}
            <a
              href={administratorHref}
              className="text-[#0751ff] hover:underline
                focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Contact your administrator
            </a>
          </p>

          <div className="grow" />

          <div
            className="login-security mt-[32px] grid grid-cols-1 gap-5 rounded-[15px]
              bg-[#f5f7ff] px-[22px] py-[27px]
              sm:grid-cols-3 sm:gap-3 lg:-mx-[29px]"
          >
            {[
              {
                icon: "shield" as const,
                title: "Secure Login",
                description: "Your data is protected",
              },
              {
                icon: "lock" as const,
                title: "SSO Ready",
                description: "Enterprise login",
              },
              {
                icon: "headphones" as const,
                title: "24/7 Support",
                description: "Always here to help",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-[13px]"
              >
                <span
                  className="flex size-[43px] shrink-0 items-center
                    justify-center rounded-full bg-[#ebe8ff] text-[#6d42ff]"
                >
                  <Icon
                    name={item.icon}
                    className="size-[23px]"
                  />
                </span>

                <div>
                  <p className="text-[11px] leading-5 font-medium text-[#23315f]">
                    {item.title}
                  </p>

                  <p className="text-[10px] leading-[18px] text-[#66759c]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}