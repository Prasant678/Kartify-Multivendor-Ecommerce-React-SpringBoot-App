// import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DealCard from "./DealCard"

const Deal = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className="pb-5 lg:px-30">
            <h1 className="text-center text-lg md:text-3xl font-semibold mt-0 mb-10 md:mb-13">TODAY'S DEAL</h1>
            <div className="flex items-center justify-between">
                <Slider {...settings}>
                    
                </Slider>
                {[1, 1, 1, 1, 1, 1].map(() => <DealCard />)}
            </div>
        </div>
    )
}

export default Deal
