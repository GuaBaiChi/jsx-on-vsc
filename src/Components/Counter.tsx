// https://www.youtube.com/watch?v=gnkrDse9QKc

import React, { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h1>This is a counter</h1>
      <p>{counter}</p>
      <button
        onClick={() =>
          setCounter(counter + 1)}
      >
        Increase Counter
      </button>
    </div>
  )
}