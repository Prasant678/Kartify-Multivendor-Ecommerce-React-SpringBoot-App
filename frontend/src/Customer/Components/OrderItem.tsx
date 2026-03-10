import { ElectricBolt, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { blue } from '@mui/material/colors'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const OrderItem = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate("/orders/:orderId/:orderItemId")} className='text-sm bg-inherit py-2 px-5 space-y-4 border border-[#242424] rounded-md cursor-pointer'>
            <div className='flex items-center gap-4'>
                <div className='m-[-5px]'>
                    <Avatar sx={{ bgcolor: blue[700], width: 32, height: 32 }}>
                        <ElectricBolt sx={{ fontSize: 20 }} />
                    </Avatar>
                </div>
                <div>
                    <h1 className="text-md font-medium text-teal-500">PENDING</h1>
                    <p>Arriving By Mon, 19 May</p>
                </div>
            </div>
            <div className="p-2 bg-teal-700 flex gap-3 rounded-md mx-[-10px]">
                <div>
                    <img className='w-[70px] rounded' src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/v/y/i/-original-imahaymwjftsh6ej.jpeg?q=70" alt="" />
                </div>
                <div className='w-full space-y-0.5 text-black'>
                    <h1 className="font-semibold">Noise Smartwatch</h1>
                    <p className='font-light'>Noise Evolve 4 1.46 AMOLED Always On Display with Premium Design & Bluetooth Calling Smartwatch  (Electric Blue Strap, Regular)</p>
                    <p><span className='text-sm font-semibold'>Size: </span>Free</p>
                </div>
            </div>
        </div >
    )
}

export default OrderItem
