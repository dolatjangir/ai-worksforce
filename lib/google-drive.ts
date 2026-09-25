import { google } from "googleapis";

function getServiceAccountCredentials() {
  const json = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

  if (!json) {
    throw new Error(
      "GOOGLE_SERVICE_ACCOUNT_JSON is not configured."
    );
  }

  try {
    return JSON.parse(json);
  } catch {
    throw new Error(
      "GOOGLE_SERVICE_ACCOUNT_JSON is invalid JSON."
    );
  }
}

export function getGoogleDrive() {
  const credentials =
    getServiceAccountCredentials();

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: [
      "https://www.googleapis.com/auth/drive",
    ],
  });

  return google.drive({
    version: "v3",
    auth,
  });
}