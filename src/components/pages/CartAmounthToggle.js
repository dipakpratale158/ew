import React from 'react'

const CartAmounthToggle = ({quantity,setIncrease,setDecreasing}) => {
  return (
    <div>
      <button onClick={setDecreasing}></button>
      <div>{quantity}</div>
      <button onClick={setIncrease}></button>

    </div>
  )
}

export default CartAmounthToggle
