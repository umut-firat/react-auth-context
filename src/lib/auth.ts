import { defer } from "react-router-dom";

export async function login() {
  // Fake login

  await new Promise((resolve) => setTimeout(resolve, 1000));
  window.localStorage.setItem(
    import.meta.env.VITE_AUTH_TOKEN_KEY,
    "test-token"
  );
}

export async function logout() {
  // Fake logout

  await new Promise((resolve) => setTimeout(resolve, 1000));
  window.localStorage.removeItem(import.meta.env.VITE_AUTH_TOKEN_KEY);
}

export async function auhenticate() {
  // Fake auth refresh

  const user: User = {
    id: 1,
    username: "admin",
  };

  return defer({
    user: new Promise((resolve) => setTimeout(() => resolve(user), 1000)),
  });
}
