import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";
import type { CartItem, Cart } from "../../types/CartTypes";
import { sumCartItemMrpPrice, sumCartItemSellingPrice } from "../../Util/TotalPriceManage";
import { applyCoupon } from "./couponSlice";

export const fetchUserCart = createAsyncThunk<Cart, string>("/cart/fetchUserCart",
    async (jwt: string, { rejectWithValue }) => {
        try {
            const response = await api.get("/cart", {
                headers: {
                    Authorization: `bearer ${jwt}`
                }
            })
            console.log("cart fetched", response.data);
            return response.data;
        } catch (error: any) {
            console.log("error - - - ", error.response)
            return rejectWithValue("Failed to Fetch User Cart");
        }
    }
)

interface AddItemRequest {
    productId: number | undefined;
    size: string;
    quantity: number;
}

export const addItemToCart = createAsyncThunk<CartItem, { jwt: string | null; request: AddItemRequest }>("/cart/addItemToCart", async ({ jwt, request }, { rejectWithValue }) => {
    try {
        const response = await api.put("/cart/add", request, {
            headers: {
                Authorization: `bearer ${jwt}`
            }
        })
        console.log("Cart Added", response.data);
        return response.data;
    } catch (error: any) {
        console.log("error - - - ", error.response);
        return rejectWithValue("failed to add item");
    }
})

export const deleteCartItem = createAsyncThunk<any, {jwt: string | null, cartItemId: number}>("/cart/deleteCartItem",
    async({jwt, cartItemId}, {rejectWithValue}) => {
        try {
            const response = await api.delete(`/cart/item/${cartItemId}`, {
                headers: {
                    Authorization: `bearer ${jwt}`
                }
            })
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response.data.message || "Failed to Delete Cart Item"
            );
        }
    }
)

export const updateCartItem = createAsyncThunk<any, {jwt: string | null, cartItemId: number, cartItem: any}>("/cart/updateCartItem",
    async({jwt, cartItemId, cartItem}, {rejectWithValue}) => {
        try {
            const response = await api.put(`/cart/item/${cartItemId}`, cartItem, {
                headers: {
                    Authorization: `bearer ${jwt}`
                }
            })
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response.data.message || "Failed to Update Cart Item"
            );
        }
    }
)


interface CartState {
    cart: Cart | null;
    loading: boolean;
    error: string | null;
}

const initialState: CartState = {
    cart: null,
    loading: false,
    error: null
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        resetCartState: (state) => {
            state.cart = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchUserCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUserCart.fulfilled, (state, action: PayloadAction<Cart>) => {
            state.cart = action.payload;
            state.loading = false;
        })
        .addCase(fetchUserCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(addItemToCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(addItemToCart.fulfilled, (state, action: PayloadAction<CartItem>) => {
            if (state.cart) {
                state.cart.cartItems.push(action.payload);
            }
            state.loading = false;
        })
        .addCase(addItemToCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(deleteCartItem.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteCartItem.fulfilled, (state, action) => {
            if (state.cart) {
                state.cart.cartItems = state.cart.cartItems.filter(
                    (item: CartItem) => item.id !== action.meta.arg.cartItemId
                )
                const mrpPrice = sumCartItemMrpPrice(state.cart?.cartItems || []);
                const sellingPrice = sumCartItemSellingPrice(state.cart?.cartItems || []);
                state.cart.totalMrpPrice = mrpPrice;
                state.cart.totalSellingPrice = sellingPrice;
            }
            state.loading = false;
        })
        .addCase(deleteCartItem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(updateCartItem.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateCartItem.fulfilled, (state, action) => {
            if (state.cart) {
                const index = state.cart.cartItems.findIndex(
                    (item: CartItem) => item.id === action.meta.arg.cartItemId
                );
                if (index !== -1) {
                    state.cart.cartItems[index] = {
                        ...state.cart.cartItems[index],
                        ...action.payload
                    }
                }
                const mrpPrice = sumCartItemMrpPrice(state.cart?.cartItems || []);
                const sellingPrice = sumCartItemSellingPrice(state.cart?.cartItems || []);
                state.cart.totalMrpPrice = mrpPrice;
                state.cart.totalSellingPrice = sellingPrice;
            }
            state.loading = false;
        })
        .addCase(updateCartItem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(applyCoupon.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload;
        })
    },
})

export default cartSlice.reducer;