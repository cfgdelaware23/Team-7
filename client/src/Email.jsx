import React, { useState } from 'react';

export default function EmailInputPage() {
  // State to store the email input value
  const [email, setEmail] = useState('');

  // Function to handle changes in the email input
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any further processing with the email here
    console.log('Email submitted:', email);
  };

  return (
    <div>
      <h1>Email Input Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
