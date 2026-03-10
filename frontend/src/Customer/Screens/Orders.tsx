import React from 'react'
import OrderItem from '../Components/OrderItem'

const Orders = () => {
  return (
    <div className='pt-10 px-5 lg:px-70 min-h-screen'>
      <div className="pb-5 flex justify-center">
        <h1 className="text-2xl font-semibold text-gray-200">All Orders</h1>
      </div>
      <p className='mb-5'>From Anytime</p>
      <div className='space-y-4'>
        {[1,1,1,1,1].map(() => <OrderItem />)}
      </div>
    </div>
  )
}

export default Orders
