import './FormPages.css';
import { useState, useEffect } from 'react';
import { TextField, Box , Button, Typography} from "@mui/material";
import FormComponent from './components/FormComponent'

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
      <FormComponent property={firstName} setproperty={setFirstName}/>
       }

    {firstName && !lastName && !snap && !phone && !email &&
       <FormComponent property={lastName} setproperty={setLastName}/>
    }

    {firstName && lastName && !snap && !phone && !email &&
       <FormComponent property={snap} setproperty={setSnap}/>
    }

    {firstName && lastName && snap && !phone && !email &&
       <FormComponent property={phone} setproperty={setPhone}/>
    }

  {firstName && lastName && snap && phone && !email &&
       <FormComponent property={email} setproperty={setEmail}/>
    }
    </>
  );
}