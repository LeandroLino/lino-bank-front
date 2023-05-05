import styled from 'styled-components'

export const Container = styled.div`
    background-color: #13A380;
    width: 35%;
    height: 80vh;

    border-radius: 20px 0 0 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: 'Poppins', sans-serif;

    >h2{
        margin: 30px;
        font-size: 2.5rem;
        font-weight: 800;
    }

    >span{
        display: flex;
        text-align: center;
        letter-spacing: 1px;
        font-weight: 200;
        line-height: 1.5em;
        width: 65%;
    }
`
export const Button = styled.button`
    background-color: #13A380;
    color: white;
    
    border: 1px solid white;
    border-radius: 25px;

    margin-top: 50px;

    font-size: 1rem;

    width: 200px;
    height: 50px;

    :hover{
            background-color: #40BB9D;
        }
    transition: background-color 0.3s;
    cursor: pointer;
`
