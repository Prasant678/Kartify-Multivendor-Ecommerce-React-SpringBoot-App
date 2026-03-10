import { Box, Button, IconButton, Modal } from '@mui/material'
import React, { useState } from 'react'
import AddressCard from '../Components/AddressCard'
import { Add } from '@mui/icons-material'
import AddressForm from '../Components/AddressForm';
import PriceCard from '../Components/PriceCard';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 3,
    borderRadius: '8px'
};


const Checkout = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='pt-10 px-3 lg:px-60 md:px-7 min-h-screen'>
            <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
                <div className="col-span-2 space-y-3 mb-6">
                    <div className="flex justify-center items-center mb-6">
                        <p className='text-xl font-medium text-gray-200'>SELECT ADDRESS</p>
                    </div>
                    <div className='text-[17px] font-light'>
                        <p className='mb-3 text-gray-300'>Saved Addressess</p>
                        <div className='space-y-2'>
                            {[1, 1].map(() => <AddressCard />)}
                        </div>
                    </div>
                    <div className='rounded-md'>
                        <Button fullWidth variant='contained' sx={{ bgcolor: "#0f766e" }} onClick={handleOpen}>
                            <IconButton size='small'>
                                <Add sx={{ fontSize: 20, color: 'black' }} />
                            </IconButton>
                            <p className='pt-0.5 font-medium hover:font-semibold'>Add New Address</p>
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <AddressForm />
                            </Box>
                        </Modal>
                    </div>
                </div>
                <div className='lg:pt-10'>
                    <div className='border border-[#242424] rounded-md'>
                        <PriceCard />
                        <div className='p-4'>
                            <Button fullWidth variant='contained' sx={{ bgcolor: "#ea580c" }}>
                                <p className='hover:font-semibold'>Checkout</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
