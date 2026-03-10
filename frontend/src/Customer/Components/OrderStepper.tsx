import { CheckCircle, FiberManualRecord } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'

const steps = [
    { name: "Order Placed", description: "on Thu, 11 jul", value: "PLACED" },
    { name: "Confirmed", description: "Order Confirmed on Fri, 12 jul", value: "CONFIRMED" },
    { name: "Shipped", description: "by Sat, 13 jul", value: "SHIPPED" },
    { name: "Arriving", description: "by 15 jul - 17 jul", value: "ARRIVING" },
    { name: "Delivered", description: "by 17jul - 18 jul", value: "DELIVERED" }
]

const canceledStep = [
    { name: "Order Placed", description: "on Thu, 11 jul", value: "PLACED" },
    { name: "Order Cancelled", description: "on Thu, 11 jul", value: "CANCELLED" }
]

const currentStep = 2;


const OrderStepper = ({ orderStatus }: any) => {

    const [statusStep, setStatusStep] = useState(steps);

    useEffect(() => {
        if (orderStatus === "CANCELLED") {
            setStatusStep(canceledStep);
        } else {
            setStatusStep(steps);
        }
    }, [orderStatus])
  return (
    <Box className="mx-auto my-3">
      {statusStep.map((step, index) => (
        <>
        <div key={index} className='flex px-4'>
            <div className='flex flex-col items-center'>
                <Box sx={{ zIndex: -1}} className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${index <= currentStep ? "bg-[#242424] text-[#E4A11B]" : "bg-[#242424] text-gray-400"}`}>
                    {step.value === orderStatus ? (
                        <CheckCircle sx={{fontSize: 20}}/>
                    ) : (
                        <FiberManualRecord sx={{ zIndex: -1 ,fontSize:18}}/>
                    )}
                </Box>
                {index < statusStep.length - 1 && (
                    <div className={`h-20 w-[2px] ${index < currentStep ? "bg-teal-700" : "bg-[#242424] text-gray-500"}`}></div>
                )}
            </div>
            <div className="ml-3 w-full">
                <div className={`${step.value === orderStatus ? "bg-teal-700 px-3 py-1 text-black font-medium rounded-md -translate-y-3" : ""} ${orderStatus === "CANCELLED" && step.value === orderStatus ? "bg-red-500" : "" } w-full`}>
                    <p className={`${step.value === orderStatus ? "font-semibold text-md" : "text-sm"}`}>{step.name}</p>
                    <p className={`${step.value === orderStatus ? "text-black" : "text-gray-400"} text-sm`}>{step.description}</p>
                </div>
            </div>
        </div>
        </>
      ))}
    </Box>
  )
}

export default OrderStepper
