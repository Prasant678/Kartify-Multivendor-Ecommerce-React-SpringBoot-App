import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../Store/store';
import { useFormik } from 'formik';
import { sendLoginSignupOtp, signin, signup } from '../../Store/authSlice';
import { Button, CircularProgress, TextField } from '@mui/material';
import { amber, blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const dispatch = useAppDispatch();
    const { auth } = useAppSelector(store => store);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            otp: ''
        },
        onSubmit(values) {
            dispatch(signup(values));
            navigate("/");
        }
    })

    const handleSendOtp = () => {
        dispatch(sendLoginSignupOtp({ email: formik.values.email }))
    }
    return (
        <div>
            <div className="space-y-5">
                <h1 className="text-center text-gray-300 text-2xl font-bold lg:px-18 px-14">Signup To Kartify</h1>
                <div>
                    <TextField fullWidth
                        size='small' name='fullName' label="Full Name" value={formik.values.fullName} onChange={formik.handleChange} error={formik.touched.fullName && Boolean(formik.errors.fullName)} helperText={formik.touched.fullName && formik.errors.fullName}
                    />
                </div>
                <div>
                    <TextField fullWidth
                        size='small' name='email' label="Email" value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email}
                    />
                </div>
                {auth.otpSent &&
                    <>
                        <div className='space-y-2\'>
                            <p className='text-sm mb-2 font-light text-gray-300 opacity-60'>Enter OTP Sent to your Email</p>
                            <TextField fullWidth size='small' name='otp' label="OTP" value={formik.values.otp} onChange={formik.handleChange} error={formik.touched.otp && Boolean(formik.errors.otp)} helperText={formik.touched.otp && formik.errors.otp} />
                        </div>
                    </>}
                {auth.otpSent ? <Button
                    fullWidth
                    variant="contained"
                    sx={{ bgcolor: amber[900] }}
                    onClick={() => formik.handleSubmit()}
                >
                    <p>Signup</p>
                </Button> : <Button onClick={handleSendOtp} fullWidth variant='contained' sx={{ bgcolor: amber[900] }}>
                    {auth.loading ? <CircularProgress size="27px" sx={{color: blue[700]}}/> : <p className='text-black hover:font-semibold'>Send OTP</p>}
                </Button>}
            </div>
        </div>
    )
}

export default Signup
