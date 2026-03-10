import { Avatar, Box, Button, IconButton, Menu, MenuItem, Modal, TextField, Typography, useMediaQuery, useTheme } from "@mui/material"
import { Favorite, FavoriteBorder, Inventory2TwoTone, Logout, Person, Search, ShoppingCart, Storefront, Close } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
import CategorySheet from "./CategorySheet";
import { mainCategory } from "../../data/mainCategory";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import { logout } from "../../Store/authSlice";

const Navbar = () => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
    const [selectedCategory, setSelectedCategory] = useState("men");
    const [showCategory, setShowCategory] = useState(false);
    const { auth } = useAppSelector(store => store);
    const dispatch = useAppDispatch();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handlelogout = () => {
        dispatch(logout(navigate));
    }
    const navigate = useNavigate();
    return (
        <div>
            <Box className="sticky top-0 left-0 right-0" sx={{ zIndex: 2 }}>
                <div className="flex items-center justify-between px-2 lg:px-16 h-[65px] border-b border-b-gray-800">
                    <div className="flex items-center gap-40">
                        <div className="flex items-center gap-2">
                            {!isLarge && <IconButton>
                                <MenuIcon sx={{ color: "#A7A7A7", fontSize: 25 }} />
                            </IconButton>}
                            <h1 onClick={() => navigate("/")} className="text-3xl md:text-[33px] bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent logo cursor-pointer font-bold ">Kartify</h1>
                        </div>
                        {isLarge && <ul className="flex items-center font-medium text-[#A7A7A7] gap-8">
                            {mainCategory.map((item, index) => <li key={index}
                                onMouseLeave={() => { setShowCategory(false) }}
                                onMouseEnter={() => {
                                    setShowCategory(true);
                                    setSelectedCategory(item.categoryId)
                                }}
                                className=" cursor-pointer hover:text-amber-300 hover:border-b-2 h-[63px] border-amber-300 flex items-center">
                                {item.name}
                            </li>)}
                        </ul>}
                    </div>

                    <div className="flex items-center lg:gap-2 gap-0.5">
                        <IconButton>
                            <Search sx={{ color: "#A7A7A7", fontSize: 27 }} />
                        </IconButton>
                        <IconButton>
                            <Favorite sx={{ color: "#e31b23", fontSize: 25 }} />
                        </IconButton>
                        <IconButton onClick={() => navigate("/cart")}>
                            <ShoppingCart sx={{ color: "#E4A11B", fontSize: 25 }} />
                        </IconButton>
                        {isLarge && <Button onClick={() => navigate("/become-seller")} startIcon={<Storefront />} variant="outlined" sx={{ color: "#A7A7A7", borderColor: "#424242", fontWeight: 600, margin: "0px 5px", "&:hover": { backgroundColor: "#00ACC1", color: "black" } }}>
                            <span className="mt-1">Become Seller</span>
                        </Button>}
                        {auth.user ? <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                className="flex items-center gap-2.5"
                            >
                                <Avatar sx={{ width: 35, height: 35 }} src="Avatar.png" />
                                <h1 className="font-semibold hidden lg:block text-gray-300">{auth.user?.fullName}</h1>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                className="mt-1.5"
                            >
                                <div className="my-[-6px]">
                                    <MenuItem onClick={handleClose}>
                                        <div onClick={() => navigate("/profile")} className="flex items-center justify-center gap-2">
                                            <Person sx={{ fontSize: 25, color: "#3B71CA" }} />
                                            <p className="text-[14px]">Profile</p>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <div onClick={() => navigate("/orders")} className="flex items-center justify-center gap-2.5">
                                            <Inventory2TwoTone sx={{ fontSize: 23, color: "#E4A11B" }} />
                                            <p className="text-[14px]">My Orders</p>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <div onClick={handlelogout} className="flex items-center justify-center gap-2.5">
                                            <Logout sx={{ fontSize: 23, color: "#DC4C64", marginLeft: 0.1 }} />
                                            <p className="text-[14px]">Logout</p>
                                        </div>
                                    </MenuItem>
                                </div>
                            </Menu>
                        </div>
                            : <IconButton onClick={() => navigate("/login")}>
                                <Person sx={{ color: ["#3B71CA"], fontSize: 30 }} />
                            </IconButton>
                        }
                    </div>
                </div>
                {showCategory && <div
                    onMouseLeave={() => { setShowCategory(false) }}
                    onMouseEnter={() => { setShowCategory(true) }}
                    className="categorySheet absolute top-[4.05rem] left-20 right-20">
                    <CategorySheet selectedCategory={selectedCategory} />
                </div>}
            </Box>
        </div>
    )
}

export default Navbar