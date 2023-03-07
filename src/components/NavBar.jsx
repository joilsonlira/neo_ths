import { Link } from "react-router-dom";
import Icon_ambientacao from "../assets/icon/icon_ambi_color.png"
import Icon_infectado from "../assets/icon/icon_infectados_color.png"
import Icon_Sistema from "../assets/icon/icon_sistema-color.png"
import Icon_mapa from "../assets/icon/icon_mapa_color.png"

const NavBar = ()=>{
    return(
        
          <nav className="main_menu">

            <ul>
              <li>
                <div className="icon">
                  <img
                    src={Icon_ambientacao}
                    alt="ICON"
                  />
                </div>
                <Link to={"/"} className="menu_item">Ambientação</Link>
              </li>

              <li>
                <div className="icon">
                  <img
                    src={Icon_infectado}
                    alt="ICON"
                  />
                </div>
                <Link to={"/infectados"} className="menu_item">Infectados</Link>
              </li>

              <li>
                <div className="icon">
                  <img
                    src={Icon_Sistema}
                    alt="ICON"
                  />
                </div>
                <Link to={"/sistemas"} className="menu_item">Sistemas</Link>
              </li>

              {/* <li>
                <div className="icon">
                  <img
                    src={Icon_mapa}
                    alt="ICON"
                  />
                </div>
                <Link to={"/mapa"} className="menu_item">Mapa</Link>
              </li> */}
            </ul>
            
          </nav>

    )
}
export default NavBar