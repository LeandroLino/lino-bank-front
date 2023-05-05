import {Container, Button} from "./style";
import { useNavigate } from "react-router-dom";

function CallRegister() {
  const navigate = useNavigate();
  
  return (
      <Container>
        <h2>
          Welcome!
        </h2>
        <span>Try create a persoal account with we</span>
      <Button onClick={() => navigate("/")}>Sign Up</Button>
      </Container>
    );
  }
  
export default CallRegister;
  