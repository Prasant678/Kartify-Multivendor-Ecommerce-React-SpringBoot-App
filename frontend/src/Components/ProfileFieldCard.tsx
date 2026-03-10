import { Divider } from '@mui/material'
// import React from 'react'

const ProfileFieldCard = ({ keys, value }: { keys: string, value: string }) => {
    return (
        <>
            <div className='py-4 px-6 flex items-center bg-[#242424]'>
                <p className='w-20 lg:w-36 pr-5 text-sm'>{keys}</p>
                <Divider flexItem orientation='vertical' />
                <p className='pl-5 lg:pl-10 font-semibold lg:text-sm text-gray-300'>{value}</p>
            </div>
        </>
    )
}

export default ProfileFieldCard
