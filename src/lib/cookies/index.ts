import Cookies from "js-cookie";

const isHttpsEnv = process.env.NODE_ENV !== "development";

export function setCookiesItem(key: string, value: string): void {
  Cookies.set(key, value, {
    secure: true,
    sameSite: "strict",
    httpOnly: isHttpsEnv,
  });
}

export function getCookiesItem(key: string): string | null {
  return Cookies.get(key) || null;
}

export function removeCookiesItem(key: string) {
  Cookies.remove(key, {
    secure: true,
    sameSite: "strict",
    httpOnly: isHttpsEnv,
  });
}
