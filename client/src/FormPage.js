import './FormPages.css';
import { useState, useEffect } from 'react';
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
      fetch("http://localhost:8080/create", {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: user,
     }).then(data => {
      navigate("/congratsPage");
      console.log(data)
    })
    .catch(error => {
    navigate("/congratsPage");
     console.log(error)
    });
    }

    if(firstName && lastName && modifiedSnap && phone && email){
      navigate("/congratsPage");
      onFilled();
    }
  },[firstName, lastName, snap, phone, email, navigate]);

  return (
    <>
      {!firstName && !lastName && !modifiedSnap && !phone && !email &&
      <FormComponent property={"first name:"} setProperty={setFirstName}/>
       }

    {firstName && !lastName && !modifiedSnap && !phone && !email &&
       <FormComponent property={"last name:"} setProperty={setLastName}/>
    }

    {firstName && lastName && !modifiedSnap && !phone && !email &&
       <BooleanFormComponent property={"do you qualify for SNAP or EBT?"} setProperty={setSnap} setModifiedProperty={setModifiedSnap}/>
    }

    {firstName && lastName && modifiedSnap && !phone && !email &&
       <FormComponent property={"phone number:"} setProperty={setPhone}/>
    }

  {firstName && lastName && modifiedSnap && phone && !email &&
       <FormComponent property={"email:"} setProperty={setEmail}/>
    }
    </>
  );
}