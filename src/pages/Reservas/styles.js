import styled from "styled-components";

export const Titulo = styled.h1`
    color: #fff;
`;
export const Reserva = styled.div`
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        height: 100px;
    }
    button{
        border: 0;
        background-color: #fff;
    }
`;
export const Solicitar = styled.button`
    border: 0;
    display: flex;
    padding: 10px;
    text-transform: 10px;
    border-radius: 4px;
    margin-top: 10px;
    font-weight: bold;
`