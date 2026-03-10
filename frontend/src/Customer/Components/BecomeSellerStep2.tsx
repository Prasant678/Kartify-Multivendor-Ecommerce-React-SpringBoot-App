import { Box, Grid, TextField } from '@mui/material'
// import React from 'react'

const BecomeSellerStep2 = ({ formik }: any) => {
    return (
        <Box sx={{ mt: "3.28rem" }}>
            <>
                <div className='lg:px-6 md:px-12 px-4'>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12 }}>
                            <TextField fullWidth size='small' name='name' label="Name" value={formik.values.name} onChange={formik.handleChange} error={formik.touched.name && Boolean(formik.errors.name)} helperText={formik.touched.name && formik.errors.name} />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <TextField fullWidth size='small' name='address' label="Address" value={formik.values.address} onChange={formik.handleChange} error={formik.touched.address && Boolean(formik.errors.address)} helperText={formik.touched.address && formik.errors.address} />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <TextField fullWidth size='small' name='locality' label="locality" value={formik.values.locality} onChange={formik.handleChange} error={formik.touched.locality && Boolean(formik.errors.locality)} helperText={formik.touched.locality && formik.errors.locality} />
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <TextField fullWidth size='small' name='city' label="City" value={formik.values.city} onChange={formik.handleChange} error={formik.touched.city && Boolean(formik.errors.city)} helperText={formik.touched.city && formik.errors.city} />
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <TextField fullWidth size='small' name='state' label="State" value={formik.values.state} onChange={formik.handleChange} error={formik.touched.state && Boolean(formik.errors.state)} helperText={formik.touched.state && formik.errors.state} />
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <TextField fullWidth size='small' name='mobile' label="Mobile" value={formik.values.mobile} onChange={formik.handleChange} error={formik.touched.mobile && Boolean(formik.errors.mobile)} helperText={formik.touched.mobile && formik.errors.mobile} />
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <TextField fullWidth size='small' name='pinCode' label="Pin Code" value={formik.values.pinCode} onChange={formik.handleChange} error={formik.touched.pinCode && Boolean(formik.errors.pinCode)} helperText={formik.touched.pinCode && formik.errors.pinCode} />
                        </Grid>
                    </Grid>
                </div>
            </>
        </Box>
    )
}

export default BecomeSellerStep2