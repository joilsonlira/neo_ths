import styled from "styled-components";

export const Btn_back = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    padding: .5rem;
    cursor: pointer;
    border-radius: 100%;
    background: rgba(198, 183, 49, 0.5);
    border: 1px solid #E3D01E;
    
    &:hover{
        transform: scale(1.1);
    }

    & strong{
        text-transform: uppercase;
    }
`