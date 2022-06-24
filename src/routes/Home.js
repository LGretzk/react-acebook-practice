import React, { useState, useEffect } from 'react';

function Home() {
  const [state, setState] = useState(null);
  console.log('this is state' + state);

  useEffect(() => {
    fetch('http://localhost:3001/home')
      .then(response => {
        console.log('test');
        if(response.ok) {
          return response.json();
        }
        throw new Error('Request failed');
      }, networkError => {
        console.log(networkError.message);
      })
      .then(returnedData => {
        console.log(returnedData);
        setState(returnedData.body);
        return returnedData;
      });
  }, []);

  return (
    <div>
      <h1>Acebook Homepage</h1>
      <p>test</p>
      <p>{state}</p>
    </div>
  )
};

export default Home;