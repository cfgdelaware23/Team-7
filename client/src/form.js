// import React, { useState } from 'react';

// function CreateUserForm() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     address: ''
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     createUser(formData);
//   };

//   const createUser = (userData) => {
//     const user = {
//       name: userData.firstName,
//       lastName: userData.lastName,
//       address: userData.address
//     };
//     console.log("User created:", user);

//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         First Name:
//         <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
//       </label>
//       <br />
//       <label>
//         Last Name:
//         <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
//       </label>
//       <br />
//       <label>
//         Address:
//         <textarea name="address" value={formData.address} onChange={handleInputChange}></textarea>
//       </label>
//       <br />
//       <button type="submit">Create User</button>
//     </form>
//   );
// }

// export default CreateUserForm;
import React, { useState } from 'react';

function FormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.status === 200) {
      console.log('Data saved successfully');
    } else {
      console.log('Error saving data');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
