import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/pedidos">Pedidos</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </header>
  );
}
