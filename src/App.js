import React, { useState } from "react";
import axios from 'axios'; 
import "./App.css"

function App() {

  let [joke , setJoke] = useState();
  let [showLoader , setShowLoader] = useState(false);

  let getJoke = () => {
    setShowLoader(true);
    setJoke();
    axios.get("https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general").then ( (res) => {
      console.log(res);
      setJoke(res.data[0]);
      setShowLoader(false);
    })
  }

  return <>
    
    <div  className="content">

    {
      showLoader &&
      <>
      <br />
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      </>
    }

    {
      joke &&
      <>
      <br />
      <div  className="joke-container">
        <h1 style={{fontFamily : "cambria"}}> {joke.setup} </h1>
        <h2> {joke.punchline} </h2>
      </div>
      </>
    }

    <div className="App">
      <br />
    <button className="btn btn-success" onClick={getJoke}> Get Another Joke </button>
  </div>

  </div>
    
  </>
}

export default App ;