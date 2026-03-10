import { Remove } from '@mui/icons-material'
import { Divider, IconButton } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const PriceCard = () => {
  return (
    <>
      <div className="space-y-3 p-4">
        <div className="flex justify-between items-center">
          <span className='text-gray-200'>Subtotal</span>
          <span className='text-gray-400'>₹ 899</span>
        </div>
        <div className="flex justify-between items-center">
          <span className='text-gray-200'>Discount</span>
          <span className='text-gray-400'>₹ 699</span>
        </div>
        <div className="flex justify-between items-center">
          <span className='text-gray-200'>Shipping</span>
          <span className='text-gray-400'>₹ 79</span>
        </div>
        <div className="flex justify-between items-center">
          <span className='text-gray-200'>Platformfee</span>
          <span className='text-[#E4A11B]'>Free</span>
        </div>
        <Divider />
        <div className="flex justify-between items-center mt-4">
          <span className='text-gray-200'>Total</span>
          <span className='text-gray-400'>₹ 199</span>
        </div>
      </div>
    </>
  )
}

export default PriceCard
