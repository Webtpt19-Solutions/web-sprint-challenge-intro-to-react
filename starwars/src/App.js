import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

// Component Imports
import Characters from './components/Characters.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ charList, setCharList ] = useState(null)
  const [ nextList, setNextList ] = useState(null)
  const [ prevList, setPrevList ] = useState(null)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    Axios.get('https://swapi.dev/api/people/')
      .then(res => {
        console.log(res)
        setCharList(res.data.results)
        setNextList(res.data.next)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {charList ? <Characters charList={charList} /> : null}
    </div>
  );
}

export default App;
