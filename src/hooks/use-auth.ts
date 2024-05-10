import { useContext } from "react";

import { AuthContext } from "@/providers/auth-provider";

export function useAuth() {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("useAuth must be within AuthProvider.");
  }

  return auth;
}
