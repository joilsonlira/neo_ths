import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import ErrorPage from "./routes/ErrorPage"

//configurando React/Router
import Home from './routes/Home'
import Infectados from './routes/Infectados'
import Sistemas from './routes/Sistemas'
import Category_system from './routes/Category_system'
import Jobs_system from './routes/Jobs_system'
import Mapa from './routes/Mapa'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //pagina de erro
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/infectados",
        element: <Infectados />
      },
      {
        path: "/sistemas",
        element: <Sistemas />
      },
      {
        path: "/sistemas/corporal",
        element: <Category_system />
      },
      {
        path: "/sistemas/jobs",
        element: <Jobs_system />
      },
      {
        path: "/mapa",
        element: <Mapa />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
