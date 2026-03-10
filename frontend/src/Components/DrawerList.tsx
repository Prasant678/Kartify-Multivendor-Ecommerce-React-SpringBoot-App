import { Divider, ListItemIcon, ListItemText } from '@mui/material'
// import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../Store/store'
import { logout } from '../Store/authSlice'

interface menuItem {
    name: string,
    path: string,
    icon: any
}

interface DrawerListProp {
    menu: menuItem[],
    menu2: menuItem[],
    toggleDrawer: () => void
}

const DrawerList = ({ menu, menu2, toggleDrawer }: DrawerListProp) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handlelogout = () => {
        dispatch(logout(navigate));
    }
    return (
        <div className='h-full'>
            <div className="flex flex-col justify-between h-full w-[290px] border-r border-[#242424] py-3">
                <div className="space-y-1.5">
                    {
                        menu.map((item, index: number) =>
                            <div onClick={() => navigate(item.path)}
                             className="pr-9 cursor-pointer" key={index}>
                                <div className={`${item.path === location.pathname ? "bg-[#3b3b3b] text-gray-300" : "text-gray-300"} flex items-center px-7 py-1 rounded-r-full`}>
                                    <ListItemIcon className='mr-[-18px]'>{item.icon}</ListItemIcon>
                                    <ListItemText><p className='text-md'>{item.name}</p></ListItemText>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="space-y-1.5">
                    {
                        menu2.map((item, index: number) =>
                            <div onClick={() => {navigate(item.path)
                            if(item.path === "/") handlelogout()}} className="pr-9 cursor-pointer" key={index}>
                                <div className={`${item.path === location.pathname ? "bg-[#242424] text-gray-300" : "text-gray-300"} flex items-center px-7 py-1 rounded-r-full`}>
                                    <ListItemIcon className='mr-[-18px]'>{item.icon}</ListItemIcon>
                                    <ListItemText><p className='text-md'>{item.name}</p></ListItemText>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default DrawerList
