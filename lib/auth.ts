"use client";

import { User } from "./types";

export const saveAuth = (token: string, user: User) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("karmah_token", token);
    localStorage.setItem("karmah_user", JSON.stringify(user));
    document.cookie = `karmah_token=${token}; path=/; max-age=${7 * 24 * 60 * 60}; samesite=lax`;
  }
};

export const clearAuth = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("karmah_token");
    localStorage.removeItem("karmah_user");
    document.cookie = "karmah_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
};

export const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("karmah_token");
  }
  return null;
};

export const getUser = (): User | null => {
  if (typeof window !== "undefined") {
    const userStr = localStorage.getItem("karmah_user");
    if (userStr) {
      try {
        return JSON.parse(userStr) as User;
      } catch (e) {
        return null;
      }
    }
  }
  return null;
};

export const isAuthenticated = (): boolean => {
  return !!getToken();
};
