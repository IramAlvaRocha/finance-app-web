
import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './router/app.router'

function FinanceApp() {


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default FinanceApp
