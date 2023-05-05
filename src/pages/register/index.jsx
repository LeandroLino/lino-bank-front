import RegisterContainer from '../../components/registerContainer';
import CallLogin from '../../components/callLogin';
import Container from './style';

function Register() {
  return (
    <Container>
      <span></span>
      <Container.SubContainer>
          <CallLogin/>
          <RegisterContainer/>
      </Container.SubContainer>
      <span></span>
    </Container>
  );
}

export default Register;
