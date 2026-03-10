import React, { useEffect, useState } from 'react'
import { Close, LocalOffer } from '@mui/icons-material'
import { blue, orange } from '@mui/material/colors'
import { Button, IconButton, TextField } from '@mui/material'
import PriceCard from '../Components/PriceCard'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../Store/store'
import { fetchUserCart } from '../../Store/Customer/cartSlice'
import CartItemCard from '../Components/CartItem'

const Cart = () => {
    const [couponCode, setCouponCode] = useState("");
    const handleChange = (e: any) => {
        setCouponCode(e.target.value);
    }

    const dispatch = useAppDispatch();
    const { cart } = useAppSelector(store => store);

    useEffect(()=> {
        dispatch(fetchUserCart(localStorage.getItem("jwt") || ""));
    },[])

    const navigate = useNavigate();
    return (
        <div className='pt-10 px-3 lg:px-50 md:px-7 min-h-screen'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="cartitemSection lg:col-span-2 space-y-3">
                    {cart.cart?.cartItems.map((item) => <CartItemCard item={item} />)}
                </div>
                <div className="col-span-1 text-sm space-y-3">
                    <div className='border border-[#242424] rounded-md px-4 py-3 space-y-5'>
                        <div className='flex gap-3 text-sm items-center'>
                            <LocalOffer sx={{ color: blue[700], fontSize: 20 }} />
                            <p className='text-[15px]'>Apply Coupon</p>
                        </div>
                        {true ?
                            <div className='flex items-center justify-between gap-2'>
                                <TextField fullWidth onChange={handleChange} id="outlined-basic" size='small' placeholder="Coupon Code" variant="outlined" />
                                <Button color='secondary'><p className='p-[2px]'>Apply</p></Button>
                            </div>
                            :
                            <div className='flex'>
                                <div className="pl-3 pr-1 border border-[#242424] rounded-md flex gap-1.5 items-center">
                                    <span className='font-light'>PRASANT30 Applied</span>
                                    <IconButton size='small'>
                                        <Close sx={{fontSize: 16}} color='error'/>
                                    </IconButton>
                                </div>
                            </div>}
                    </div>
                    <div className='border border-[#242424] rounded-md'>
                        <PriceCard />
                        <div className='p-4'>
                            <Button onClick={() => navigate('/checkout')} fullWidth variant='contained' sx={{bgcolor: "#ea580c"}}>
                                <p className='hover:font-semibold'>Buy Now</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart