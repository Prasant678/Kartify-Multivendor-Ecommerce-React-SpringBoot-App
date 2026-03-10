// import React from 'react'

import { Edit } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import ProfileFieldCard from "../../Components/ProfileFieldCard"
import { useAppDispatch, useAppSelector } from "../../Store/store"
import { useEffect } from "react"
import { fetchSellerProfile } from "../../Store/Seller/sellerSlice"

// const userDetails = [
//   { name: "Name", value: },
//   { name: "Mobile", value: "8585885855" },
//   { name: "E-mail", value: "Prasant001@gmail.com" },
// ]

// const BusinessDetails = [
//   { name: "Business Name/Brand Name", value: "Prasant Clothing" },
//   { name: "GSTIN", value: "GSTIN2424242" },
//   { name: "Account Status", value: "PENDING" },
// ]

// const pickUpAddress = [
//   { name: "Address", value: "Indo German Club Staff Quarters" },
//   { name: "City", value: "Rourkela" },
//   { name: "State", value: "ODISHA" },
//   { name: "Mobile", value: "41414141414" }
// ]

// const bankDetails = [
//   { name: "Account Holder Name", value: "Prasant Rao" },
//   { name: "Account Number", value: "325252525521" },
//   { name: "IFSC Code", value: "SBIN0014141" },
// ]

const Profile = () => {
  const { profile } = useAppSelector(store => store.seller);

  const userDetails = [
    { name: "Name", value: profile?.sellerName },
    { name: "Mobile", value: profile?.mobile },
    { name: "E-mail", value: profile?.email },
  ];

  const businessDetails = [
    { name: "Business Name/Brand Name", value: profile?.businessDetails?.businessName },
    { name: "GSTIN", value: profile?.GSTIN },
    { name: "Account Status", value: profile?.accountStatus},
  ];

  const pickUpAddress = [
    { name: "Address", value: profile?.pickupAddress?.address },
    { name: "City", value: profile?.pickupAddress?.city },
    { name: "State", value: profile?.pickupAddress?.state },
    { name: "Mobile", value: profile?.pickupAddress?.mobile }
  ];

  const bankDetails = [
    { name: "Account Holder Name", value: profile?.bankDetails?.accountHolderName },
    { name: "Account Number", value: profile?.bankDetails?.accountNumber },
    { name: "IFSC Code", value: profile?.bankDetails?.ifscCode },
  ];
  return (
    <div className="lg:pl-10 lg:w-[700px]">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-300">Personal Details</h1>
        <div className="bg-[#242424] rounded-full border border-[#242424]">
          <IconButton>
            <Edit sx={{ fontSize: 17 }} />
          </IconButton>
        </div>
      </div>
      <img className="rounded-full h-20 w-20 mt-2 lg:ml-3" src={"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/l/7/g/s-31819278-glitchez-original-imahbzp9tyw6mhhe.jpeg?q=70"} alt="" />
      <div className='border border-[#242424] rounded-md mt-4 lg:ml-4'>
        {userDetails.map((item) => <ProfileFieldCard keys={item.name} value={item.value} />)}
      </div>
      <div className="flex justify-between items-center mt-8">
        <h1 className="text-xl font-semibold text-gray-300">Business Details</h1>
        <div className="bg-[#242424] rounded-full border border-[#242424]">
          <IconButton>
            <Edit sx={{ fontSize: 17 }} />
          </IconButton>
        </div>
      </div>
      <div className='border border-[#242424] rounded-md mt-4 lg:ml-4'>
        {businessDetails.map((item) => <ProfileFieldCard keys={item.name} value={item.value} />)}
      </div>
      <div className="flex justify-between items-center mt-8">
        <h1 className="text-xl font-semibold text-gray-300">Pickup Address</h1>
        <div className="bg-[#242424] rounded-full border border-[#242424]">
          <IconButton>
            <Edit sx={{ fontSize: 17 }} />
          </IconButton>
        </div>
      </div>
      <div className='border border-[#242424] rounded-md mt-4 lg:ml-4'>
        {pickUpAddress.map((item) => <ProfileFieldCard keys={item.name} value={item.value} />)}
      </div>
      <div className="flex justify-between items-center mt-8">
        <h1 className="text-xl font-semibold text-gray-300">Bank Details</h1>
        <div className="bg-[#242424] rounded-full border border-[#242424]">
          <IconButton>
            <Edit sx={{ fontSize: 17 }} />
          </IconButton>
        </div>
      </div>
      <div className='border border-[#242424] rounded-md mt-4 lg:ml-4'>
        {bankDetails.map((item) => <ProfileFieldCard keys={item.name} value={item.value} />)}
      </div>
    </div>
  )
}

export default Profile
