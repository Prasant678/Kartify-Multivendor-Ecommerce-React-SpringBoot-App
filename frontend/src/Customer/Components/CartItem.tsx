import { Add, Close, Remove } from '@mui/icons-material'
import { Divider, IconButton } from '@mui/material'
import type { CartItem } from '../../types/CartTypes'
import { useAppDispatch } from '../../Store/store'
import { updateCartItem } from '../../Store/Customer/cartSlice'

const CartItemCard = ({item}:{item:CartItem}) => {
    const dispatch = useAppDispatch();
    const handleUpdateQuantity = (value: number) => {
        dispatch(updateCartItem({jwt: localStorage.getItem("jwt"), cartItemId: item.id, cartItem: {quantity: item.quantity + value}}));
    }
    return (
        <div className='border border-[#242424] rounded-md relative'>
            <div className="px-3 py-2 flex gap-4">
                <div className="">
                    <img className='w-[77px] rounded-md' src={item.product.images[0]} alt="" />
                </div>
                <div className='flex flex-col gap-0.5'>
                    <h1 className="text-sm font-semibold text-gray-200">{item.product.seller?.businessDetails.businessName}</h1>
                    <p className='text-[13px] font-light text-gray-300'>{item.product.title}</p>
                    <p className='text-xs font-light text-gray-200'><span className='font-light text-sm'>Sold by: </span>{item.product.seller?.sellerName}</p>
                    <p className='text-[13px] font-light text-gray-400'>7 Days Replacement Avialable</p>
                    <p className='text-xs font-light'><span className='font-light text-sm'>quantity: </span>{item.quantity}</p>
                </div>
            </div>
            <Divider variant="middle"/>
            <div className='p-2 flex justify-between items-center'>
                <div>
                    <p className='text-md font-medium pl-2'>₹ {item.sellingPrice}</p>
                </div>
                <div className="flex items-center gap-2 justify-between w-28 bg-[#242424] px-1.5 pb-1 rounded">
                    <button className="cursor-pointer" disabled={item.quantity == 1} onClick={() =>handleUpdateQuantity(-1)}>
                        <Remove sx={{ fontSize: 20, color: item.quantity == 1 ? 'gray' : 'inherit' }} />
                    </button>
                    <span className="pt-0.5">{item.quantity}</span>
                    <button className="cursor-pointer" onClick={() => handleUpdateQuantity(1)}>
                        <Add sx={{ fontSize: 20 }} />
                    </button>
                </div>
            </div>
            <div className='absolute top-[1px] right-[1px]'>
                <IconButton>
                    <Close sx={{fontSize: 18}}/>
                </IconButton>
            </div>
        </div>
    )
}

export default CartItemCard
