import LoginContainer from '../../components/loginContainer';
import Container from './style';
import CallRegister from '../../components/callRegister';

function Login() {
  return (
    <Container>
      <span></span>
      <Container.SubContainer>
          <CallRegister/>
          <LoginContainer/>
      </Container.SubContainer>
      <span></span>
    </Container>
  );
}

export default Login;
