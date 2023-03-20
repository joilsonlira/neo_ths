import React from "react"

export const Ability_box= (props)=>{
    let lista = props.lista
    return(
        <div className="ability_box">
            <header>
                <img key={props.icon} src={props.icon} alt="icom" />
                <h2 key={props.title}>{props.title}</h2>
            </header>
            <div className="ability_description">
                {
                    lista.map((item)=>(
                        <>
                            <div className="exemplo"  key={item.ID}>
                                <small>Exemplo :</small>
                                <p  key={item.ID}>
                                <span  key={item.ID}>{item.exemplo_1.nome}:</span> * {item.exemplo_1.texto} *
                                {
                                    item.exemplo_1.modificador && (
                                        item.exemplo_1.modificador.isPlus ? 
                                        (
                                            <strong  key={item.ID}>
                                                + {item.exemplo_1.modificador[0].atributo}
                                            </strong>
                                        ):
                                        (
                                            <strong  key={item.ID}>
                                                - {item.exemplo_1.modificador[0].atributo}
                                            </strong>
                                        )
                                    )
                                }
                                </p>
                                <p  key={item.ID}>
                                <span  key={item.ID}>{item.exemplo_2.nome}:</span> * {item.exemplo_2.texto} *
                                {
                                    item.exemplo_2.modificador && (
                                        item.exemplo_2.modificador.isPlus ? 
                                        (
                                            <strong  key={item.ID}>
                                                + {item.exemplo_1.modificador[0].atributo}
                                            </strong>
                                        ):
                                        (
                                            <strong  key={item.ID}>
                                                - {item.exemplo_1.modificador[0].atributo}
                                            </strong>
                                        )
                                    )
                                }
                                </p>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}
// export default Ability_box