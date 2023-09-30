import './FormPages.css';
import { useState, useEffect } from 'react';
import { TextField, Box , Button, Typography} from "@mui/material";
import FormComponent from './components/FormComponent'
import BooleanFormComponent from './components/BooleanFormComponent'

export default function FormPage() {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [snap, setSnap] = useState(Boolean);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log("yuh time to post to backend")
    // if(firstName && lastName && snap && phone && email){
    //     let newUser = await fetch(
    //     'http://localhost:5000/register', {
    //         method: "post",
    //         body: JSON.stringify({ firstName, lastName, snap, phone, email }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     newUser = await newUser.json();
    //     console.warn(newUser);
    //     if (newUser) {
    //         alert("Data saved succesfully");
    //         setEmail("");
    //         setName("");
    //     }
  
    // }
  },[firstName, lastName, snap, phone, email]);

  return (
    <>
      {!firstName && !lastName && !snap && !phone && !email &&
      <FormComponent property={"First Name:"} setProperty={setFirstName}/>
       }

    {firstName && !lastName && !snap && !phone && !email &&
       <FormComponent property={"Last Name:"} setProperty={setLastName}/>
    }

    {firstName && lastName && !snap && !phone && !email &&
       <BooleanFormComponent property={"Do you qualify for SNAP or EBT?"} setProperty={setSnap}/>
    }

    {firstName && lastName && snap && !phone && !email &&
       <FormComponent property={"Phone #:"} setProperty={setPhone}/>
    }

  {firstName && lastName && snap && phone && !email &&
       <FormComponent property={"Email:"} setProperty={setEmail}/>
    }
    </>
  );
}