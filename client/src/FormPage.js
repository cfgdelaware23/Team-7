import './FormPages.css';
import { useState, useEffect } from 'react';
import { TextField, Box , Button, Typography} from "@mui/material";
import FormComponent from './components/FormComponent'
import BooleanFormComponent from './components/BooleanFormComponent'
import { useNavigate } from 'react-router-dom';

export default function FormPage() {
  const navigate = useNavigate();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [snap, setSnap] = useState(Boolean);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [modifiedSnap, setModifiedSnap] = useState(Boolean);


  useEffect(() => {
    console.log("yuh time to post to backend")
    async function onFilled() {
      const user = JSON.stringify({ firstName, lastName, snap, phone, email });
      let res = await fetch("http://localhost:8080/create", {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: user,
     });
    }
    if(firstName && lastName && snap && phone && email){
      onFilled();
    }
  },[firstName, lastName, snap, phone, email]);

  return (
    <>
      {!firstName && !lastName && !modifiedSnap && !phone && !email &&
      <FormComponent property={"First Name:"} setProperty={setFirstName}/>
       }

    {firstName && !lastName && !modifiedSnap && !phone && !email &&
       <FormComponent property={"Last Name:"} setProperty={setLastName}/>
    }

    {firstName && lastName && !modifiedSnap && !phone && !email &&
       <BooleanFormComponent property={"Do you qualify for SNAP or EBT?"} setProperty={setSnap} setModifiedProperty={setModifiedSnap}/>
    }

    {firstName && lastName && modifiedSnap && !phone && !email &&
       <FormComponent property={"Phone #:"} setProperty={setPhone}/>
    }

  {firstName && lastName && modifiedSnap && phone && !email &&
       <FormComponent property={"Email:"} setProperty={setEmail}/>
    }
    </>
  );
}