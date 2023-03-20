import styled from "styled-components";

export const Category_box = styled.article`
    width: 135px;
    height: 135px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${(prop)=>prop.bg_color_category};
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
export const Side = styled.aside`
    display: flex;
    z-index: 1;
    align-items: center;
    justify-content: left;
    height: 32px;
    width: 100%;
    column-gap: 0px;

    & div{
        display: flex;
        width: 94%;
    }
    & strong{
        text-transform: uppercase;
    }
`

export const Category_btn = styled.button`
    display: flex;
    align-items: center;
    justify-content: left;
    width: auto;
    height: 32px;
    padding: 0 1rem;
    border: 1px solid transparent;
    background: rgba(200, 200, 200,1);
    font-size: .9em;
    color: black;
    border-top: 1px solid black;
    border-radius: 4px 32px 0 0 ;
    cursor: pointer;
    
    &:hover{
        background: rgba(200, 200, 200,1);
    }
    `

export const Content = styled.div`
    top: -1px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98.5%;
    height: 510px;
    padding: .5rem;
    border-radius: 0 4px 4px 4px;
    border: 1px solid black;
    background-color: ${(prop)=>prop.bg_color};
`