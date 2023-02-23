import React from "react";
import { Content_container, Content_title } from "../components/Content.styled";
import { Infectado_info } from "../components/Infectado_box.styled";
import Infectado_container from "../components/Infectados_show";
import fundo_info from '../assets/img/depositphotos_2365718-stock-photo-seamless-old-canvas-texture.jpg'
import selo from "../assets/img/confidencial.png"

const Infectados = (props) => {
    let bg_color = "#9D2828"
    let txt_color = "white"
    return(
        <>
        <section className="main_section inf">
            <Content_title bg_color={bg_color} txt_color={txt_color}>
                <h2>Infectados</h2>
            </Content_title>
                
            <Content_container bg_color={bg_color}>
                <Infectado_container />
                <Infectado_info  fundo_info={fundo_info}>
                    <h2>Corredores</h2>
                    <p>Caso a infecção não seja evitada, ela se completa e atribui ao indivíduo o primeiro estágio da doença. Nesse caso, o infectado apresenta comportamentos violentos e a força, resistência e velocidade de um ser humano comum. O corpo está repleto de úlceras e a boca esbanja sangue junto a saliva.</p>
                    <img className="selo" src={selo} alt="Selo confidencial" />
                </Infectado_info>
            </Content_container>
        </section>
            <div className="info">
                <h2>FORMAS DE INFECÇÃO</h2>
                <p>
                    Ao ser atacado por um infectado, todo jogador corre o risco de receber uma mordida que transmite a doença em instantes. Além da clássica forma de infecção, a inalação dos esporos do fungo no período reprodutivo também acomete os indivíduos, fazendo com que esses contraiam o parasita mais lentamente.
                </p>
            </div>
        </>
    )
}

export default Infectados