import { Helmet } from "react-helmet-async";
import { DashboardCard } from "../Components/DashboardCard";

export const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Finance App</title>
      </Helmet>
      {/* Welcome Section */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-balance text-black">
          Bienvenido, Iram
        </h2>
        <p className="text-muted-foreground">
          Aquí está el resumen de tus finanzas personales
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard />
      </div>
    </>
  );
};
