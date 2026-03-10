import { Button } from "@mui/material"
import CategoryGrid from "../Components/CategoryGrid"
import Deal from "../Components/Deal"
import ElectricCategory from "../Components/ElectricCategory"
import ShopByCategory from "../Components/ShopByCategory"
import { Storefront } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="space-y-6 lg:space-y-10 relative pb-20">
            <ElectricCategory />
            <CategoryGrid />
            <Deal />
            <ShopByCategory />
            <section className="lg:px-25 px-3 relative h-[200px] lg:h-[370px] object-cover mt-7 lg:mt-22">
                <img className="w-full h-full rounded" src="shopping-bag-cart.jpg" alt="" />
                <div className="absolute top-1/2 left-9 lg:left-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3 text-black">
                    <h1 className="text-xl md:text-3xl">Sell Your Product</h1>
                    <p className="text-lg md:text-2xl">With <span className="logo bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent text-2xl lg:text-4xl ml-2">KARTIFY</span></p>
                    <div className="lg:pt-4 flex justify-center">
                        <Button onClick={() => navigate("/become-seller")} startIcon={<Storefront />} variant="contained" sx={{ color: "black", fontWeight: 600, backgroundColor: "#039BE5"}}>
                            <span>Become Seller</span>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
