// import React from 'react'

import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useFormik } from "formik"

const CreateDeal = () => {
    const formik = useFormik({
        initialValues: {
            discount: 0,
            category: ''
        },
        onSubmit: (values) => {
            console.log("submited", values);
        }
    })
    return (
        <>
            <Box component={"form"} onSubmit={formik.handleSubmit} display="flex" flexDirection="column" gap={2}>
                <Typography variant="h4" className="text-center pb-3">
                    Create Deal
                </Typography>
                <TextField fullWidth size='small' name='discount' label="Discount" value={formik.values.discount} onChange={formik.handleChange} error={formik.touched.discount && Boolean(formik.errors.discount)} helperText={formik.touched.discount && formik.errors.discount} />
                <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formik.values.category}
                        label="Category"
                        onChange={formik.handleChange}
                    >
                        <MenuItem value={10}>ten</MenuItem>
                        <MenuItem value={10}>ten</MenuItem>
                        <MenuItem value={10}>ten</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" fullWidth type="submit" sx={{ bgcolor: "#242424" }}><p className="text-gray-300 hover:font-semibold">Create Deal</p></Button>
            </Box>
        </>
    )
}

export default CreateDeal
