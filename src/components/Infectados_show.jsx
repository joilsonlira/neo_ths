import { Box_infectado } from "./Infectado_box.styled"
import Infectado_img from '../assets/img/Runner-removebg-preview.png'

export default function Infectado_container(){
    return(
        <div className="infectado_container">
            <div className="infectado_photo">
                <img src={Infectado_img} alt="infectado" />
            </div>
            <div className="hud_infectados">
                <Box_infectado>
                    <img src={Infectado_img} alt="" />
                </Box_infectado>
                <Box_infectado>
                    <img src={Infectado_img} alt="" />
                </Box_infectado>
                <Box_infectado>
                    <img src={Infectado_img} alt="" />
                </Box_infectado>
                <Box_infectado>
                    <img src={Infectado_img} alt="" />
                </Box_infectado>
                
                
            </div>
        </div>
    )
}