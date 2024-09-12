import React from 'react'
import { addCounter, minusCounter } from '../store/slices/counterSlice'
import { useDispatch } from 'react-redux'

const Button = () => {

  const dispatch = useDispatch();

  const handleAction = () => {
    dispatch(addCounter())
  }

  const handleAction2 =()=>{
    dispatch(minusCounter())
  }

  return (
    <>
      <button onClick={handleAction}>Add</button>
      <button onClick={handleAction2}>Minus</button>
    </>
  )
}

export default Button