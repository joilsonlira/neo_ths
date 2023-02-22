import styled from "styled-components"

export const Box_infectado = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    width: 92px;
    height: 92px;
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
    }
`
export const Infectado_info = styled.div`
    width: 50%;
    height: 100%;
    background-color: white;
`