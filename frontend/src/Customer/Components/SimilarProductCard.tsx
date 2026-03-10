// import React from 'react'

const SimilarProductCard = () => {
    return (
        <>
            <div className="relative w-[181px] md:w-[246px] lg:w-[232px] max-w-xs overflow-hidden rounded-lg border border-[#181818] bg-[#181818] shadow-md">
                <div className="relative flex h-60 overflow-hidden rounded-lg rounded-b-none">
                            <img className="absolute top-0 left-0 h-[100%] w-[100%] transition-transform duration-[0.5s] ease-in-out object-cover cursor-pointer object-top " src={"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/i/g/s-os-100-vdorgnl-grn117-veirdo-original-imah4fy3zb5paeaj.jpeg?q=70"} alt=""/>
                </div>
                <div className="mt-4 px-3 lg:px-5 pb-2">
                    <h5 className="text-sm lg:text-lg tracking-tight">Nike</h5>
                    <p className="text-sm lg:text-md tracking-tight mb-3">Blue Shirt</p>
                    <div className="mb-2 flex items-center justify-between">
                        <p className="space-x-1">
                            <span className="text-[13px] line-through decoration-1 text-gray-500">₹ 699</span>
                            <span className="text-sm font-sans text-gray-300">₹ 449</span>
                            <span className="text-[#E4A11B] font-semibold ml-1 lg:ml-4">60% off</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SimilarProductCard
