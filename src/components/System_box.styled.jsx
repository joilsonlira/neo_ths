import styled from "styled-components";

export const Category_box = styled.article`
    width: 135px;
    height: 135px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid #383838;
    border-radius: 4px;
    transition: all .3s linear;
    
    &:hover{
        cursor: ${(prop)=>prop.cursor};
        background: rgba(255, 255, 255, 1);
        border: 1px solid #696969;
    }

    & h3{
        text-transform: capitalize;
        text-align: center;
        font-weight: 600;
        font-size: 18px;
    }

    & .em_breve{
        width: 135px;
        height: auto;
        position: absolute;
    }
`