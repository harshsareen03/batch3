import React,{useState} from 'react'

const Uplow = (props) => {
    const[text,setText]=useState('enter your text')
    let handlechange=()=>{
        let newtext=text.toUpperCase()
        setText(newtext)
    }
    
    let write=(event)=>{
        setText(event.target.value)
    }

  return (
    <>
    <h1>text</h1>
    <textarea value={text} onChange={write}></textarea>
    <button onClick={handlechange}>upper case</button>


    </>
  )
}

export default Uplow