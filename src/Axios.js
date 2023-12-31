import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios.jsx'

const App = () => {
  const [myData, setMyData] = useState([])
  const [isError, setIsError] = useState('')

  // using Promises
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message))
  }, [])

  return (
    <>
      {isError !== '' && <h2>{isError}</h2>}

      {myData.map((post) => {
        const { id, title, body } = post
        return (
          <div className='card' key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        )
      })}
    </>
  )
}

export default App
