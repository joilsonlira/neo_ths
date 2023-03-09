import React from "react";
import { Content_container, Content_title } from "../components/Content.styled";
import jobs_icon from "../assets/img/jobs.png"
import { Category_box } from '../components/System_box.styled'
import { Job } from "../components/Job.styled";
import com_habilidade from "../assets/img/com_habilidade.png"
import sem_habilidade from "../assets/img/sem_habilidade.png"


const bg_color = "#D9D9D9"

const Jobs = (props) => {

    let jobs_prestigio_info = [
        {
            title:"Médicos",
            description:"Profissionais da saúde, atualmente, atuam como médicos em centros de triagem a feridos e tratamento de enfermidades que o ser humano já aprendeu a controlar. Suspeitas de infecção pelo Cordyceps são analisadas por esses indivíduos e, caso a suspeita se confirme, o caso é passado para a força militar. O ganho de fichas é fixo, salvo as contabilizações realizadas acerca dos medicamentos que são racionados. Ou seja, caso haja contrabando de remédios e seja perceptível, o profissional perde fichas e corre o risco de ter que abandonar o cargo.",
            img: com_habilidade
        },
        {
            title:"Mecânicos",
            description:"Continuam a atuar no reparo de veículos e de peças automotivas, além de serem responsáveis pela busca desses materiais mundo afora. O ganho de fichas, geralmente, é controlado pelos próprios mecânicos. A depender do veículo modificado, peças necessárias, entre outros aspectos, o profissional monta a sua taxa de serviço.",
            img: com_habilidade
        },
        {
            title:"Engenheiros",
            description:" Perderam suas patentes mas ainda são responsáveis por manter a segurança dentro e fora dos muros. Alcançam hordas e as destroem, protegem os muros e fazem rondas para impedir a saída de sobreviventes. Geralmente, controlam o uso das fichas e não costumam necessitar delas para obter recursos.",
            img: com_habilidade
        },
        {
            title:"Militares",
            description:"Continuam a atuar no reparo de veículos e de peças automotivas, além de serem responsáveis pela busca desses materiais mundo afora. O ganho de fichas, geralmente, é controlado pelos próprios mecânicos. A depender do veículo modificado, peças necessárias, entre outros aspectos, o profissional monta a sua taxa de serviço.",
            img: com_habilidade
        },
        {
            title:"Juízes",
            description:" É formado por três indivíduos que discutem entre si a permanência ou expulsão de traidores. Além disso, pode aprovar a pena de morte para condenados em casos de traição, roubo ou até mesmo psicopatia. Estão aliados aos militares e, por isso, não precisam de fichas para conseguir suprimentos.",
            img: com_habilidade
        }
    ]
    let jobs_sem_prestigio_info = [
        {
            title:"Agricultores",
            description:"Essa classe é responsável pelo cultivo de hortaliças e plantas frutíferas para proporcionar alimentos ao campo de quarentena. Trabalhar com a terra depende das atuações da natureza (estações, chuvas, secas, vento, etc). Por isso, o ganho de fichas desta categoria está associado a quantidade de itens cultivados em certo período, considerando as perdas durante o processo de cultivo.",
            img: com_habilidade
        },
        {
            title:"Limpadores",
            description:" Limpadores costumam ganhar bem a depender do tipo de serviço que deva realizar. Limpezas de ruas, esgotos e estabelecimentos são realizados por esta classe. O trabalho bruto é compensado a depender do local onde foi executado o trabalho. Além disso, a qualidade da execução também é avaliada.",
            img: com_habilidade
        },
        {
            title:"Exterminadores",
            description:"São responsáveis pelas rondas diurnas nos prédios ao redor do campo. Geralmente, realizam rondas acompanhados de militares para garantir que os trabalhadores não fujam. São treinados para atirar em infectados e sabem os locais do corpo onde os tiros são mais efetivos. Ganham uma boa quantia de fichas pelo trabalho pesado. Apesar disso, é raro encontrar a necessidade de exterminadores quando há ronda militar constantemente.",
            img: com_habilidade
        },
        {
            title:"Pesquisadores",
            description:"Os pesquisadores são grupos de cientistas que trabalhavam antes da pandemia. Eles são responsáveis por promover projetos de mudanças nos sistemas de saúde, saneamento e segurança. São inteligentes e têm facilidade em utilizar de veículos tecnológicos como televisores e rádios. Essa classe já ganhou bem no passado. Atualmente, as mudanças nas redes descritas são quase nulas e, por isso, os pesquisadores estão quase extintos, a não ser por aqueles que procuram uma cura para o fungo a um bom tempo.",
            img: com_habilidade
        },
        {
            title:"Incineradores",
            description:"Essa classe é responsável pela queima dos corpos de indivíduos que não resistem dentro da quarentena. Infectados mortos nos arredores do campo, pessoas doentes que não sobreviveram ou ladrões, assassinos, psicopatas e traidores são jogados em meio ao fogo para a eliminação de cadáveres. Apesar de um trabalho árduo e pesado, essa classe recebe poucas fichas a cada execução. É o trabalho mais disponível entre todos e o mais certo de haver vagas.",
            img: com_habilidade
        },
        {
            title:"Distribuidores",
            description:"São pessoas selecionadas para racionar os recursos entre os sobreviventes da zona de quarentena. Para atuar nessa classe, o indivíduo deve ser escolhido pelos militares para realizar o trabalho durante uma semana. Após esse período, há uma rotação de cargos afim de impedir o contrabando de suprimentos. É um trabalho difícil pois os mantimentos são escassos e cabe ao profissional determinar quem passará fome, frio e sede e quem conseguirá os recursos. Essa classe não recebe fichas para operar.",
            img: com_habilidade
        },
        {
            title:"Extrativistas",
            description:"Profissionais encarregados de extrair da natureza os recursos para sobrevivência do grupo. Esses empregados são responsáveis pela conquista e o tratamento da água, aquisição de alimentos enlatados, extração de madeira, entre outros recursos. A depender do material extraído, ganham uma boa quantia de fichas.",
            img: com_habilidade
        },
        {
            title:"Criminosos",
            description:"Essa classe são dos indivíduos que desejam conquistar algo a mais do que a zona de quarentena pode oferecer. Caso alguma fuga, roubo ou contrabando seja descoberto, a pessoa que cometeu um dos atos será marcada como criminosa. Nesse caso, se a pessoa for pega, ela sofrerá o julgamento por parte dos juízes, que pode variar entre prisão, expulsão e morte. De outro modo, caso o criminoso consiga fugir, ele se torna inimigo público da zona de quarentena e não poderá voltar aos aposentos.",
            img: com_habilidade
        }
    ]
    


    return(
        <section className="main_section">

        <Content_title bg_color={bg_color}>
            <h2>Profissões</h2>
        </Content_title>
            
        <Content_container bg_color={bg_color} direction={'row'}>
            <Category_box cursor={"default"} bg_color_category="white" bg_hover_color_category="white" border_color_category="#696969">
                <img src={jobs_icon} alt="system icon" />
                <h3>Profissões</h3>
            </Category_box>

            <div className="ability_box remendo">
                <header>
                    <img src={com_habilidade} alt="icom" />
                    <h2>Profissões de prestígio</h2>
                </header>
                <p>Estas profissões são referentes a empregos que mantiveram sua função após o surto. Só são conquistadas através de formulário.</p>
                <Job>
                    <header>
                        <img src={jobs_prestigio_info[0].img} alt="icom" />
                        <h3> {jobs_prestigio_info[0].title}</h3>
                    </header>
                    <p>{jobs_prestigio_info[0].description}</p>
                
                </Job>
                <Job>
                    <header>
                        <img src={jobs_prestigio_info[0].img} alt="icom" />
                        <h3> {jobs_prestigio_info[1].title}</h3>
                    </header>
                    <p>{jobs_prestigio_info[1].description}</p>
                </Job>
                <Job>
                    <header>
                        <img src={jobs_prestigio_info[0].img} alt="icom" />
                        <h3> {jobs_prestigio_info[2].title}</h3>
                    </header>
                    <p>{jobs_prestigio_info[2].description}</p>
                </Job>
                <Job>
                    <header>
                        <img src={jobs_prestigio_info[0].img} alt="icom" />
                        <h3> {jobs_prestigio_info[3].title}</h3>
                    </header>
                    <p>{jobs_prestigio_info[3].description}</p>
                </Job>
                <Job>
                    <header>
                        <img src={jobs_prestigio_info[0].img} alt="icom" />
                        <h3> {jobs_prestigio_info[4].title}</h3>
                    </header>
                    <p>{jobs_prestigio_info[4].description}</p>
                </Job>
            </div>
            <div className="ability_box remendo">
                <header>
                    <img src={sem_habilidade} alt="icom" />
                    <h2>Profissões sem prestígio</h2>
                </header>
                <p>Estas profissões são referentes a empregos que mantiveram sua função após o surto. Só são conquistadas através de formulário.</p>
                <Job>
                    <header>
                        <img src={jobs_sem_prestigio_info[0].img} alt="icom" />
                        <h3> {jobs_sem_prestigio_info[0].title}</h3>
                    </header>
                    <p>{jobs_sem_prestigio_info[0].description}</p>
                </Job>
                <Job>
                    <header>
                        <img src={jobs_sem_prestigio_info[0].img} alt="icom" />
                        <h3> {jobs_sem_prestigio_info[1].title}</h3>
                    </header>
                    <p>{jobs_sem_prestigio_info[1].description}</p>
                </Job>
                <Job>
                    <header>
                        <img src={jobs_sem_prestigio_info[0].img} alt="icom" />
                        <h3> {jobs_sem_prestigio_info[2].title}</h3>
                    </header>
                    <p>{jobs_sem_prestigio_info[2].description}</p>
                </Job>
                <Job>
                    <header>
                        <img src={jobs_sem_prestigio_info[0].img} alt="icom" />
                        <h3> {jobs_sem_prestigio_info[3].title}</h3>
                    </header>
                    <p>{jobs_sem_prestigio_info[3].description}</p>
                </Job>
                <Job>
                    <header>
                        <img src={jobs_sem_prestigio_info[0].img} alt="icom" />
                        <h3> {jobs_sem_prestigio_info[4].title}</h3>
                    </header>
                    <p>{jobs_sem_prestigio_info[4].description}</p>
                </Job>
                <Job>
                    <header>
                        <img src={jobs_sem_prestigio_info[0].img} alt="icom" />
                        <h3> {jobs_sem_prestigio_info[5].title}</h3>
                    </header>
                    <p>{jobs_sem_prestigio_info[5].description}</p>
                </Job>
                <Job>
                    <header>
                        <img src={jobs_sem_prestigio_info[0].img} alt="icom" />
                        <h3> {jobs_sem_prestigio_info[6].title}</h3>
                    </header>
                    <p>{jobs_sem_prestigio_info[6].description}</p>
                </Job>
                <Job>
                    <header>
                        <img src={jobs_sem_prestigio_info[0].img} alt="icom" />
                        <h3> {jobs_sem_prestigio_info[7].title}</h3>
                    </header>
                    <p>{jobs_sem_prestigio_info[7].description}</p>
                </Job>
            </div>
            
        </Content_container>

        </section>
    )
}
export default Jobs