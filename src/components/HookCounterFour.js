import React, {useState} from 'react'

function HookCounterFour() {

    const [items, setItems] = useState([])

    const addItem = () => { 
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
  return (
    <div>
        <button onClick={addItem}>Add a number</button>
        <ul>
            {
                items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default HookCounterFour

// useState
// useState is a Hook that lets you add state to functional components.
// In classes, the state is always an object.
// With the useState hook, the state doesn't have to be an object.
// The useState returns an array with 2 elements.
// The first element is the current value of the state, and the second element is a state setter function.
// New state value depends on the previous state value? You can pass a function to the setter function.