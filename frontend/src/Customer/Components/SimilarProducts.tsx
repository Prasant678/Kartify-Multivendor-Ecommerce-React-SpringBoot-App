// import React from 'react'
import SimilarProductCard from "./SimilarProductCard"

const SimilarProducts = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-between gap-3 gap-y-3">
      {[1,1,1,1,1,1,1].map(()=> <SimilarProductCard />)}
    </div>
  )
}

export default SimilarProducts
