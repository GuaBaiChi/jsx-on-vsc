import { useState } from 'react';

const Name = () => {
  const [firstName, setFirstName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setMessage(`Welcome, ${firstName}`);
    setFirstName('');
  };

  return (
    <div>
      <h1>Enter your name</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={event =>
          setFirstName(event.target.value)}
          value={firstName}
        />
        <button type="submit">Enter</button>
        <h2>{message}</h2>
      </form>
    </div>
  );
};

export default Name;