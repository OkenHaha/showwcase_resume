import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const API_KEY = '0ace4b6e5466b6cfd5a0e089543a37f13d5e0ca5b4c6aa49e2';
  useEffect(() => {
    axios.get('https://cache.showwcase.com/user/tianrongliew', {
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.table(response.data);
      return response.data;
    })
    .then(data => setData(data))
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <h1>{data.displayName}</h1>
    </div>
  );
}

export default App;
