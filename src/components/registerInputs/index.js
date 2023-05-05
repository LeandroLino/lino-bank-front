import { Container } from "./style";
import {useState, useEffect} from 'react';

function RegisterInputs({data, setData}) {
  const [document, setDocument] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const currentData = { documentNumber: document, userName: name, birthDate: date, password: password }
    console.log(date)
    setData({...data, ...currentData})
    }, [document, name, date, password, confirmPassword])

    return (
      <Container>
        <input placeholder="Document" onChange={(e)=>{setDocument(e.target.value)}}></input>
        <input placeholder="Full Name" onChange={(e)=>{setName(e.target.value)}}></input>
        <input placeholder="DD/MM/YYYY" type="date" onChange={(e)=>{setDate(e.target.value)}}></input>
        <input placeholder="Password" type="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
        <input placeholder="Confirm Password" type="password" onChange={(e)=>{setConfirmPassword(e.target.value)}}></input>
      </Container>
    );
  }
  
export default RegisterInputs;
  