import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
    height: 80vh;   
    background-color: white;

    border-radius: 0 20px 20px 0;

    font-family: 'Poppins', sans-serif;

    >h2{
        margin: 30px;
        color: #13A380;
        font-size: 2.5rem;
        font-weight: 800;
    }
 

    >span{
        color: grey;
    }
`
export const Button = styled.div`
        cursor: pointer;

        background-color: #13A380;
        border: 0;
        border-radius: 25px;

        color: whitesmoke;
        width: 200px;
        height: 50px;

        margin-top: 40px;

        font-size: 1rem;

        :hover{
            background-color: #40BB9D;
        }
        transition: background-color 0.3s;

        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
`
