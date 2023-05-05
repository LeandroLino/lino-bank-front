import 'boxicons';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;

`

Container.SpanToBorder = styled.div`
    cursor: pointer;

    margin: 10px;

    border: 1px solid #ccc;
    border-radius: 100%;

    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    :hover{
        background-color: #ccc;
    }
    transition: background-color 0.5s;
`

function Icons() {
    return (
        <Container>
            <Container.SpanToBorder>
                <box-icon type='logo' name='facebook'></box-icon>
            </Container.SpanToBorder>
            <Container.SpanToBorder>
                <box-icon name='google-plus' type='logo' ></box-icon>
            </Container.SpanToBorder>
            <Container.SpanToBorder>
                <box-icon name='linkedin' type='logo' ></box-icon>
            </Container.SpanToBorder>
        </Container>
    );
  }
  
export default Icons;
  