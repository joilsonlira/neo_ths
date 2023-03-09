import styled from "styled-components";

export const Sub_category = styled.div`
    display: flex;
    align-items: center;
    /* column-gap: 8px; */
    width: 135px;
    height: auto;
    padding: .5rem;
    border: 1px solid black;
    border-radius: 4px;
    background: rgba(217, 217, 217, .5);
    cursor: pointer;
    transition: .2s all linear;

    &:hover{
        background: white;
        border: 1px solid #5c5c5c;
        transform: scale(1.1);
        box-shadow: 0 4px 5px rgb(0, 0, 0, .5);
    }

    & img{
        display: none;
        width: 30px;
        height: auto;
    }

    & p{
        text-transform: uppercase;
        font-size: 10px;
        font-weight: bolder;
        text-align: left;
    }
`