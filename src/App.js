import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [emojisData, setEmojisData] = useState([])
  
  useEffect(() => {
    async function fetchEmojis() {
      const res = await axios.get('https://run.mocky.io/v3/5a982f64-218d-45d7-a380-ebe924d55631')
      console.table(res)
    }
    fetchEmojis()
  }, [])
  
  
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
