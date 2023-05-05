import { useState } from "react";
import Icons from "../icons";
import RegisterInputs from "../registerInputs";
import { Container, Button } from "./style";
import api from '../../apiRoutes'
import { useNavigate } from "react-router-dom";

function RegisterContainer() {
  const [data, setData] = useState({})

  const navigate = useNavigate();
  
  async function handleRegister(data) {
    try {
      const response = await api.Register(data);
      localStorage.setItem("token", response.data.message);
      setData({})
      navigate("/home")
    } catch (error) {
      console.log(error);
    }
  }

    return (
        <Container>
        <h2>
          Create Account
        </h2>
        <Icons/>
        <span>or use your documents for registration</span>
        <RegisterInputs data={data} setData={setData} />
        
        <Button onClick={()=>handleRegister(data)}>Sign Up</Button>
      </Container>
    )
  }
  
export default RegisterContainer;
  