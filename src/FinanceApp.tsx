
import { RouterProvider } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import './App.css'
import { router } from './router/app.router'

function FinanceApp() {

  return (
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
  )
}

export default FinanceApp
