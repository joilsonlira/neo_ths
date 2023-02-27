import './App.css'
import './Fonts.css'

import { Outlet } from 'react-router-dom'
import NavBar from "./components/NavBar"


function App() {

  return (
    <div className="App">
      <main className="main_container">
      <header className="main_header">
          <div className="logo">
            HIDDENSHIELD
            <small></small>
          </div>
          <NavBar />
      </header>


        <Outlet />


      </main>
    </div>
  )
}

export default App
