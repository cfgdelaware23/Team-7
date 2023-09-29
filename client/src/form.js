import React, { useState } from 'react';

function CreateUserForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(formData);
  };

  const createUser = (userData) => {
    const user = {
      name: userData.firstName,
      lastName: userData.lastName,
      address: userData.address
    };
    console.log("User created:", user);

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Address:
        <textarea name="address" value={formData.address} onChange={handleInputChange}></textarea>
      </label>
      <br />
      <button type="submit">Create User</button>
    </form>
  );
}

export default CreateUserForm;
