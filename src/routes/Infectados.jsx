import React from "react";
import { Content_container, Content_title } from "../components/Content.styled";
import { Box_infectado, Infectado_info } from "../components/Infectado_box.styled";
import fundo_info from '../assets/img/depositphotos_2365718-stock-photo-seamless-old-canvas-texture.jpg'
import selo from "../assets/img/confidencial.png"
import Data from "../Info.json"
import { useState } from "react";

const Infectados = () => {
    
    const Infectados = Data.pages[1].content.Infectados
    
    let [infectado_info, set_info] = useState(1)

    let bg_color = "#802525"
    let txt_color = "white"
    
    return(
        <>
        <section className="main_section inf">
            <Content_title bg_color={bg_color} txt_color={txt_color}>
                <h2>Infectados</h2>
            </Content_title>
                
            <Content_container bg_color={bg_color} direction={'row'}>
            <div className="infectado_container">
                <div className="infectado_photo">
                    <img src={Infectados[infectado_info].img} alt="infectado" />
                </div>
                <div className="hud_infectados">
                    {
                        Infectados.map((infectdo)=>{
                            return( 
                                <Box_infectado 
                                    className="btn_infectado" 
                                    onClick={()=>{
                                        set_info(infectado_info = infectdo.id-1)
                                    }}>
                                    <img src={infectdo.thumb} alt="" />
                                </Box_infectado>
                            )
                        })
                    }
                </div>
            </div>
                <Infectado_info  fundo_info={fundo_info}>
                    <h2>{Infectados[infectado_info].stage}</h2>
                    <p>{Infectados[infectado_info].info}</p>
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