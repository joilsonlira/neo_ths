import styled from "styled-components";

export const Sub_category = styled.div`
    display: flex;
    align-items: center;
    column-gap: 8px;
    width: 135px;
    height: auto;
    padding: .5rem;
    border: 1px dashed black;
    background: rgba(217, 217, 217, .5);
    cursor: pointer;

    &:hover{
        background: #D9D9D9;
        border: 1px dashed #5c5c5c;
    }

    & img{
        width: 30px;
        height: auto;
    }

    & p{
        text-transform: uppercase;
        font-size: 7px;
        font-weight: bolder;
        text-align: left;
    }
`