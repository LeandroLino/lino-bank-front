import Icons from "../icons";
import LoginInputs from "../loginInputs";
import { Container } from "./style";
import { useState } from 'react';
import api from '../../apiRoutes'
import { useNavigate } from "react-router-dom";

function LoginContainer() {
  const [data, setData] = useState({})

  const navigate = useNavigate();

  async function handleLogin(data) {
    try {
      const response = await api.Login(data);
      console.log(response)
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
          Welcome Back!
        </h2>
        <Icons/>
        <span>Use your persoal informations to login</span>
        <LoginInputs data={data} setData={setData}  />
        <button onClick={()=>handleLogin(data)}>Sign In</button>
      </Container>
    );
  }
  
export default LoginContainer;
  