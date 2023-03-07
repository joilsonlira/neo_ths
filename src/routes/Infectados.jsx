import React from "react";
import { Content_container, Content_title } from "../components/Content.styled";
import { Box_infectado, Infectado_info } from "../components/Infectado_box.styled";
import fundo_info from '../assets/img/depositphotos_2365718-stock-photo-seamless-old-canvas-texture.jpg'
import selo from "../assets/img/confidencial.png"
import runner_img from '../assets/img/imagem_2023-03-07_103855615-removebg-preview.png'
import perseguidores_img from '../assets/img/Perseguidores.png'
import estaladores_img from '../assets/img/Estaladores.png'
import baiacus_img from '../assets/img/Baiacus.png'
import runner_thumb from '../assets/img/Corredores.jpg'
import perseguidores_thumb from '../assets/img/Perseguidores.jpg'
import estaladores_thumb from '../assets/img/Estaladores.jpg'
import baiacus_thumb from '../assets/img/Baiacus.jpg'
import { useState } from "react";

const Infectados = () => {

    let infectado = [
        {
            stage:"corredor",
            description:"Caso a infecção não seja evitada, ela se completa e atribui ao indivíduo o primeiro estágio da doença. Nesse caso, o infectado apresenta comportamentos violentos e a força, resistência e velocidade de um ser humano comum. O corpo está repleto de úlceras e a boca esbanja sangue junto a saliva.",
            img: runner_img
        },
        {
            stage:"perseguidores",
            description:"No segundo estágio da doença, locais do corpo do infectado passam a ser tomados pela aparência do fungo. Um cogumelo acinzentado surge dos olhos, narizes, boca ou orelha dos errantes. Eles possuem uma força maior e uma velocidade um pouco mais aflorada quando comparados aos corredores. Sua resistência é a mesma dos humanos, mas o ataque pode ser dificultado devido a intensa movimentação.",
            img: perseguidores_img
        },
        {
            stage:"Estaladores",
            description:" Esses adoentados já estão infectados a certo tempo pelo fungo. Seu rosto é tomado pela aparência do Cordyceps e apenas sua boca é livre do avanço do fungo. Eles emitem ruídos estridentes que avisam outros infectados sobre a presença de um indivíduo saudável. Eles não enxergam, a não ser pela ecolocalização que desenvolvem no estágio três da infecção. Eles possuem uma força significativa e uma velocidade um tanto menor que os perseguidores devido a ausência da visão. Sua resistência é um pouco maior comparado aos corredores e perseguidores.",
            img: estaladores_img
        },
        {
            stage:"Baiacus",
            description:"Baiacus são o último e mais raro estágio da doença. Isso porque estes seres apresentam o corpo avantajado, repleto de micoses, úlceras e do fungos. É quase impossível identificar os membros do corpo desse ser. Eles podem ter um excesso do cogumelo acinzentado nas suas costas, formando uma corcunda. São extremamente fortes e resistentes a ataques. Não são tão rápidos como nos outros casos, mas fortes o bastante para serem apavorantes.",
            img: baiacus_img
        }
    ]
    
    let [infectado_info, set_info] = useState(2)

    let bg_color = "#9D2828"
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
                    <img src={infectado[infectado_info].img} alt="infectado" />
                </div>
                <div className="hud_infectados">
                    <Box_infectado 
                        className="btn_infectado" 
                        onClick={()=>{
                            set_info(infectado_info = 0)
                        }}>
                        <img src={runner_thumb} alt="" />
                    </Box_infectado>
                    <Box_infectado 
                        className="btn_infectado"
                        onClick={()=>{
                            set_info(infectado_info = 1)
                        }}>
                        <img src={perseguidores_thumb} alt="" />
                    </Box_infectado>
                    <Box_infectado
                        className="btn_infectado"
                        onClick={()=>{
                            set_info(infectado_info = 2)
                        }}>
                        <img src={estaladores_thumb} alt="" />
                    </Box_infectado>
                    <Box_infectado
                        className="btn_infectado"
                        onClick={()=>{
                            set_info(infectado_info = 3)
                        }}>
                        <img src={baiacus_thumb} alt="" />
                    </Box_infectado>
                </div>
            </div>
                <Infectado_info  fundo_info={fundo_info}>
                    <h2>{infectado[infectado_info].stage}</h2>
                    <p>{infectado[infectado_info].description}</p>
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