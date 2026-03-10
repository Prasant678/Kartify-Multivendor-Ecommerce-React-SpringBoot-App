import { Button, CircularProgress, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from '../../Store/store'
import { sendLoginSignupOtp, signin } from '../../Store/authSlice';
import { sellerLogin } from '../../Store/Seller/sellerAuthSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { blue } from '@mui/material/colors';
// import React from 'react'

const SellerLoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { auth } = useAppSelector(store => store);
    const formik = useFormik({
        initialValues: {
            email: '',
            otp: ''
        },
        onSubmit(values) {
            console.log("form data", values);
            dispatch(sellerLogin(values));
            navigate("/seller")
        }
    })

    const handleSendOtp = () => {
        dispatch(sendLoginSignupOtp({ email: formik.values.email }))
    }
    return (
        <div>
            <h1 className="text-center text-2xl font-bold text-gray-200 mt-35 mb-8">LOGIN as Seller</h1>
            <div className='space-y-6 lg:px-6 md:px-12 px-4'>
                <div>
                    <TextField fullWidth size='small' name='email' label="Email" value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} />
                </div>
                {auth.otpSent &&
                    <div className='space-y-2\'>
                        <p className='text-sm mb-2 font-light text-gray-300 opacity-60'>Enter OTP Sent to your Email</p>
                        <TextField fullWidth size='small' name='otp' label="OTP" value={formik.values.otp} onChange={formik.handleChange} error={formik.touched.otp && Boolean(formik.errors.otp)} helperText={formik.touched.otp && formik.errors.otp} />
                    </div>
                }
                {auth.otpSent ? <Button onClick={() => formik.handleSubmit()} fullWidth variant='contained' sx={{ bgcolor: "#242424", marginBottom: '60px' }}>
                    <p className='text-gray-300 hover:font-semibold'>Login</p>
                </Button> : <Button onClick={handleSendOtp} fullWidth variant='contained' sx={{ bgcolor: "#242424", marginBottom: '9.5rem' }}>
                    {auth.loading ? <CircularProgress size="27px" sx={{ color: blue[700] }} /> : <p className='text-gray-300 hover:font-semibold'>Send OTP</p>}
                </Button>}
            </div>
        </div>
    )
}

export default SellerLoginForm
