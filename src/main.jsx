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
