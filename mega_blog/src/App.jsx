import { useState } from 'react';



function App(){

  console.log(import.meta.env.VITE_APPWRITE_URL)
  // remember don't just copy and paste read the documentation , beacause we are using vite so we have to use import.meta.env.VITE_APPWRITE_URL
  



const [count , setCount] = useState(0)

// for increment

function increment() {

  if (count < 10) {
    setCount(count+1)
  }
  
}



// for decrement

function decrement() {

  if (count  > 0 ){
    setCount(count-1)
  }

  
}


  return (
    <>
    <h1>Counter : {count}</h1>
    <button onClick={increment}>+</button> 
    <br /> 
    <button onClick={decrement}>-</button>
    </>
  )
}

export default App;