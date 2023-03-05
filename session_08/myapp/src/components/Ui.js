import React, { useEffect, useState } from 'react'

const Ui = () => {
    const [count, setCount] = useState(0)
    const countIncreament = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const countReset = () => {
        setCount(0)
    }
    useEffect(() => {
        console.log('acted')
        const timer = setInterval(countIncreament, 1000)
        return () => {
            // console.log('deleted')
            clearInterval(timer)
        }

    })
    return (
        <>
            <p>current:{count}</p>
            <button onClick={countReset}>reset</button>
        </>
    )
}

export default Ui