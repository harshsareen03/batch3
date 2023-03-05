import React,{useState} from 'react'

{/* usestate is react hook that allows you to add state to a functional 
    component it return an array with two values:the current state and
    the function to update it. */}
const Ust = () => {
    // const[state,setState]=useState()
    const[show,setShow]=useState(true)
  return (
    <>
    {
        show?<h1>hello</h1>:null
        }
    <button onClick={()=>setShow(true)} > show</button>
    <button onClick={()=>setShow(false)} > hide</button>



    </>
  )
}

export default Ust