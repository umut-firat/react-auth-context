import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function login() {
    localStorage.setItem(import.meta.env.VITE_TOKEN_KEY, "Test");
    navigate("/");
  }

  return (
    <div>
      <div>
        <p>Login Page</p>
      </div>
      <div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
