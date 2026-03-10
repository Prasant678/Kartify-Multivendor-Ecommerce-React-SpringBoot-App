// import React from 'react'

const ShopByCategoryCard = () => {
  return (
    <div className="flex flex-col items-center justify-center group cursor-pointer">
      <div className="w-[80px] h-[80px] lg:w-[140px] lg:h-[140px] rounded-full border-3 lg:border-4 border-[#575757]">
        <img className="rounded-full w-full h-full group-hover:scale-96 object-cover object-top transition-transform duration-700" src="https://rukminim2.flixcart.com/image/612/612/xif0q/container/d/g/h/1-black2400ml4in1t-382-admonition-original-imahaz6bgg5qh7ry.jpeg?q=70" alt="" />
      </div>
      <h1 className="text-sm md:text-lg mt-4.5">Kitchen & Table</h1>
    </div>
  )
}

export default ShopByCategoryCard
