import { defer } from "react-router-dom";

export async function authLoader() {
  // Fake API call
  const response = new Promise((resolve) => setTimeout(resolve, 2000));

  return defer({
    user: response.then(() => {
      const user: User = { id: 1, username: "Test" };

      return user;
    }),
  });
}
