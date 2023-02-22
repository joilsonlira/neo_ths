import React from "react";
import { Content_container, Content_title } from "../components/Content.styled";
import { Infectado_info } from "../components/Infectado_box.styled";
import Infectado_container from "../components/Infectados_show";

const Infectados = (props) => {
    let bg_color = "#9D2828"
    return(
        <section className="main_section">
            <Content_title bg_color={bg_color}>
                <h2>Infectados</h2>
            </Content_title>
                
            <Content_container bg_color={bg_color}>
                <Infectado_container />
                <Infectado_info />
            </Content_container>
        </section>
    )
}

export default Infectados