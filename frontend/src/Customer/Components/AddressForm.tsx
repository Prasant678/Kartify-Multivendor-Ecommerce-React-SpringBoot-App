import { Box, Button, Grid, TextField } from '@mui/material'
// import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const AddressFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  mobile: Yup.string().required("Mobile Number is required").matches(/^[6-9]\d{9}$/, "Invalid Mobile Number"),
  pinCode: Yup.string().required("Pin Code is required").matches(/^[1-9][0-9]\d{4}$/, "Invalid Pin Code"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  locality: Yup.string().required("Locality is required")
})

const AddressForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      pinCode: '',
      address: '',
      city: '',
      state: '',
      locality: ''
    },
    validationSchema: AddressFormSchema,
    onSubmit(values) {
      console.log(values);
    },
  });
  return (
    <Box sx={{ max: "auto" }}>
      <p className='text-xl font-semibold text-center pb-5 text-gray-300'>Contact Details</p>
      <form onSubmit={formik.handleSubmit}>
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
          <Grid size={{ xs: 12 }}>
            <Button type='submit' fullWidth variant='contained' sx={{ bgcolor: "#E4A11B" }}>
              <p className='pt-0.5 font-medium hover:font-semibold'>Add Address</p>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default AddressForm
