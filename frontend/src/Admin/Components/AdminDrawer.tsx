// import React from 'react'
import { Add, Category, Dashboard, ElectricBolt, Home, IntegrationInstructions, LocalOffer, Logout, Person } from '@mui/icons-material'
import DrawerList from '../../Components/DrawerList'
import { amber, blue, cyan, green, indigo, red, teal } from '@mui/material/colors'

const menu = [
    {
        name: "Dashboard",
        path: "/admin",
        icon: <Dashboard fontSize="small" sx={{color: cyan[500]}}/>
    },
    {
        name: "Coupons",
        path: "/admin/coupons",
        icon: <IntegrationInstructions fontSize="small" sx={{color: amber[700]}}/>
    },
    {
        name: "Add Coupon",
        path: "/admin/add-coupon",
        icon: <Add fontSize="small" sx={{color: "#9ca3af"}}/>
    },
    {
        name: "Home Page",
        path: "/admin/home-grid",
        icon: <Home fontSize="small" sx={{color: teal[500]}}/>
    },
    {
        name: "Electronics Category",
        path: "/admin/electronics-category",
        icon: <ElectricBolt fontSize="small" sx={{color: "#e11d48"}}/>
    },
    {
        name: "Shop By Category",
        path: "/admin/shop-by-category",
        icon: <Category fontSize="small" sx={{color: green[600]}}/>
    },
    {
        name: "Deals",
        path: "/admin/deals",
        icon: <LocalOffer fontSize="small" sx={{color: "#9333ea"}}/>
    },
]

const menu2 = [
    {
        name: "Profile",
        path: "/admin/profile",
        icon: <Person fontSize="medium" sx={{color: blue[700]}}/>
    },
    {
        name: "Logout",
        path: "/",
        icon: <Logout fontSize="medium" sx={{color: red[600], marginLeft: "2px"}}/>
    }
]

const AdminDrawer = ({ toggleDrawer }: { toggleDrawer: any }) => {
  return (
    <>
      <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />
    </>
  )
}

export default AdminDrawer
