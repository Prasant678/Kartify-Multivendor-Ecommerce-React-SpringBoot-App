// import React from 'react'

import { Favorite, ModeComment } from "@mui/icons-material";
import { useEffect, useState } from "react"
import type { Product } from "../../types/ProductTypes";
import { useNavigate } from "react-router-dom";

const ProductCard = ({item}:{item:Product}) => {
    const [currImage, setCurrImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        let interval: any
        if (isHovered) {
            interval = setInterval(() => {
                setCurrImage((prevImage) => (prevImage + 1) % item.images.length);
            }, 1500);
        } else if (interval) {
            clearInterval(interval);
            interval = null;
        }
        return () => clearInterval(interval);

    }, [isHovered])
    return (
        <>
            <div onClick={() => navigate(`/product-details/${item.category?.categoryId}/${item.title}/${item.id}`)} className="relative w-[180px] md:w-[238px] lg:w-[250px] max-w-xs overflow-hidden rounded-lg border border-[#181818] bg-[#181818] shadow-md">
                <div className="relative flex h-60 overflow-hidden rounded-lg rounded-b-none" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    {
                        item.images.map((item, index) =>
                            <img className="absolute top-0 left-0 h-[100%] w-[100%] transition-transform duration-[0.5s] ease-in-out object-cover cursor-pointer object-top " src={item} alt="" style={{ transform: `translateX(${(index - currImage) * 100}%)` }} />
                        )}
                    {isHovered &&
                        <div className="absolute bottom-[16px] left-[50%] -translate-x-2/4 flex flex-col items-center space-y-2">
                            <div className="flex gap-6">
                                <div className="bg-[#ffffff71] pt-0.5 pb-1 px-[5px] rounded-full ease-in-out duration-1000 hover:scale-105 cursor-pointer ">
                                    <Favorite sx={{ color: "#e31b23" }} fontSize="small" />
                                </div>
                                <div className="bg-[#ffffff71] pt-0.5 pb-1 px-[5px] rounded-full ease-in-out duration-1000 hover:scale-105 cursor-pointer ">
                                    <ModeComment sx={{ color: "#1e40af" }} fontSize="small" />
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="mt-4 px-3 lg:px-5 pb-2">
                    <h5 className="text-sm lg:text-lg tracking-tight">{item.seller?.businessDetails.businessName}</h5>
                    <p className="text-sm lg:text-md tracking-tight mb-3">{item.title}</p>
                    <div className="mb-2 flex items-center justify-between">
                        <p className="space-x-1">
                            <span className="text-sm font-sans text-gray-300">₹ {item.sellingPrice}</span>
                            <span className="text-[13px] line-through decoration-1 text-gray-500 ml-2">₹ {item.mrpPrice}</span>
                            <span className="text-[#E4A11B] font-semibold ml-1 lg:ml-4">{item.discountPercent}% off</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
