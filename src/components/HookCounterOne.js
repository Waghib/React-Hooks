import React, {useState, useEffect} from 'react'

function HookCounterOne() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

   useEffect(() => {

    console.log('useEffect - Updating document title')
    document.title = `You clicked ${count} times`
   }, [count]) // second parameter is an array of values that useEffect depends on. If the value of count changes, useEffect will be called.

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounterOne