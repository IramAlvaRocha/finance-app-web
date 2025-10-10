import { CustomHeading } from "@/components/CustomHeading"
import { UserLayout } from "../Layout/UserLayout"
import { Helmet } from "react-helmet"

export const Dashboard = () => {
  return (
    <>
     <Helmet>
      <title>Dashboard | Finance App</title>
     </Helmet>
     <h1 className="text-gray-800">
      Hola
     </h1>
    </>
  )
}