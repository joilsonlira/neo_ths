import styled from "styled-components";

export const Btn_back = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 135px;
    height: auto;
    padding: 4px;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #E3D01E;
    transition: .1s transform linear;
    background: rgba(198, 183, 49, 0.5);
    
    &:hover{
        transform: scale(1.1);
    }

    & strong{
        text-transform: uppercase;
        color: white;
        font-weight: 500;
        letter-spacing: 5px;
    }
`