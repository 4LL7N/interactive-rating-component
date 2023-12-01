import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Rate from './Components/Rate/Rate'
import Submited from './Components/Submited/Submited'



function App() {
  let [Submit,setSubmit] =  useState(false)
  let [number , setNumber] = useState()
  console.log(Submit)
  return (  
    <>
      {Submit ? <Submited number={number}/> :<Rate setSubmit={setSubmit} number={number} setNumber={setNumber}/>}
      
    </>  
  )
}

export default App


