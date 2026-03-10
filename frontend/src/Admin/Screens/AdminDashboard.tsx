// import React from 'react'

import { Route, Routes } from "react-router-dom"
import AdminDrawer from "../Components/AdminDrawer"
import SellersTable from "./SellersTable"
import Coupons from "./Coupons"
import AddNewCoupon from "./AddNewCoupon"
import GridTable from "./GridTable"
import ElectronicTable from "./ElectronicTable"
import ShopByCategoryTable from "./ShopByCategoryTable"
import Deal from "./Deal"
import Profile from "./Profile"

const AdminDashboard = () => {
    const toggleDrawer = () => {

    }
  return (
    <div>
      <div className="lg:flex lg:h-[89vh]">
        <section className="hidden lg:block h-full">
            <AdminDrawer toggleDrawer={toggleDrawer} />
        </section>
        <section className="lg:p-7 p-4 w-full lg:w-[90%] overflow-y-auto">
            <Routes>
                <Route path='/' element={<SellersTable />} />
                <Route path='/coupons' element={<Coupons />} />
                <Route path='/add-coupon' element={<AddNewCoupon />} />
                <Route path='/home-grid' element={<GridTable />} />
                <Route path='/electronics-category' element={<ElectronicTable />} />
                <Route path='/shop-by-category' element={<ShopByCategoryTable />} />
                <Route path='/deals' element={<Deal />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </section>
      </div>
    </div>
  )
}

export default AdminDashboard
