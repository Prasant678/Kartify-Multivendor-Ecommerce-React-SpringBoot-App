import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";
import type { Product } from "../../types/ProductTypes";

export const fetchProductById = createAsyncThunk("product/fetchProductById",
    async(productId: number, {rejectWithValue}) => {
        try {
            const response = await api.get(`/products/${productId}`)
            const data = response.data;
            console.log("data: ", data);
            return response.data;
        } catch (error:any) {
            console.log("error - - - ", error);
            rejectWithValue(error.message);
        }
    }
)

export const searchProduct = createAsyncThunk("product/searchProduct",
    async(query, {rejectWithValue}) => {
        try {
            const response = await api.get(`/products/search`,{
                params: {
                    query
                }
            })
            const data = response.data;
            console.log("search Product data: ", data);
            return response.data;
        } catch (error:any) {
            console.log("error - - - ", error);
            rejectWithValue(error.message);
        }
    }
)

export const fetchAllProducts = createAsyncThunk<any, any>("/product/fetchAllProducts",
    async(params, {rejectWithValue}) => {
        try {
            const response = await api.get(`/products`,{
                params: {
                    ...params,
                    pageNumber: params.pageNumber || 0
                }
            })
            const data = response.data;
            console.log("get All Products data: ", data);
            return response.data;
        } catch (error:any) {
            console.log("error - - - ", error);
            rejectWithValue(error.message);
        }
    }
)

interface ProductState{
    product: Product | null;
    products: Product[];
    totalPages: number;
    loading: boolean;
    error: string | null | undefined | any;
    searchProduct: Product[];
}

const initialState: ProductState = {
    product: null,
    products: [],
    totalPages: 1,
    loading: false,
    error: null,
    searchProduct: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProductById.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchProductById.fulfilled, (state, action) => {
            state.loading = false;
            state.product = action.payload;
        })
        .addCase(fetchProductById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(fetchAllProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.content;
        })
        .addCase(fetchAllProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(searchProduct.pending, (state) => {
            state.loading = true;
        })
        .addCase(searchProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.searchProduct = action.payload;
        })
        .addCase(searchProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    },
})

export default productSlice.reducer;