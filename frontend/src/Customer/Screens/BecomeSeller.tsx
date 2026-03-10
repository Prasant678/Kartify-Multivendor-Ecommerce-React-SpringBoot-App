import React, { useState } from 'react'
import SellerAccountForm from '../Components/SellerAccountForm';
import SellerLoginForm from '../Components/SellerLoginForm';
import { Button } from '@mui/material';

const BecomeSeller = () => {
    const [isLogin, setIsLogin] = useState(false);

    const handleShowPage = () => {
        setIsLogin(!isLogin);
    }
  return (
    <div className='grid gap-1 grid-cols-3'>
      <section className="lg:col-span-1 col-span-3 p-5 lg:p-7 lg:shadow-lg lg:shadow-[#3d3d3d] rounded-b-md">
        {!isLogin ? <SellerAccountForm /> : <SellerLoginForm />}
        <div className="mt-18 lg:mt-5 md:mt-25 space-y-2">
            <h1 className='text-center text-lg font-light text-gray-300'>{isLogin ? "Create an Account?" : "Already have an Account?"}</h1>
            <Button size='small' fullWidth variant='outlined' onClick={handleShowPage} sx={{ py: "5px"}}>
            {isLogin ? <p className='text-md font-bold'>Register</p> : <p className='text-md font-bold'>Login</p>}
            </Button>
        </div>
      </section>
      <section className="hidden md:hidden lg:col-span-2 lg:block justify-center items-center">
        <div className="lg:w-[100%] space-y-10 relative">
            <div className="space-y-1 font-bold text-center absolute top-68 left-20">
                <p className="text-4xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Join the Marketplace Revolution</p>
                <p className='text-lg font-light text-gray-200'>Boost your sales today</p>
            </div>
            <img src="seller_banner.jpeg" alt="" />
        </div>
      </section>
    </div>
  )
}

export default BecomeSeller
