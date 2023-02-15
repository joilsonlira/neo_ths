import './App.css'
import Content from "./components/content"
import Icon_ambientacao from "./assets/icon/icon_ambi_color.png"
import Icon_infectado from "./assets/icon/icon_infectados_color.png"
import Icon_Sistema from "./assets/icon/icon_sistema-color.png"
import Icon_mapa from "./assets/icon/icon_mapa_color.png"

function App() {

  return (
    <div className="App">
      <main className="main_container">
        <header className="main_header">
          <div className="logo">
            THEHIDDENSHIELD
          </div>
          <nav className="main_menu">
            <ul>
              <li>
                <div className="icon">
                  <img
                    src={Icon_ambientacao}
                    alt="ICON"
                  />
                </div>
                <a href="teste" className="menu_item">Ambientação</a>
              </li>

              <li>
                <div className="icon">
                  <img
                    src={Icon_infectado}
                    alt="ICON"
                  />
                </div>
                <a href="teste" className="menu_item">Infectados</a>
              </li>

              <li>
                <div className="icon">
                  <img
                    src={Icon_Sistema}
                    alt="ICON"
                  />
                </div>
                <a href="teste" className="menu_item">Sistemas</a>
              </li>

              <li>
                <div className="icon">
                  <img
                    src={Icon_mapa}
                    alt="ICON"
                  />
                </div>
                <a href="teste" className="menu_item">Mapa</a>
              </li>
            </ul>

          </nav>
        </header>
        <section className="main_section">

          <Content 
            title="Ambientação"
          />

        </section>
      </main>
    </div>
  )
}

export default App
