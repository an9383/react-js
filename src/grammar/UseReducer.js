import React , {useState, useReducer} from 'react'

const UseReducer = () => {
  function reducer (state,action) {
    switch (action.type) {
      case 'increment':
          return { counter: state.counter + 1 }
      case 'decrement':
          return { counter: state.counter - 1 }
      case 'reset':
          return { counter: 0 }
      default:
          return state
  }
  }
  const [count,setCount]  = useState(0)
  const increase = () => {
    setCount(count +1)
  }
  const decrease = () => {
    setCount(count -1)
  }

  const[state,dispatch] = useReducer(reducer,{counter:0})
  return (
    <div>
    <h2>{state.counter}</h2>
    <button onClick={()=> dispatch({type:'increase'}) }>증가</button>
    <button onClick={()=> dispatch({type:'decrease'}) }>감소</button>
    <button onClick={()=> dispatch({type:'reset'}) }>reset</button>
    </div>
  )
}

export default UseReducer