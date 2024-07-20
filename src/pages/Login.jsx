
import { useNavigate } from "react-router-dom";
import { authProvider } from "../routes/authProvider";

export default function LoginPage() {
  const auth = authProvider;
  const navigate = useNavigate();
  const handleLogin = () => {
    fetch("http://localhost:3000/auth")
      .then((res) => res.json())
      .then((data) => {
        auth.token = data?.acess_token;
        navigate("/");
      });
  };
  return (
    <div>
      <form>
        <fieldset>
          <label>E-mail</label>
          <input type="text" />
        </fieldset>
        <fieldset>
          <label>Senha</label>
          <input type="password" />
        </fieldset>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}
