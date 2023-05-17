import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './Redux/counterSlice';
import Task from './Component/Task';

const App = () => {
  let count = useSelector((state) => {
    return state.count
  })
  // console.log(count);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>{count.counter}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <Task />
    </>
  )
}
export default App

