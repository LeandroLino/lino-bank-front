import styled from 'styled-components'

const Container = styled.div`
    background-color: #E1E1E1;
    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;

    position: absolute;
    z-index: -2;

    >span{
        position: absolute;
        border-radius: 50%;

        z-index: -1;
    }
    >span:first-child{
        width: 200px;
        height: 200px; 

        top: 80%;
        left: -3%;
        background-color: #FCD449;

        position: absolute;
    }
    >span:last-child{
        width: 200px;
        height: 200px; 

        right: -5%;

        background-color: #E55F6B;

        position: absolute;
    }
`

Container.SubContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 30px;

    width: 90%;
`

export default Container;
