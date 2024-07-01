import { useNavigate } from "react-router-dom";

import { login } from "@/lib/auth";

export default function Login() {
  const navigate = useNavigate();

  async function handleButtonClick() {
    await login();
    navigate("/");
  }

  return (
    <div>
      <div>
        <p>Login Page</p>
      </div>
      <div>
        <button onClick={handleButtonClick}>Login</button>
      </div>
    </div>
  );
}
