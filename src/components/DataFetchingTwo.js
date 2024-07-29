import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong!'
            }
        default:
            return state
    }
}

function DataFetchingTwo() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({type: 'FETCH_SUCCESS', payload: response.data})
            })
            .catch(error => {
                dispatch({type: 'FETCH_ERROR'})
            })
    }, [])

  return (
    <div>
        {state.loading ? 'Loading' : state.post.title}
        {state.error ? state.error : null}
    </div>
  )
}

export default DataFetchingTwo

// useState vs useReducer
// types of state: useState is fine for independent pieces of state, useReducer is better for state objects
// number of state transitions: useState triggers re-render on every state transition, useReducer doesn't
// related state transitions: useState doesn't support related state transitions, useReducer does
// business logic: useState doesn't support complex business logic, useReducer does
// local vs global: useState is fine for local state, but useReducer is better for global state
