import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Content_container, Content_title } from "../components/Content.styled";
import { Category_box, Category_btn, Side, Content} from '../components/System_box.styled'
import Data from "../Info.json"


const bg_color = "#D9D9D9"

const combat_system = Data.pages[2].content[0].section.map((category)=>{
    return category
})


const Category_system = (props) => {

    let [infectado_info, set_info] = useState(1)

    return(
        <section className="main_section">
            <Content_title bg_color={bg_color}>
                    <h2>sistemas</h2>
            </Content_title>
                    
            <Content_container bg_color={bg_color} direction={'column'}>
                    <Side>
                        <div>
                        
                            {
                                combat_system.map((category)=>{
                                    return(
                                        <Category_btn onClick={()=>{
                                            set_info(infectado_info = category.id)
                                            console.log(category.id)
                                        }}
                                        key={category.type}>
                                            {category.type}
                                        </Category_btn>
                                    )
                                })
                            }
                        </div>
                        <Link to={"/sistemas"}>
                            <strong>back</strong>
                        </Link>
                        
                    </Side>
                    <Content bg_color={bg_color}>
                        {
                            combat_system[infectado_info].content.map((content)=>
                            {
                                return (
                                <div className="ability_box" key={content.Title}>
                                    <header>
                                        <h2>{content.header.Title}</h2>
                                    </header>
                                    {
                                        content.content.map((p)=>{
                                            return(

                                                (p.exemple != "") ? (
                                                    <>
                                                        <p>{p.intro}</p>
                                                        <div className="exemplo" key={p.intro}>
                                                            <small>Exemplo :</small>
                                                            {p.exemple.map((exemplo)=>{
                                                                return (
                                                                    <>
                                                                        <span key={exemplo.name}> {exemplo.name} </span>
                                                                        <p key={exemplo.text}>{exemplo.text}</p>
                                                                        {
                                                                            (exemplo.modifier != "")?(
                                                                                exemplo.modifier.map((modifier)=>{
                                                                                    return <small>{modifier}</small>
                                                                                })
                                                                            ):null
                                                                        }
                                                                    </>
                                                                )
                                                            })}
                                                        </div>
                                                    </>
                                                ):(<p>{p.intro}</p>)
                                            )
                                        })
                                    }
                                </div>
                                )
                            })
                        }
                    </Content>
            </Content_container>
        </section>
    )
}
export default Category_system
