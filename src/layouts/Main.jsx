import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
