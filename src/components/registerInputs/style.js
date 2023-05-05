import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    > input{
        width: 50%;
        height: 35px;
        margin: 10px;

        border: 0;

        background-color: #F4FBF9;
        ::placeholder { 
            color: grey;
            opacity: 1; 
            padding-left: 15px;
        }
    }

`
