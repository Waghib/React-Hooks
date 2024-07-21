import React, {useState} from 'react'

function HookCounter() {

  const  [count, setCount] = useState(0) //array destructuring

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter

// step 1: create a functional componenet
// step 2: initialize with 0
// step 3: implement a function