import React, { useState } from 'react';

const Name2 = () => {
  const [firstName, setFirstName] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setWelcomeMessage(`Welcome, ${firstName}`);
    setFirstName('');
  };

  return (
    <div>
      <h1>Enter your name</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your first name:
          <input onChange={(event) =>
            setFirstName(event.target.value)}
            value={firstName}
            placeholder="John"
          />
        </label>
        <button type="submit">Enter</button>
        <h2>{welcomeMessage}</h2>
      </form>
    </div>
  );
};

export default Name2;