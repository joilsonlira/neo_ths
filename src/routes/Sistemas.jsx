import React from "react";
import { Content_container, Content_title } from "../components/Content.styled";
import Paragraph from "../components/Paragraph";
import corporal_icon from "../assets/img/corporal_icon.png"


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
                <div className="box_category">
                    <img src={corporal_icon} alt="system icon" />
                    <h3>corporal</h3>
                </div>
                <div className="box_category">
                    <img src={corporal_icon} alt="system icon" />
                    <h3>corporal</h3>
                </div>
                <div className="box_category">
                    <img src={corporal_icon} alt="system icon" />
                    <h3>corporal</h3>
                </div>
                <div className="box_category">
                    <img src={corporal_icon} alt="system icon" />
                    <h3>corporal</h3>
                </div>
                <div className="box_category">
                    <img src={corporal_icon} alt="system icon" />
                    <h3>corporal</h3>
                </div>
            </div>
            <div className="content_info system deta">
                <Paragraph className="paragraph_sytem" text={textos[1]}/>
            </div>

        </Content_container>
    
    </section>
            
    )
}

export default Sistemas