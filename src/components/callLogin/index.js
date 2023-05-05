import {Container, Button} from "./style";
import { useNavigate } from "react-router-dom";

function CallLogin() {
  const navigate = useNavigate();

  return (
      <Container>
        <h2>
          Welcome Back!
        </h2>
        <span>To keep connectd with us please login with your persoal info</span>
        <Button onClick={() => navigate("/login")}>Sign in</Button>
      </Container>
    );
  }
  
export default CallLogin;
  