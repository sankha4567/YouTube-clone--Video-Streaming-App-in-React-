import React,{useMemo, useState} from 'react'
import { findNthPrime } from '../utils/Helper';
const Demo = () => {
  const[variable,setVariable]=useState(0);
  const[isDarkTheme,setDarkTheme] = useState(true);
  console.log("rendering....");
  // everytime state changes heavy operation happens
   const prime = useMemo( () => findNthPrime(variable),[variable]);
   
   
   
  return (
    <div className = {
      `m-4 p-2 w-96 h-96 border border-black ${isDarkTheme ? "bg-black text-red-300" : "bg-white text-black"}`
      
    }>
    <div>
      <button onClick={(e)=>setDarkTheme(!isDarkTheme)} className='bg-orange-300 text-red-400 w-20 m-10 p-2 rounded-sm cursor-pointer'>Toggle</button>
    </div> 
      <div>
        <input type='text' value={variable} onChange={(e)=>setVariable(e.target.value)} className='border border-black px-2 text-black bg-white'></input>
      </div>
      <div>
        <h1>Nth prime:{prime}</h1>
      </div>
    </div>

  )
}

export default Demo