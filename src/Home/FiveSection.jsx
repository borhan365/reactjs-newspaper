
import React, {useState} from 'react'


function FiveSection() {

    const [count, setCount] = useState(0);

    const Increse = () => {
        setCount(count + 1)
    }
    const Descrese = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <>
           <h1> {count} </h1>
           <button onClick={Increse}>Increse</button> 
           <button onClick={Descrese}>Descrese</button> 
           <button onClick={reset}>Descrese</button> 
        </>
    )
}

export default FiveSection
