// import React from 'react'

import { Route, Routes } from "react-router-dom"
import SellerDrawer from "../Components/SellerDrawer"
import Dashboard from "./Dashboard"
import Orders from "./Orders"
import Products from "./Products"
import AddProduct from "./AddProduct"
import Payments from "./Payments"
import Transactions from "./Transactions"
import Profile from "./Profile"

const SellerDashboard = () => {
  const toggleDrawer = () => {}
  return (
    <div>
      <div className="lg:flex lg:h-[89vh]">
        <section className="hidden lg:block h-full">
            <SellerDrawer toggleDrawer={toggleDrawer} />
        </section>
        <section className="lg:p-7 p-4 w-full lg:w-[90%] overflow-y-auto">
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/products' element={<Products />} />
                <Route path='/add-product' element={<AddProduct />} />
                <Route path='/payments' element={<Payments />} />
                <Route path='/transactions' element={<Transactions />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </section>
      </div>
    </div>
  )
}

export default SellerDashboard
