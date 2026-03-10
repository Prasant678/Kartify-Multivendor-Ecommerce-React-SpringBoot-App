import { TextField } from '@mui/material'
// import React from 'react'

const BecomeSellerStep4 = ({ formik }: any) => {
    return (
        <div className='space-y-6 lg:px-6 md:px-12 px-4 pt-21'>
            <div>
                <TextField fullWidth size='small' name='businessDetails.businessName' label="Business Name" value={formik.values.businessDetails.businessName} onChange={formik.handleChange} error={formik.touched.businessDetails?.businessName && Boolean(formik.errors.businessDetails?.businessName)} helperText={formik.touched.businessDetails?.businessName && formik.errors.businessDetails?.businessName} />
            </div>
            <div>
                <TextField fullWidth size='small' name='sellerName' label="Seller Name" value={formik.values.sellerName} onChange={formik.handleChange} error={formik.touched.sellerName && Boolean(formik.errors.sellerName)} helperText={formik.touched.sellerName && formik.errors.sellerName} />
            </div>
            <div>
                <TextField fullWidth size='small' name='email' label="Email" value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} />
            </div>
            <div>
                <TextField fullWidth size='small' name='password' label="Password" value={formik.values.password} onChange={formik.handleChange} error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.touched.password && formik.errors.password} />
            </div>
        </div>
    )
}

export default BecomeSellerStep4
