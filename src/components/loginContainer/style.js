import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
    height: 80vh;   
    background-color: white;

    border-radius: 0 20px 20px 0;

    >div{
        margin-top: 40px;
    }

    >h2{
        margin: 30px;
        color: #13A380;
        font-size: 2.5rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 800;
    }
    >button{
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
    }

    >span{
        color: grey;
        font-family: 'Poppins', sans-serif;
    }
`
