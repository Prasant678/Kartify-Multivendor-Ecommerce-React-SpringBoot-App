import { Box, TextField } from '@mui/material'
// import React from 'react'

const BecomeSellerStep1 = ({ formik }: any) => {
    return (
        <Box>
            <p className='text-xl font-bold text-center pb-9 pt-39 text-gray-300'>Contact Details</p>
            <div className='space-y-4 lg:px-6 md:px-12 px-4'>
                <div>
                    <TextField fullWidth size='small' name='mobile' label="Mobile" value={formik.values.mobile} onChange={formik.handleChange} error={formik.touched.mobile && Boolean(formik.errors.mobile)} helperText={formik.touched.mobile && formik.errors.mobile} />
                </div>
                <div>
                    <TextField fullWidth size='small' name='GSTIN' label="GSTIN" value={formik.values.GSTIN} onChange={formik.handleChange} error={formik.touched.GSTIN && Boolean(formik.errors.GSTIN)} helperText={formik.touched.GSTIN && formik.errors.GSTIN} />
                </div>
            </div>
        </Box>
    )
}

export default BecomeSellerStep1
