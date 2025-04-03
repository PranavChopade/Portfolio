import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Check = () => {

  const [jokes, setJokes] = useState([])
  useEffect(() => {

    async function fetchApi() {
      try {
        const res = await axios.get("/api/v1/jokes")
        setJokes(res.data)
      } catch (error) {
        console.log("error", error)
      }
    }

    fetchApi()

  }, [])


  return (

    <div>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <p>{joke.joke}</p>
        </div>
      ))}
    </div>
  )
}

export default Check
