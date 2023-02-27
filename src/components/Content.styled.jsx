import styled from "styled-components";

export const Content_title = styled.div`
    width: 167px;
    height: 32px;
    padding-left: 15px;
    color: ${(prop)=>prop.txt_color};
    padding-top: 4px;
    text-transform: capitalize;
    font-size: 12px;
    font-weight: 600;
    font-family: 'Roboto Slab', serif;
    border-radius: 4px 32px 0px 0px;
    background: ${(prop)=>prop.bg_color};
    & h2{
        font-family: 'RobotoSlab';
    }
`

export const Content_container = styled.div`
    display: flex;
    flex-direction: ${(prop)=>prop.direction};
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background: radial-gradient(68.79% 68.79% at 50% 50%, 
        rgba(0, 0, 0, 0) 0.96%, 
        rgba(0, 0, 0, 0.2) 66.46%), 
        url(../assets/img/Dirt-Soil-PNG-Image.png), 
        ${(prop)=>prop.bg_color};
    background-position: center center;
    background-size: cover;
    background-position-y: 0px;
    background-repeat: no-repeat;
    column-gap: 15px;
    padding: 15px 0 15px 15px;
    max-height: 519px;
    border-radius: 0 4px 4px 4px;
    & .selo{
        position: absolute;
        bottom: 0;
        right: 0;
    }
    & p{
        font-family: 'RobotoSlab';
        text-align: justify;
        padding-right: 15px;
    }
`