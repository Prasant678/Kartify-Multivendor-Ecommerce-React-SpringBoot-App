// import React from 'react'

import ProfileFieldCard from "../../Components/ProfileFieldCard"

const details = [
    { name: "Name", value: "Prasant"},
    { name: "Mobile", value: "8585885855"},
    { name: "E-mail", value: "Prasant001@gmail.com"},
]

const Profile = () => {
  return (
    <div className='flex justify-center py-10'>
      <div className="w-full lg:w-[70%]">
        <div className="flex justify-center pb-5">
            <h1 className="text-xl font-bold text-gray-300">Personal Details</h1>
        </div>
        <div className='border border-[#242424] rounded-md'>
            {details.map((item) => <ProfileFieldCard keys={item.name} value={item.value}/>)}
        </div>
      </div>
    </div>
  )
}

export default Profile
