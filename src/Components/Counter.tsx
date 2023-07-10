// https://www.youtube.com/watch?v=gnkrDse9QKc

import * as React from "react"
// import React from 'react';

const { useState } = React

export default function Counter() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h1>This is a counter</h1>
      <p>
        {counter}
      </p>
      <button
        onClick={() =>
          setCounter(counter + 1)
        }>Increase Counter
      </button>
      <button
        onClick={() =>
          setCounter(counter - 1)
        }>Decrease Counter
      </button>
    </div>
  )
}