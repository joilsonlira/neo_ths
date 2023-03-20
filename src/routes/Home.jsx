import React from "react";
import Paragraph from "../components/Paragraph";
import Data from "../Info.json"
import { Content_container, Content_title } from "../components/Content.styled";

const Page = Data.pages.map((item)=>{
    return item
})

const texts = Page[0].content.text

const bg_color = "#D9D9D9"

const Home = (props) => {
    return(
        <section className="main_section">
            
            <Content_title bg_color={bg_color}>
                <h2>{Page[0].page}</h2>
            </Content_title>
                
            <Content_container bg_color={bg_color}>
                <div className="content_photo">
                    <img 
                        src={Page[0].content.img}
                        alt="imagem" 
                    />
                </div>
                <div className="content_info">
                    {   
                        texts.map((item)=>{
                            return <Paragraph key={item} text={item}/>
                        })
                    }
                </div>

            </Content_container>
        
        </section>
            
    )
}

export default Home