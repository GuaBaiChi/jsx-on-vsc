import React, { useState, FormEvent } from 'react';

const Name3 = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  function submitHandler(submitEvent: FormEvent) {
    submitEvent.preventDefault()
    setMessage(`Welcome, ${name}`)
  }

  return (
    <div>
      <h1>Enter your name</h1>
      <form onSubmit={submitHandler}>
        <input type="text"
          value={name}
          onChange={(submitEvent) => setName(submitEvent.target.value)}
        />
        <button>Enter</button>
      </form>
      <h2>{message}</h2>
    </div>
  )
}

export default Name3
