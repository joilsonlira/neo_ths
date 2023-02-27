import styled from "styled-components"

export const Box_infectado = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    width: 92px;
    height: 92px;
    border-radius: 2px;
    background: rgba(227, 208, 30, 0.31);
    box-shadow: inset 0px 4px 0px 94px rgba(0, 0, 0, 0.5);
    overflow: hidden;

    & img{
        width: auto;
        height: 300%;
    }
    &:hover{
        cursor: pointer;
        background: rgba(227, 208, 30, 0.31);
        mix-blend-mode: screen;
        border: 1px solid red;
    }
`
export const Infectado_info = styled.div`
    width: 50%;
    height: 491px;
    border-radius: 4px;
    padding: 32px;
    margin-right: 15px;
    background-color: #B1B1B1;
    background-image: url(${(prop)=> prop.fundo_info});
    background-position: center center;
    background-size: cover;
    background-position-y: 0px;
    background-repeat: no-repeat;
    border: 1px solid #B1B1B1;
    filter: drop-shadow(-1px 0px 1px rgba(0, 0, 0, 0.5)) 
    drop-shadow(-28px 0px 17px rgba(0, 0, 0, 0.12)) 
    drop-shadow(-12px 0px 9px rgba(0, 0, 0, 0.25));
    & h2{
        font-family: 'typewriter';
        font-size: 24px;
        text-transform: capitalize;
    }
    & p{
        color: black;
        line-height: 21px;
        font-size: 18px;
        padding-left: 8px;
        font-family: 'typewriter';
        margin-top: 23px;
    }
`