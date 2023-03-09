import React from "react";
import { Content_container, Content_title } from "../components/Content.styled";
import corporal_icon from "../assets/img/corporal_icon.png"
import com_habilidade from "../assets/img/com_habilidade.png"
import sem_habilidade from "../assets/img/sem_habilidade.png"

import faca_icon from "../assets/img/arma_branca.png"
import weapons_icon from "../assets/img/weapons.png"

import { Category_box } from '../components/System_box.styled'
import { Sub_category } from "../components/SubCategory.styled";
import { Btn_back } from "../components/Btn_back.styled";

const bg_color = "#D9D9D9"


const Category_system = (props) => {
    return(
        <section className="main_section">
            <Content_title bg_color={bg_color}>
                    <h2>sistemas</h2>
            </Content_title>
                    
            <Content_container bg_color={bg_color}>
                <div className="side_menu">
                    <div className="menu_pericia">
                        <Category_box className="category_enable" cursor={"default"}>
                            <img src={corporal_icon} alt="system icon" />
                            <h3>corporal</h3>
                        </Category_box>
                        <Sub_category>
                            <img src={faca_icon} alt="icone sem prestigio" />
                            <p>Perícia em armas brancas</p>
                        </Sub_category>
                        
                        <Sub_category>
                            <img src={weapons_icon} alt="icone sem prestigio" />
                            <p>Perícia em armas de fogo</p>
                        </Sub_category>
                    </div>
                    
                    <Btn_back>
                        <strong>back</strong>
                    </Btn_back>

                </div>
                
                <div className="ability_box">
                    <header>
                        <img src={com_habilidade} alt="icom" />
                        <h2>Com habilidades em luta física</h2>
                    </header>
                    <div className="ability_description">
                        <p>No caso da luta corporal com perícias físicas, é necessário apenas um turno para preparação de base e ataque. Os sistemas de ataque e defesa continuam os mesmos para o caso de lutas sem habilidade. Durante as neutras, pode fazer-se necessário o uso do sistema de dados pelo administrador afim de fazer valer as perícias físicas.</p>
                        <p>
                        Armas brancas: Para a utilização das armas brancas (facas, canivetes, machados, tacos, entre outras), é necessário seguir as regras conforme dispostas a seguir.
                        </p>
                    </div>
                </div>
                <div className="ability_box">
                    <header>
                        <img src={sem_habilidade} alt="icom" />
                        <h2>Sem habilidades em luta física</h2>
                    </header>
                    <div className="ability_description">
                        <p>
                        Nesse caso, os ataques são distribuídos em dois turnos, onde o primeiro serve para organização e preparação de uma base e a segunda é utilizada para efetuação do ataque.
                        </p>
                        <div className="exemplo">
                            <small>Exemplo :</small>
                            <p>
                            <span>Diego:</span> * Firmou os pés no chão, preparando uma base que serviria de apoio contra o oponente. *
                            </p>
                            <p>
                            <span>Rebeca:</span> * Assim como o oponente, realizou a preparação física, dobrando um pouco dos joelhos para conquistar maior apoio na hora do ataque. *
                            </p>
                        </div>
                        <p>
                        A luta corporal segue o estilo "ataque, defesa, contra-ataque", repetidamente. Além disso, local de ataque e forma de ataque devem ser explicitados.
                        </p>
                        <div className="exemplo">
                            <small>Exemplo :</small>
                            <p>
                            <span>Diego:</span> * Em vantagem, definiu o primeiro ataque, delegando o punho fechado em direção ao estômago da mulher, utilizando da força contra a oponente. *
                            </p>
                            <p>
                            <span>Rebeca:</span> * Ao perceber que o braço do rapaz avançava em direção ao seu estômago para um ataque, Rebeca juntou os braços rente ao corpo, na posição de sua barriga, impedindo que o golpe fosse acertado no local indicado. Ao invés disso, o soco foi recebido nos braços unidos, diminuindo o impacto. Em seguida, investiu um soco no queixo do rapaz, afim de desacordá-lo temporariamente. *
                            </p>
                        </div>
                        <p>
                        Nos turnos de defesa, NÃO é permitido o uso de desvios em duas ações seguidas. Desse modo, também NÃO é permitido um contra-ataque quando há desvio no turno de defesa.
                        </p>
                        <div className="exemplo">
                            <small>Exemplo :</small>
                            <p>
                            <span>Diego:</span> * Em sua direção, vinha o golpe da moça em direção ao seu queixo. De prontidão, saltou para trás afim de livrar-se do ataque.*<div className="modificador negativo"> - Defesa (Desvio) </div>
                            </p>
                            <p>
                            <span>Rebeca:</span> * Visto que o rapaz não podia atacar pois havia se afastado, Rebeca tentou atacá-lo com um chute em direção a sua barriga, afim de atordoá-lo.* <div className="modificador negativo"> - Ataque</div>
                            </p>
                            <p><span>Diego:</span> *Diego, rapidamente, alcançou as pernas da mulher com os braços, afim de impedir que fosse atacado com o chute e pudesse realizar o contra-ataque, empurrando-a para trás.* <div className="modificador negativo"> - Defesa</div> <div className="modificador positivo"> + Contra-ataque</div>
                            </p>
                            <p>
                            <span>Rebeca:</span> *Antes que pudesse tentar concluir o ataque e ser derrubada pelo homem, Rebeca percebeu seus movimentos afim de agarrá-la e cessou o movimento em direção ao estômago do rapaz, impedindo que fosse atacada.* <div className="modificador negativo"> - Defesa</div>
                            </p>
                        </div>
                        <p>
                        Além dos desvios, também é permitido avanços para diminuir a distância durante a luta. Porém, eles só podem acontecer em turnos de ataque. Com isso, complementa-se que as lutas corporais só ocorrem a 0q de distância.
                        </p>
                        <div className="exemplo">

                        <small>Exemplo :</small>
                            <p>
                            <span>Diego:</span> * Visto que estava distante (1q), Diego avança para encurtar as distância contra Rebeca e utiliza do punho fechado para acertar a face da mulher, afim de nocauteá-la.*<div className="modificador negativo"> - Ataque</div>
                            </p>
                        </div>
                    </div>
                </div>
            </Content_container>
        </section>
    )
}
export default Category_system
