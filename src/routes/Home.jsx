import React from "react";
import Paragraph from "../components/Paragraph";
import Fundo from "../assets/img/teste_fundo_2.png";
import { Content_container, Content_title } from "../components/Content.styled";

const textos = [
    "Com o fim da tensão entre os países ocidentais capitalistas apoiados pelos Estados Unidos e as nações orientais socialistas comandadas pela União das Repúblicas Socialistas Soviéticas, o mundo se viu em uma nova formatação. O avanço econômico da grande nação americana evoluiu de acordo com suas técnicas industriais, agrícolas e, principalmente, tecnológicas. O impacto dos novos modelos agregados a economia estadunidense veio à tona, afetando principalmente áreas do interior e do campo.",
    "Uma das primeiras medidas apoiadas pelo governo dos Estados Unidos foi a liberação do uso de pesticidas para aumento da produção e, consequentemente, da renda comercial de trigo e milho. A deliberação para o uso de biopesticidas importados da Ucrânia começou a ser discutido pelos ambientalistas quando analisado vertentes do vetor utilizado no combate a pragas.",
    "O Cordyceps - gênero de fungos caracterizados por parasitar seres vivos em busca de locais adequados para sua proliferação - sofreu uma espécie de modificação com o uso intenso na agricultura. Em pouco tempo, casos de uma infecção começaram a surgir entre camponeses, fazendeiros, caseiros e agregados. Inúmeros relatos de febre, surgimento de úlceras externas, dores no corpo, manchas e, principalmente, perda da capacidade motora e intelectual começaram a chegar nos hospitais despreparados do interior americano.",
    "Nos primeiros dias, a febre alta era letal e os poucos profissionais da saúde encaminhados de tratar da doença já estavam infectados pelo fungo ao inalar os esporos liberados na fase de reprodução do parasita. Semanas após o início dos casos, as clínicas médicas perderam o controle da situação. Os novos infectados apresentavam resistência aos medicamentos e pareciam não responder aos tratamentos. A febre, antes letal, encontrava resistência do Cordyceps em manter o corpo vivo para a continuação do parasitismo.",
    "Os primeiros relatos de violência dos afetados começaram a surgir. Inúmeros ataques foram relatados em todas as pequenas cidades atingidas pela infecção. Imediatamente, os que sobreviviam procuravam abrigo nas cidades grandes, levando o problema para as grandes capitais. Com o descontrole em massa, o governo passou a admitir o uso de força militar para contenção dos infectados. O extermínio de pessoas infectadas começara mas não obtinha sucesso.",
    "A queda do governo americano veio junto a outras potências mundiais. A infecção já havia se espalhado por todo o mundo e o caos havia se instaurado na humanidade. A arma biológica havia saído do controle e o fim da humanidade estava mais perto do que nunca."
]

const bg_color = "#D9D9D9"

const Home = (props) => {
    return(
        <section className="main_section">
            
            <Content_title bg_color={bg_color}>
                <h2>ambientação</h2>
            </Content_title>
                
            <Content_container bg_color={bg_color}>
                <div className="content_photo">
                    <img 
                        src={Fundo}
                        alt="imagem" 
                    />
                </div>
                <div className="content_info">
                    <Paragraph text={textos[0]} />
                    <Paragraph text={textos[1]} />
                    <Paragraph text={textos[2]} />
                    <Paragraph text={textos[3]} />
                    <Paragraph text={textos[4]} />
                    <Paragraph text={textos[5]} />
                </div>

            </Content_container>
        
        </section>
            
    )
}

export default Home