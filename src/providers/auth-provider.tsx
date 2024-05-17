import React, { createContext, useEffect } from "react";
import { Await, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

interface AuthProps {
  user: User;
}

export const AuthContext = createContext<AuthProps | null>(null);

function Loading() {
  return <p>Loading...</p>;
}

function Error() {
  const navigate = useNavigate();
  const snackbar = useSnackbar();

  useEffect(() => {
    localStorage.removeItem(import.meta.env.VITE_TOKEN_KEY);
    snackbar.enqueueSnackbar("Invalid credentials.", { variant: "error" });
    navigate("/login", { replace: true });
  }, [navigate, snackbar]);

  return null;
}

export function AuthProvider() {
  const data = useLoaderData() as { user: Promise<User> };

  return (
    <React.Suspense fallback={<Loading />}>
      <Await resolve={data.user} errorElement={<Error />}>
        {(user) => (
          <AuthContext.Provider
            value={{
              user,
            }}
          >
            <Outlet />
          </AuthContext.Provider>
        )}
      </Await>
    </React.Suspense>
  );
}
