import { useRouteLoaderData } from "react-router-dom";
import Indicador from "../components/Dashboard/Indicador";
import { authProvider } from "../routes/authProvider";



export default function DashboardPage() {
    const auth = authProvider
    const root = useRouteLoaderData("root") 
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <Indicador />
        {auth?.token}
        {root?.token}
      </div>
    </div>
  );
}
