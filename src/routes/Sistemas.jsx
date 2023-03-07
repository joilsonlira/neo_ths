import React from "react";
import { Link } from "react-router-dom";
import { Content_container, Content_title } from "../components/Content.styled";
import Paragraph from "../components/Paragraph";
import corporal_icon from "../assets/img/corporal_icon.png"
import jobs_icon from "../assets/img/jobs.png"
import weapons_icon from "../assets/img/weapons.png"
import loots_icon from "../assets/img/loots.png"
import resources_icon from "../assets/img/resources.png"
import { Category_box } from '../components/System_box.styled'

const bg_color = "#D9D9D9"

const textos = ['As lutas funcionam No sistema de turnos definidos entre defesa e ataque. Corporais entre players, geralmente, iniciam em um turno de ataque. Porém, corporais de players contra infectados costumam iniciar em turnos de defesa para o sobrevivente. É preciso ter discernimento acerca da força física do seu personagem, visto que, para manter o senso e a ordem, os players devem conhecer seu oponente e saber de suas vantagens físicas como velocidade, força e resistência. Ações consideradas extremistas, a exemplo de uma luta entre player desarmado e baiacu, serão passíveis de morte. Toda ação gera uma reação que deve ser respeitada e considerada até que um dos lados vença ou desista da luta. Nos casos onde a interação é negada pelo trammer, não é disponibilizada uma segunda tentativa de ação, salvo nos casos onde há erro de neutra por parte do administrador','Luta corporal: Caracteriza-se como luta corporal qualquer batalha que NÃO envolva nenhum tipo de arma (brancas ou fogo). São permitidos socos, empurrões, pontapés, entre outros. Entretanto, é necessário seguir as regras dispostas para que as interações sejam efetivas.']

const Sistemas = (props) => {
    return(
        <section className="main_section">
            
        <Content_title bg_color={bg_color}>
            <h2>sistemas</h2>
        </Content_title>
            
        <Content_container bg_color={bg_color} direction={'column'}>
            <div className="content_info system">
                <Paragraph className="paragraph_sytem" text={textos[0]}/>
            </div>
            <div className="category">
                <Link to={"/sistemas/corporal"}>
                    <Category_box>
                        <img src={corporal_icon} alt="system icon" />
                        <h3>corporal</h3>
                    </Category_box>
                </Link>
                <Link to={"/sistemas/jobs"}>    
                    <Category_box>
                        <img src={jobs_icon} alt="system icon" />
                        <h3>Profissões</h3>
                    </Category_box>
                </Link>
                <Category_box>
                    <img src={weapons_icon} alt="system icon" />
                    <h3>Armas</h3>
                </Category_box>
                <Category_box>
                    <img src={loots_icon} alt="system icon" />
                    <h3>Loots</h3>
                </Category_box>
                <Category_box>
                    <img src={resources_icon} alt="system icon" />
                    <h3>Recursos</h3>
                </Category_box>
            </div>
            <div className="content_info system deta">
                <Paragraph className="paragraph_sytem" text={textos[1]}/>
            </div>

        </Content_container>
    
    </section>
            
    )
}

export default Sistemas