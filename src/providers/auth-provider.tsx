import { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

interface AuthProps {
  user: User;
}

export const AuthContext = createContext<AuthProps | null>(null);

export function AuthProvider() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const snackbar = useSnackbar();

  useEffect(() => {
    async function fetchUser() {
      // Fake user request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setUser({
        id: 1,
        username: "test",
      });
    }

    fetchUser()
      .then(() => setIsLoading(false))
      .catch(() => {
        localStorage.removeItem(import.meta.env.VITE_TOKEN_KEY);
        snackbar.enqueueSnackbar("Invalid credentials.", { variant: "error" });
        navigate("/login", { replace: true });
      });
  }, [navigate, snackbar]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        user: user!,
      }}
    >
      <Outlet />
    </AuthContext.Provider>
  );
}
