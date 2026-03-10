// import React from 'react'

import { AccountBalanceWallet, Add, Dashboard, Inventory, Logout, Person, Receipt, ShoppingBag } from "@mui/icons-material"
import DrawerList from "../../Components/DrawerList"
import { amber, blue, cyan, green, indigo, orange, red } from "@mui/material/colors"

const menu = [
    {
        name: "Dashboard",
        path: "/seller",
        icon: <Dashboard fontSize="small" sx={{color: cyan[500]}}/>
    },
    {
        name: "Orders",
        path: "/seller/orders",
        icon: <ShoppingBag fontSize="small" sx={{color: amber[700]}}/>
    },
    {
        name: "Products",
        path: "/seller/products",
        icon: <Inventory fontSize="small" sx={{ color: indigo[400]}}/>
    },
    {
        name: "Add Product",
        path: "/seller/add-product",
        icon: <Add fontSize="small" sx={{color: "#9ca3af"}}/>
    },
    {
        name: "Payments",
        path: "/seller/payments",
        icon: <AccountBalanceWallet fontSize="small" sx={{color: green[600]}}/>
    },
    {
        name: "transactions",
        path: "/seller/transactions",
        icon: <Receipt fontSize="small" sx={{color: "#e11d48"}}/>
    }
]

const menu2 = [
    {
        name: "Profile",
        path: "/seller/profile",
        icon: <Person fontSize="medium" sx={{color: blue[700]}}/>
    },
    {
        name: "Logout",
        path: "/",
        icon: <Logout fontSize="medium" sx={{color: red[600], marginLeft: "2px"}}/>
    }
]

const SellerDrawer = ({ toggleDrawer }: { toggleDrawer: any }) => {
    return (
        <>
            <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />
        </>
    )
}

export default SellerDrawer
