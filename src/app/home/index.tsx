import { useNavigate } from "react-router-dom";

import { useAuth } from "@/hooks";

export default function Home() {
  const auth = useAuth();
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem(import.meta.env.VITE_TOKEN_KEY);
    navigate("/login", { replace: true });
  }

  return (
    <div>
      <div>
        <p>Home Page</p>
        <p>User: {JSON.stringify(auth.user)}</p>
      </div>
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
