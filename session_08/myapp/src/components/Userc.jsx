import React,{useEffect,useState} from 'react'
import axios from 'axios'

// useeffect hook allows you to perform side effect in your commponent
// useEffect is a React Hook that lets you synchronize a component with an external system.
const baseUrl=""
const Userc = () => {
    
    // useEffect(()=>{
    //     // mount
    //     // update

    //     return
    //     // kill/unmount

    // },[input])
    const[post,setPost]=useState(null)
    useEffect(()=>{
        axios.get(`${baseUrl}/1`).then((response)=>{

            setPost(response.data)
        })

        
    },[])
  return (
    <div>
        <h1>{post.title}</h1>
        <img src={post.image} height={100}/>
        <h2>{post.price}</h2>
        <h2>{post.description}</h2>
    </div>
  )
}

export default Userc