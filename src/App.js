import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [emojisData, setEmojisData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  
  useEffect(() => {
    async function fetchEmojis() {
      setLoading(true)
      try {
        const res = await axios.get('https://run.mocky.io/v3/5a982f64-218d-45d7-a380-ebe924d55631')
        setEmojisData(res.data)
        
        setLoading(false)
        
      } catch (error) {
        console.error(error)
        
        setError(true)
        setLoading(false)
      }
    }
    fetchEmojis()
  }, [])
  
  console.log('loading ? ',loading)
  console.log('error ? ',error)
  console.log('emojiData ? ',emojisData)
  
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
