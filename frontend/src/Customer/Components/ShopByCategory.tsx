// import React from 'react'

import ShopByCategoryCard from "./ShopByCategoryCard"

const ShopByCategory = () => {
    return (
    <>
        <h1 className="text-center text-lg md:text-3xl font-semibold mt-10 md:mt-20 mb-6 md:mb-13">SHOP BY CATEGORY</h1>
        <div className="flex flex-wrap justify-between gap-7 px-6 lg:px-50 py-5">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => <ShopByCategoryCard />)}
        </div>
    </>
    )
}

export default ShopByCategory
