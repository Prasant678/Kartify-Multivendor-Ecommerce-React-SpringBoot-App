import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";
import type { Product } from "../../types/ProductTypes";

export const fetchSellerProducts = createAsyncThunk<Product[], any>(
    "/sellerProduct/fetchSellerProducts",
    async(jwt, {rejectWithValue}) => {
        try {
            const response = await api.get("/seller/products",{
                headers: {
                    Authorization: `bearer ${jwt}`
                }
            })
            const data = await response.data;
            return data
        } catch (error) {
            console.log("error - - - ", error);
            throw error;
        }
    }
)

export const createProduct = createAsyncThunk<Product, {request:any, jwt:string | null}>(
    "/sellerProduct/createProduct",
    async(args, {rejectWithValue}) => {
        const { request, jwt } = args;
        try {
            const response = await api.post("/seller/products",request, {
                headers: {
                    Authorization: `bearer ${jwt}`
                }
            })
            console.log("product Created", response.data);
            return response.data;
        } catch (error) {
            console.log("error - - - ", error);
            // throw error;
        }
    }
)

interface sellerProductState{
    products: Product[];
    loading: boolean;
    error: string | null | undefined;
}

const initialState: sellerProductState = {
    products: [],
    loading: false,
    error: null
}

const sellerProductSlice = createSlice({
    name: "sellerProduct",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchSellerProducts.pending,(state) => {
            state.loading = true;
        })
        .addCase(fetchSellerProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
        .addCase(fetchSellerProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        builder.addCase(createProduct.pending,(state) => {
            state.loading = true;
        })
        .addCase(createProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products.push(action.payload);
        })
        .addCase(createProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    },
})

export default sellerProductSlice.reducer;