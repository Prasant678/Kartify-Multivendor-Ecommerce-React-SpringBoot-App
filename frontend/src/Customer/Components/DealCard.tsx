// import React from 'react'

const DealCard = () => {
  return (
    <div className="w-[7rem] md:w-[10rem] cursor-pointer">
        <img className="w-full h-[7rem] md:h-[10rem] object-fill object-top rounded-lg rounded-b-none" src="https://rukminim2.flixcart.com/image/400/400/xif0q/smartwatch/e/g/x/35-306-wrb-sw-twistgo-std-blk-blk-android-ios-noise-yes-original-imah889zcdzvzcuf.jpeg?q=50" alt="" />
        <div className="bg-[#1b1b1b] text-white p-2 flex flex-col items-center justify-center py-5 rounded-lg rounded-t-none gap-1.5">
            <p className="text-xs md:text-lg font-light md:font-semibold">Smart Watches</p>
            <p className="text-sm md:text-xl font-semibold md:font-bold">20% OFF</p>
            <p className="font-light text-sm md:text-lg">Shop Now</p>
        </div>
    </div>
  )
}

export default DealCard
