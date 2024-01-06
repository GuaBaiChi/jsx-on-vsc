import React, { useState, FormEvent } from 'react';

const Name3 = () => {
  const [firstName, setFirstName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setMessage(`Welcome, ${firstName}`)
  }

  return (
    <div>
      <h1>Enter your name</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
      <h2>{message}</h2>
    </div>
  )
}

export default Name3
