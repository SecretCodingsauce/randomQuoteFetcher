
import { useEffect, useRef, useState } from 'react';
import './App.css';

import axios from 'axios';



function App() {
const url="https://api.api-ninjas.com/v1/quotes?"

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
    
    
    axios.get(url, {headers: {
    'X-Api-Key': '/XJUfaMN9+D87rJ4TjZiJA==KmHKpQdaevhrI8IV',
  }})
  .then((res)=>{
    setQuote(res.data[0].quote)
    setAuthor(res.data[0].author)}
    
  ).catch((err)=>console.error(err))
  

  


},[run]

)

  return (
    <div style={bodyStyle} className="App">
     <div id='quote-box'>
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
