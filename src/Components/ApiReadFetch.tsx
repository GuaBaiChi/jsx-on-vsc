// https://www.youtube.com/watch?v=gnkrDse9QKc
// Question 4, Display the API data in UI components

import React from "react"
import axios, { AxiosResponse } from "axios"
// https://www.npmjs.com/package/axios
// npm install axios


// https://randomuser.me/api
const { useEffect, useState } = React

interface UserName {
  first: string
  last: string
  title: string
}

interface UserPicture {
  thumbnail: string
}

interface UserInfo {
  name: UserName
  picture: UserPicture
}

interface ApiResults {
  results: Array<UserInfo>
}

const getFullUserName = (userInfo: UserInfo) => {
  const { name: { first, last } } = userInfo
  return `${first} ${last}`
}

export default function ApiReadFetch() {
  const [userInfos, setUserInfos] = useState<Array<UserInfo>>([])
  const [randomUserDataJSON, setRandomUserDataJSON] = useState('')

  useEffect(() => {
    fetch('https://randomuser.me/api').then((result: Response) => {
      try {
        const contentType = result.headers.get("Content-Type");
        if (contentType?.includes("application/json")) {
          // The response is JSON!
          let responseData = result.json().then((data: ApiResults) => {
            // Do something with results...
            setUserInfos(data.results);
            setRandomUserDataJSON(JSON.stringify(data, null, 2));
          });
        } else {
          throw new Error(`Invalid response content type: ${contentType}`)
        }

      } catch (ex) {
        console.log(`Error: ${ex}`)
      }
    })
  }, [])

  return (
    <div>
      {
        userInfos.map((userInfo: UserInfo, idx: number) => (
          <div key={idx}>
            <p>{getFullUserName(userInfo)}</p>
            <img src={userInfo.picture.thumbnail} alt='portrait' />
          </div>
        ))
      }
      <pre>{randomUserDataJSON}</pre>
    </div>
  )
}