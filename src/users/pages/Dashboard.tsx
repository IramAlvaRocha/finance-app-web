import { Helmet } from "react-helmet"
import { DashboardCard } from "../Components/DashboardCard"

export const Dashboard = () => {
  return (
    <>
     <Helmet>
      <title>Dashboard | Finance App</title>
     </Helmet>
     <DashboardCard />
    </>
  )
}