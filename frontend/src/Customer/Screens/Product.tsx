// import React from 'react'

import { Box, Divider, FormControl, IconButton, InputLabel, MenuItem, Pagination, Select, useMediaQuery, useTheme } from "@mui/material";
import FilterSection from "../Components/FilterSection"
import ProductCard from "../Components/ProductCard"
import { FilterAlt } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { store, useAppDispatch, useAppSelector } from "../../Store/store";
import { fetchAllProducts } from "../../Store/Customer/productSlice";
import { useParams, useSearchParams } from "react-router-dom";

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { category } = useParams();
  const { product } = useAppSelector(store => store);

  const handleSortChange = (e: any) => {
    setSort(e.target.value);
  }

  const handlePageChange = (value: number) => {
    setPage(value);
  }

  useEffect(() => {
    const [minPrice, maxPrice] = searchParams.get("price")?.split("-") || [];
    const color = searchParams.get("color");
    const minDiscount = searchParams.get("discount") ? Number(searchParams.get("discount")) : undefined;
    const pageNumber = page-1;

    const newFilter = {
      color: color || "",
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      minDiscount,
      pageNumber
    }
    dispatch(fetchAllProducts(newFilter));
  },[category, searchParams])
  return (
    <div className="-z-10 mt-10 mb-7">
      <div>
        <h1 className="lg:text-3xl text-xl md:text-2xl text-center font-bold text-gray-200 pb-2 px-9 uppercase space-x-2">Men Shirts</h1>
      </div>

      <div className="lg:flex">
        <section className="filter_section hidden lg:block w-[20%]">
          <FilterSection />
        </section>
        <div className="w-full lg:w-[78%] space-y-2 lg:space-y-5">
          <div className="flex justify-between items-center px-5 h-[70px] lg:h-[35px]">
            <div className="relative w-[70%] lg:w-[50%]">
              {
                !isLarge && (<IconButton sx={{ gap: 0.5 }}>
                  <FilterAlt sx={{ fontSize: 27, marginLeft: 1 }} />
                  <p className="text-lg">Filter</p>
                </IconButton>)
              }
              {/* {
                !isLarge && (<Box>
                  <FilterSection />
                </Box>)
              } */}
            </div>
            <FormControl size="small" sx={{ width: "150px" }}>
              <InputLabel id="demo-simple-select-label" sx={{ fontSize: 14 }}>Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Age"
                sx={{ fontSize: 12 }}
              >
                <MenuItem value={"price_low"} sx={{ fontSize: 12 }}>Price: Low - High</MenuItem>
                <MenuItem value={"price_high"} sx={{ fontSize: 12 }}>Price: High - Low</MenuItem>
                <MenuItem value={30} sx={{ fontSize: 12 }}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <section className="products_section grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 gap-4 lg:gap-3">
            {product.products.map((item) => <ProductCard item={item} />)}
          </section>
          <div className="flex justify-center py-6">
            <Pagination onChange={(e,value) => handlePageChange(value)} count={10} shape="rounded" color="secondary" showFirstButton showLastButton className="hidden lg:block"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
