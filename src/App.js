import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar'
import Container from './components/Container';

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
  
  return (
    <>
      <Navbar />
      <Container>
        <h1>Hello, world!</h1>
        {loading && <p>Loading....</p>}
        {error && <p>Ooooppss....</p>}
        {emojisData.length > 0 && <p>Emojis data sukses!!!</p>}
      </Container>
    </>
  );
}

export default App;
