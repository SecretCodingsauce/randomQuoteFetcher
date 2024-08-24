
import { useEffect, useRef, useState } from 'react';
import './App.css';

import axios from 'axios';



function App() {
const url="https://dummyjson.com/quotes/random"

const bodyStyle = {
  fontFamily: "Arial, sans-serif",
  backgroundColor: '#f0f0f0',
  margin: 0,
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
}



const [quote,setQuote]=useState("")
const [err,setErr]=useState(null)
const [author,setAuthor]=useState("")
const [run,setRun]=useState(false)

const hasEffectRun=useRef(false)


let tweet=`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`
const newQuote=()=>{
  setRun(prev=>!prev)
}
useEffect(()=>{

  if(!hasEffectRun.current){
    hasEffectRun.current=true;
    return;
  }
    
    
    axios.get(url)
  .then((res)=>{
    setQuote(res.data.quote)
    setAuthor(res.data.author)
    }
    
  ).catch((error)=>{
    console.error(error)
   
    setErr(error.message);})
  

  


},[run]

)

  return (
    <div style={bodyStyle} className="App">
     <div id='quote-box'>
      
      {err && <div className='loading-error'>{err}</div>}
      <div id='text'>{quote}</div>
      <div id='author'>~{author}</div>
      <div id='buttons'>
      <div id='new-quote' onClick={newQuote}>newQuote</div>
      <a href={tweet} target="_blank" rel="noreferrer" id='tweet-quote'>tweetQuote</a>
      </div>
      

     </div>
    </div>
  );
}

export default App;
