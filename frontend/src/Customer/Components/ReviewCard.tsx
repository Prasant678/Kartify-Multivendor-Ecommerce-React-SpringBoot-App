import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid, IconButton, Rating } from '@mui/material'
// import React from 'react'

const ReviewCard = () => {
    return (
        <div className='flex justify-between'>
            <Grid container spacing={7}>
                <Grid size={{ xs: 1 }}>
                    <Box>
                        <Avatar className='text-black' sx={{ width: 45, height: 45, bgcolor: "#86198f" }}>
                            P
                        </Avatar>
                    </Box>
                </Grid>
                <Grid size={{ xs: 9 }}>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center w-77 md:w-[41.5rem] lg:w-[33rem]">
                            <div>
                                <p className='font-light text-md'>Prasant</p>
                                <p className='opacity-70 text-sm'>2025-05-16T22:06:30</p>
                            </div>
                            <IconButton className='ml-60'>
                                <Delete color='error'/>
                            </IconButton>
                        </div>
                    </div>
                    <Rating className='mt-2' readOnly value={4.5} precision={.5} size='small' />
                    <p className="mt-1 w-[300px] lg:w-[30rem] md:w-[40rem] mb-2 font-light">Value for Money Product, Great Product Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, corporis id officia, incidunt minima vero deserunt cum, esse repudiandae exercitationem at accusamus molestiae vel praesentium voluptatibus aperiam repellendus nisi hic illo. Corporis expedita exercitationem ratione!</p>
                    <div>
                        <img className='w-24 h-24 object-cover' src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/i/g/s-os-100-vdorgnl-grn117-veirdo-original-imah4fy3zb5paeaj.jpeg?q=70" alt="" />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ReviewCard
