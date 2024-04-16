import './App.css';
import axios from 'axios';
import { useState } from "react";

function App() {

  const [serverResponse, setServerResponse] = useState('');

  const url = process.env.REACT_APP_SERVER_URL;//'https://hackathon00-api.onrender.com/';

  function callGet() {

    axios.get(url)

    .then((response) => {

      setServerResponse(response.data);

    })};

    function callPost() {
      
      let data = '?test=flamingo'

      axios.post(url + data)
  
      .then((response) => {
  
        setServerResponse(response.data);
  
      })};

      function callPut() {
      
        let data = "?test=WRFC&index=0"
  
        axios.put(url + data)
    
        .then((response) => {
    
          setServerResponse(response.data);
    
        })};

        // function callDelete() {
      
        //   let data = 'test3'
    
        //   axios.post(url + data)
      
        //   .then((response) => {
      
        //     setServerResponse(response.data);
      
        //   })};


  return (
    <div className="App">

      {serverResponse}

      <header className="App-header">

        <h1 className='App-title'>FlamingoFund$</h1>

        <button onClick={callGet}>GET</button>
        <button onClick={callPost}>POST</button>
        <button onClick={callPut}>PUT</button>

      </header>

      <main>

        <p></p>

      </main>

    </div>

  );

};

export default App;
