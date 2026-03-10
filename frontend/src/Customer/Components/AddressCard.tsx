import { Radio } from '@mui/material'
import React from 'react'

const AddressCard = () => {
  const handleChange = (e:any) => {
    console.log(e.target.value);
  }
  return (
    <div className='p-2.5 rounded-md border border-[#242424] flex gap-1'>
      <div>
        <Radio sx={{margin: "-5px"}} checked={true} onChange={handleChange} value={""} name='radio' size='small' color='secondary'/>
      </div>
      <div className='space-y-1.5 pt-[1px]'>
        <h1 className="text-gray-200">Prasant</h1>
        <p className='text-sm font-light text-gray-300'>Indo German Club Staff Qr. Sector-2, Rourkela, Odisha - 769006</p>
        <p className='text-sm font-light text-gray-300'><span className='font-semibold'>Mobile: </span>9858985985</p>
      </div>
    </div>
  )
}

export default AddressCard
