import { useNavigate } from "react-router-dom";

import { useAuth } from "@/hooks";
import { logout } from "@/lib/auth";

export default function Home() {
  const auth = useAuth();
  const navigate = useNavigate();

  async function handleButtonClick() {
    await logout();
    navigate("/login", { replace: true });
  }

  return (
    <div>
      <div>
        <p>Home Page</p>
        <p>User: {JSON.stringify(auth.user)}</p>
      </div>
      <div>
        <button onClick={handleButtonClick}>Logout</button>
      </div>
    </div>
  );
}
