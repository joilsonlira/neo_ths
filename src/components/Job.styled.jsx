import styled from "styled-components";

export const Job = styled.div`
    width: 100%;
    height: auto;
    /* padding: 8px; */
    border-radius: 4px;
    &:hover{
        background-color: rgba(255, 255, 255, 0.1);
    }
    & header{
        display: flex;
        height: auto;
        justify-content: flex-start;
        padding: 8px;
        border-radius: 4px;
        background: rgba(217, 217, 217,.5);
    }
    & p{
        padding: 0 8px;
        font-weight: lighter;
        line-height: 20px;
    }
    & img{
        display: none;
    }
`