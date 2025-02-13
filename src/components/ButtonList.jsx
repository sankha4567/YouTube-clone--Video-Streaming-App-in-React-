import React from 'react'
import Button from './Button'
const items=["All","Live","Cricket","Recruitment","Hindunism","Gaming","News","Songs","Vlogs","GATE","Development","Exercises"]
// function getRandomNumber() {
//   return Math.floor(Math.random() * 1000) + 1;
// }

const ButtonList = () => {
  return (
    <div className='flex'>
     {
      items?.map((item,index)=>{
       return  <Button  name={item}  key={index}></Button>
      })
     }
    </div>
  )
}

export default ButtonList
