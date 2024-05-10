import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem(import.meta.env.VITE_TOKEN_KEY);
    navigate("/login", { replace: true });
  }

  return (
    <div>
      <div>
        <p>Home Page</p>
      </div>
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
