import { Box, Button, Divider } from '@mui/material'
import React from 'react'
import OrderStepper from '../Components/OrderStepper'
import { Payments } from '@mui/icons-material'

const OrderDetails = () => {
    return (
        <div className='pt-5 px-5 lg:px-70 min-h-screen'>
            <div className='flex justify-center'>
                <h1 className="text-2xl font-semibold mb-8 text-gray-200">ORDER DETAILS</h1>
            </div>
            <Box className="space-y-5">
                <section className="flex flex-col justify-center items-center gap-5">
                    <img className='w-[100px] rounded' src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/v/y/i/-original-imahaymwjftsh6ej.jpeg?q=70" alt="" />
                    <div className="text-sm space-y-1 text-center">
                        <h1 className="font-bold text-lg text-gray-200">Noise Smartwatch</h1>
                        <p className='font-light text-gray-300'>Noise Evolve 4 1.46 AMOLED Always On Display with Premium Design & Bluetooth Calling Smartwatch  (Electric Blue Strap, Regular)</p>
                        <p className='font-light'><span className='font-medium text-gray-300'>Size: </span>M</p>
                    </div>
                    <div>
                        <Button><p>Write Review</p></Button>
                    </div>
                </section>
                <section className="border border-[#242424] rounded-md p-3">
                    <OrderStepper orderStatus={"CONFIRMED"} />
                </section>
                <div className='border border-[#242424] rounded-md p-5'>
                    <h1 className="font-bold pb-3 text-gray-200">Delivery Address</h1>
                    <div className="text-sm space-y-2">
                        <div className='flex gap-4 font-medium text-gray-300'>
                            <p>Prasant</p>
                            <Divider flexItem orientation='vertical' />
                            <p>548458547</p>
                        </div>
                        <p className='text-gray-300'>Indo German Club Staff Quarters</p>
                    </div>
                </div>
                <div className="flex justify-between text-sm pt-5 px-5">
                    <div className="space-y-1">
                        <p className='font-bold text-lg'>Total Item Price</p>
                        <p>You Saved <span className='text-green-500 font-medium text-xs'>₹ {555}.00</span> on this item</p>
                    </div>
                    <p className="font-medium text-lg">₹ {400}.00</p>
                </div>
                <div className="px-5">
                    <div className="bg-teal-800 rounded px-5 py-2 text-sm font-medium flex items-center gap-3">
                        <Payments />
                        <p className='text-gray-300'>Pay On Delivery</p>
                    </div>
                </div>
                <Divider variant='middle'/>
                <div className="px-5 pb-5 pt-3">
                    <p className="text-xs"><span className='font-semibold text-sm'>Sold By: </span>Prasant work shopping Ltd.</p>
                </div>
                <div className="px-2 pb-6">
                    <Button fullWidth disabled={true}

                        // onClick={handleCancelOrder}
                        color='error' sx={{ py: "0.7rem" }} variant='outlined'>
                        {true ? "order canceled" : "Cancel Order"}
                    </Button>
                </div>
            </Box>
        </div>
    )
}

export default OrderDetails
