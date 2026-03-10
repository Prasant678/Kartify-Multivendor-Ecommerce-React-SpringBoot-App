import { Divider } from '@mui/material'
import React from 'react'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import UserDetails from '../Components/UserDetails'

const menu = [
    { name: "Profile", path: "/profile" },
    { name: "Saved Cards", path: "/profile/saved-card" },
    { name: "Addresses", path: "/profile/addresses" },
]
const Profile = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (item: any) => navigate(item.path);
    return (
        <div className='pt-10 px-5 lg:px-60 min-h-screen'>
            <div className='flex justify-center'>
                <h1 className="text-3xl font-bold pb-5 text-gray-200">PROFILE</h1>
            </div>
            <div>
                <h1 className="text-xl font-bold pb-5">PRASANT</h1>
            </div>
            <Divider />
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]'>
                <section className="col-span-1 lg:border-r lg:border-[#242424] py-5 h-full space-y-4">
                    {
                        menu.map((item) => (
                            <div onClick={() => handleClick(item)} className={`py-3 px-4 cursor-pointer font-medium text-gray-300 hover:bg-[#242424] border border-[#242424] rounded-md lg:rounded-r-none ${item.path === location.pathname ? "bg-[#242424]" : ""}`}>
                                <p>{item.name}</p>
                            </div>
                        ))
                    }
                </section>
                <section className="lg:col-span-2 lg:pl-5 py-5">
                    <Routes>
                        <Route path='/' element={<UserDetails />} />
                        <Route path="/addresses" element={<div className="space-y-2">
                        {[1, 1, 1, 1].map(() => (<div className='p-2.5 rounded-md border border-[#242424] flex gap-1'>
                            <div className='space-y-1.5 pt-[1px]'>
                                <h1 className="text-gray-200">Prasant</h1>
                                <p className='text-sm font-light text-gray-300'>Indo German Club Staff Qr. Sector-2, Rourkela, Odisha - 769006</p>
                                <p className='text-sm font-light text-gray-300'><span className='font-semibold'>Mobile: </span>9858985985</p>
                            </div>
                        </div>))}
                    </div>} />
                    </Routes>
                </section>
            </div>
        </div>
    )
}

export default Profile
