
import Paragraph from "./Paragraph";
import Fundo from "../assets/img/teste_fundo_2.png"

const textos = [
    "Etiam a dui sed purus placerat efficitur nec vel purus. Quisque interdum tellus non urna tempus aliquam. Praesent ac nisl scelerisque, fringilla risus quis, faucibus lacus. Duis feugiat scelerisque dui, sed congue justo sodales finibus. Fusce eu purus et est laoreet iaculis ac a justo. Nullam molestie tortor dolor, vel euismod nisl fringilla sit amet. Morbi luctus sapien nisi, eu tempor ligula molestie ac. Cras fermentum felis ut libero accumsan, eget auctor arcu venenatis. Donec efficitur tincidunt metus ut cursus. Phasellus a tortor finibus risus gravida feugiat scelerisque eu sapien. Aliquam condimentum lorem in lacus varius, a blandit ligula sodales. Sed libero lectus, suscipit ut eros sit amet, venenatis blandit dui."
]


export default function Content(props){
    return(
        <>
            <div className="content_title">
                <h2>{props.title}</h2>
            </div>
            <div className="content_1">
                <div className="content_photo">
                    <img 
                        src={Fundo}
                        alt="imagem" 
                    />
                </div>
                <div className="content_info">
                    <Paragraph text={textos[0]} />
                    <Paragraph text={textos[1]} />
                </div>
            </div>
        </>
    )
}