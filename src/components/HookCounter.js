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

// Rules of Hooks
// Only call hooks at the top level : dont call hooks inside loops, conditions, or nested functions
// Only call Hooks from react funtions : Call them from within react functional componenets and not just any regular js function