import Cookies from "js-cookie";

export function setCookiesItem(key: string, value: string): void {
  Cookies.set(key, value, { secure: true, sameSite: "strict", httpOnly: true });
}

export function getCookiesItem(key: string): string | null {
  return Cookies.get(key) || null;
}

export function removeCookiesItem(key: string) {
  Cookies.remove(key, { secure: true, sameSite: "strict", httpOnly: true });
}
