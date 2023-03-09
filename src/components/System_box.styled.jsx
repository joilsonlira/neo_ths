import styled from "styled-components";

export const Category_box = styled.article`
    width: 135px;
    height: 135px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${(prop)=>prop.bg_color_category};
    /* background: rgba(255, 255, 255, 0.3); */
    border: 1px solid #383838;
    border-radius: 4px;
    transition: all .3s linear;
    cursor: ${(prop)=>prop.cursor};
    
    &:hover{
        background: ${(prop)=>prop.bg_hover_color_category};
        border: 1px solid ${(prop)=>prop.border_color_category};
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