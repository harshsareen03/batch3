import React,{useState} from 'react'

const Gender = () => {
    const [name,setName]=useState(" ")
    const[gend,Setgend]=useState(" ")

    function getForm(e){
        console.warn(name)
        console.warn(gend)
        e.preventDefault(e)
    }

  return (
    <>
    <h1>Gender</h1>
    <form onSubmit={getForm}>
        <input type="text" value={name} onChange={(e)=>(setName(e.target.value))} placeholder='write your name'></input>
        <option>
            select option
        </option>
        <select>
            <option>male</option>
            <option>female</option>
        </select>
        <button>submit</button>
    </form>
    </>
  )
}

export default Gender