import React, { useEffect, useState } from 'react';

import { QuoteBox } from './Components/QuoteBox';
import "./index.css"

let data: any;

function App() {

  const [ quote, setQuote ] = useState(["Loading...", ""]);
  const [ color, setColor ] = useState("Math.floor(Math.random()*16777215).toString(16)");

  useEffect(() => {
    getData();
  }, []);
  
  const handleClick = () => {
    const index = Math.floor(Math.random()*data.length);
    let newQuote = data[index];

    if(newQuote.author === null)
      newQuote.author = "Unknown";
    
    let finalQuote = [newQuote.text, newQuote.author];

    setQuote(finalQuote);

    setColor(Math.floor(Math.random()*16777215).toString(16));
  }

  const getData = async () => {
    await fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(newData => {
        data = newData;
        handleClick();
      })
  }

  return (
    <>
      <div id="background" style={{backgroundColor: `#${color}`}}></div>
      <div id="app">
        
        <QuoteBox text={quote[0]} author={quote[1]} color={color} handleClick={handleClick}/>
        <p id="signature">by Mateus</p>
      </div>
    </>
  );
}

export default App;