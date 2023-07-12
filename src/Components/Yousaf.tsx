// https://www.youtube.com/watch?v=CrtmSbz6k5E

// https://jsonplaceholder.typicode.com/users

import React, { useEffect, useState } from 'react'

function Yousaf() {
  const [records, setRecords] = useState<any[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <ul>{records.map((list, index) => (
        <li key={index}> {list.id} | {list.name} {list.username}</li>
      ))}
      </ul>
    </div>
  )
}

export default Yousaf

// useEffect(() => {

// }, [])