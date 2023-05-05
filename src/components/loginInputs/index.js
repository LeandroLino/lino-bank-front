import { Container } from "./style";
import {useState, useEffect} from 'react';

function LoginInputs({data, setData}) {
  const [document, setDocument] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const currentData = { documentNumber: document, password: password }
    setData({...data, ...currentData})
}, [document, password])

    return (
      <Container>
        <input placeholder="Document" onChange={(e)=> setDocument(e.target.value)}></input>
        <input placeholder="Password" type="password" onChange={(e)=> setPassword(e.target.value)}></input>
      </Container>
    );
  }
  
export default LoginInputs;
  