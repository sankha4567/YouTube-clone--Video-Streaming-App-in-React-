import React, { useState,useRef, useEffect } from 'react'

const Demo2 = () => {
  let x = 10;
  //whenever my component renders it refreshes our let
  // i dont wnat to change  value of x .i want these variable whose value wont change during re render
  const[y,setY]=useState(0);
  const ref=useRef(0);
  console.log(ref);
 /*
not like =>ref = 0
ref = { current : 0 }
it is an object current in it

 */
// const i=useRef(null);
//  useEffect(()=>{
//    i.current=setInterval(()=>{
//     console.log("namaste react" + Math.random());
//    },1000);
//   //  return () => clearInterval(i.current);
//   //  if i navigate to another component it stops
//  },[]);

  return (
    <div className='m-4 p-2 bg-slate-50 w-96 h-96 border border-black'>
      <button onClick={(e) => {
        x=x+1
        console.log(x);
        // VALUE WILL BE updated but not shown in the ui because of it is  no state variable
      }
    }
     className='bg-green-100 px-2 m-4 '>Increase x</button>
      <span className='font-bold text-xl'>{x}</span>

      <button onClick={(e) => {
        setY(y+1);
        console.log(y);
        // VALUE WILL BE updated but not shown in the ui because of it is  no state variable
      }
    }
     className='bg-green-100 px-2 m-4 '>Increase y</button>
      <span className='font-bold text-xl'>{y}</span>

      <button onClick={(e) => {
        ref.current = ref.current + 1;
        console.log(ref.current);
        // ref value will e updated on screen when state variables updates and will trigger the re rendering .but ref variables remembers the value
      }
    }
     className='bg-green-100 px-2 m-4 '>Increase Ref</button>
      <span className='font-bold text-xl'>{ref.current}</span>
    
   
   <button onClick={(e) => {
    clearInterval(i.current);
  }
}
 className='bg-green-100 px-2 m-4 ' >Control Button</button>
  
</div>
    
    
  )
}

export default Demo2
