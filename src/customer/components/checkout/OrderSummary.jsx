import React from 'react'
import AddressCart from './AddressCart'
import Cart from '../cart/Cart'

const OrderSummary = () => {
  return (
    <div>
      <div>
        <AddressCart/>
      </div>
      <div>
        <Cart/>
      </div>
    </div>
  )
}

export default OrderSummary