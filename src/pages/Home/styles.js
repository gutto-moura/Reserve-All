import styled from "styled-components"

export const Box = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;  
`;
export const Lista = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
    padding: 13px;

        img{
            max-width: 280px;
            max-height: 220px;
            border-radius: 4px;
            align-items: center;
            
        }
        strong{
            font-size: 16px;
            line-height: 20px;
            color: #191919;
            margin-top: 19px;
        }
        span{
            margin-top: 5px;
        }
        button{
            margin-top: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            background-color: #191919;
            width: 280px;
            border-radius: 5px;
            padding: 10px;
            border: 0;
        }
`;