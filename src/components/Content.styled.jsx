import styled from "styled-components";

export const Content_title = styled.div`
    width: 167px;
    height: 32px;
    padding-left: 15px;
    padding-top: 4px;
    font-size: 12px;
    font-weight: 600;
    background: ${(prop)=>prop.bg_color};
    border-radius: 4px 32px 0px 0px;
`

export const Content_container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background: radial-gradient(68.79% 68.79% at 50% 50%, rgba(0, 0, 0, 0) 0.96%, rgba(0, 0, 0, 0.2) 66.46%), url(../assets/img/Dirt-Soil-PNG-Image.png), ${(prop)=>prop.bg_color};
    background-position: center center;
    background-size: cover;
    background-position-y: 0px;
    background-repeat: no-repeat;
    column-gap: 15px;
    padding: 15px 4px 15px 15px;
    max-height: 519px;
    border-radius: 0 4px 4px 4px;
`