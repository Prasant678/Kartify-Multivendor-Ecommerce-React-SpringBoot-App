// import React from 'react'

import { Add, FavoriteBorder, LocalShipping, Remove, Shield, ShoppingCart, Star, VerifiedUser, Wallet, WorkspacePremium } from "@mui/icons-material"
import { Box, Button, Divider, LinearProgress, Typography } from "@mui/material"
import { amber, green, red, yellow } from "@mui/material/colors"
import { useEffect, useState } from "react"
import SimilarProducts from "../Components/SimilarProducts"
import ReviewCard from "../Components/ReviewCard"
import { useAppDispatch, useAppSelector } from "../../Store/store"
import { useParams } from "react-router-dom"
import { fetchProductById } from "../../Store/Customer/productSlice"

const reviews = [
    { label: "Excellent", value: 60, color: "bg-green-500" },
    { label: "Very Good", value: 20, color: "bg-green-400" },
    { label: "Good", value: 10, color: "bg-yellow-400" },
    { label: "Average", value: 7, color: "bg-orange-400" },
    { label: "Poor", value: 3, color: "bg-red-500" },
];
const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useAppDispatch();
    const { productId } = useParams();
    const { product } = useAppSelector(store => store);
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        dispatch(fetchProductById(Number(productId)));
    },[productId])

    const handleActiveImage = (value:number) => () => {
        setActiveImage(value);
    }
    return (
        <div className="px-3.5 lg:px-20 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <section className="flex flex-col lg:flex-row gap-3">
                    <div className="w-full lg:w-[13%] flex flex-wrap lg:flex-col gap-3">
                        {product.product?.images.map((item, index) => <img onClick={handleActiveImage(index)} className="lg:w-full w-[50px] cursor-pointer rounded-md" src={item} alt="" />)}
                    </div>
                    <div className="w-full lg:w-[78%]">
                        <img className="w-full rounded-md" src={product.product?.images[activeImage]} alt="" />
                    </div>
                </section>
                <section>
                    <h1 className="font-bold text-2xl tracking-tight mt-4 lg:mt-0 text-gray-200">{product.product?.seller?.businessDetails?.businessName}</h1>
                    <p className="text-gray-300 text-lg font-semibold mt-2">{product.product?.title}</p>
                    <p className="text-md font-light mt-2">{product.product?.description}</p>
                    <div className="flex justify-between items-center py-2 w-[240px] mt-2">
                        <div className="flex gap-1 items-center">
                            {/* <span>4</span> */}
                            {[1, 1, 1, 1, 1].map(() => <Star sx={{ color: yellow[500], fontSize: "20px" }} />)}
                            <span className="ml-3">
                                241 Ratings
                            </span>
                        </div>
                        {/* <Divider orientation="vertical" flexItem/> */}
                    </div>
                    <p className="space-x-1 mt-4">
                        <span className="text-xl font-sans text-gray-300">₹ {product.product?.sellingPrice}</span>
                        <span className="text-lg line-through decoration-1 text-gray-500 ml-3">₹ {product.product?.mrpPrice}</span>
                        <span className="text-[#E4A11B] text-lg font-semibold ml-1 lg:ml-4">{product.product?.discountPercent}% off</span>
                    </p>
                    <p className="text-sm mt-1 font-light">Inclusive of all taxes, Free Shipping above ₹1500</p>
                    <div className="mt-7 space-y-3">
                        <div className="flex items-center gap-2">
                            <VerifiedUser sx={{ color: green[700] }} />
                            <p className="font-light">Authentic & Quality Assured</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <WorkspacePremium sx={{ color: red[500] }} />
                            <p className="font-light">100% money back guarantee</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <LocalShipping sx={{ color: amber[700] }} />
                            <p className="font-light">Free Shipping & Returns</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Wallet sx={{ color: "#6b7280" }} />
                            <p className="font-light">Pay on delivery might be avialable</p>
                        </div>
                    </div>
                    <div className="lg:mt-8 mt-4 space-y-3">
                        <h1 className="text-xl font-light">Quantity</h1>
                        <div className="flex items-center w-23 justify-between bg-[#242424] px-1.5 pb-1 rounded">
                            <button className="cursor-pointer" disabled={quantity == 1} onClick={() => setQuantity(quantity - 1)}>
                                <Remove sx={{ fontSize: 20, color: quantity == 1 ? 'gray' : 'inherit' }} />
                            </button>
                            <span className="pt-0.5">{quantity}</span>
                            <button className="cursor-pointer" onClick={() => setQuantity(quantity + 1)}>
                                <Add sx={{ fontSize: 20 }} />
                            </button>
                        </div>
                    </div>
                    <div className="lg:mt-12 mt-6 flex items-center gap-3">
                        <Button fullWidth variant="contained" color="secondary" startIcon={<ShoppingCart />} sx={{ py: "0.4rem" }}>
                            <p className="mt-[1px]">Add To Cart</p>
                        </Button>
                        <Button fullWidth variant="outlined" color="secondary" startIcon={<FavoriteBorder />} sx={{ py: "0.4rem" }}>
                            <p className="mt-[1px]">Wishlist</p>
                        </Button>
                    </div>

                </section>
            </div>
            <h1 className="text-2xl mt-10 mb-2 font-light">Reviews & Ratings</h1>
            <section className="flex flex-col lg:flex-row justify-between">
                <div className="w-[23.2rem] md:w-[45.8rem] lg:w-[40rem] px-1 lg:px-0 pr-0 lg:pr-17 bg-inherit shadow rounded-lg space-y-4 mt-2 lg:mt-7 pb-3 lg:pb-0">
                    {reviews.map((item, index) => {
                        return (
                            <div key={index} className="space-y-1">
                                <div className="flex justify-between text-sm text-gray-300">
                                    <span>{item.label}</span>
                                </div>
                                <div className="w-full bg-[#242424] rounded-full h-1">
                                    <div
                                        className={`${item.color} h-1 rounded-full`}
                                        style={{ width: `${item.value}` }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-4 h-[20rem] overflow-y-scroll">
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() =>
                        <div className="space-y-5 mt-3">
                            <ReviewCard />
                            <Divider />
                        </div>)}
                </div>
            </section>
            <div className="mt-15">
                <h1 className="text-2xl font-bold">Similar Products</h1>
                <div className="mt-7 mb-8">
                    <SimilarProducts />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails