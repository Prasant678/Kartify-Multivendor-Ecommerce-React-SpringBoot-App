// import React from 'react'

import { Box } from "@mui/material"
import { electronicsLevelThree } from "../../data/LevelThree/electronicLevelThree"
import { homeFurnitureLevelThree } from "../../data/LevelThree/HomeFurnitureLevelThree"
import { menLevelThree } from "../../data/LevelThree/menLevelThree"
import { womenLevelThree } from "../../data/LevelThree/womenLevelThree"
import { electronicsLevelTwo } from "../../data/LevelTwo/electronicsLevelTwo"
import { homeFurnitureLevelTwo } from "../../data/LevelTwo/homeFurnitureLevelTwo"
import { menLevelTwo } from "../../data/LevelTwo/menLevelTwo"
import { womenLevelTwo } from "../../data/LevelTwo/womenLevelTwo"
import { useNavigate } from "react-router-dom"

const categoryTwo:{[key:string]:any} = {
    men: menLevelTwo,
    women: womenLevelTwo,
    electronics: electronicsLevelTwo,
    home_furniture: homeFurnitureLevelTwo
}

const categoryThree:{[key:string]:any} = {
    men: menLevelThree,
    women: womenLevelThree,
    electronics: electronicsLevelThree,
    home_furniture: homeFurnitureLevelThree
}

const CategorySheet = ({selectedCategory, setShowSheet}:any) => {
    const childCategory = (category: any, parentCategoryId: any) => {
        return category.filter((child: any) => child.parentCategoryId == parentCategoryId);
    }
    const navigate = useNavigate();
    return (
        <Box className="bg-[#1b1b1b] shadow-lg lg:h-[400px] overflow-y-auto rounded-lg">
            <div className="flex flex-wrap text-sm">
                {
                    categoryTwo[selectedCategory]?.map((item:any,index:any) =>
                        <div key={index} className={`px-6 py-3 lg:w-[20%] ${index%2===0? "bg-[#242424]" : "bg-[#1b1b1b]"}`}>
                            <p className="text-amber-400 mb-5 font-semibold">{item.name}</p>
                            <ul className="space-y-3">
                                {childCategory(categoryThree[selectedCategory], item.categoryId).map((item: any) =>
                                    <div>
                                        <li onClick={() => navigate("/products/" + item.categoryId)} className="text-[#c2c2c2] hover:text-white cursor-pointer">
                                            {item.name}
                                        </li>
                                    </div>
                                )}
                            </ul>
                        </div>
                    )
                }
            </div>

        </Box>
    )
}

export default CategorySheet
