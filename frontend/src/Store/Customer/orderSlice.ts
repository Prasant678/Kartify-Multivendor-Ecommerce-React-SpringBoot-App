import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Order, OrderItem, OrderState } from "../../types/OrderTypes";
import { api } from "../../Config/Api";
import type { Address } from "../../types/UserTypes";
import axios from "axios";

export const fetchUserOrderHistory = createAsyncThunk<Order[], string>("/order/fetchUserOrderHistory",
    async (jwt, { rejectWithValue }) => {
        try {
            const response = await api.get("/orders/user", {
                headers: {
                    Authorization: `bearer ${jwt}`
                }
            })
            console.log("fetch user order History", response.data);
            return response.data;
        } catch (error: any) {
            console.log("error --- ", error);
            return rejectWithValue(
                error.response.data.error || "failed to fetch order History"
            )
        }
    }
)

export const fetchOrderById = createAsyncThunk<Order, { orderId: number, jwt: string }>("/order/fetchOrderById",
    async ({ jwt, orderId }, { rejectWithValue }) => {
        try {
            const response = await api.get(`/orders/${orderId}`, {
                headers: {
                    Authorization: `bearer ${jwt}`
                }
            })
            console.log("fetch Order", response.data);
            return response.data;
        } catch (error: any) {
            console.log("error - ", error.response);
            return rejectWithValue("Failed to fetch Order");
        }
    }
)

export const createOrder = createAsyncThunk<any, { address: Address, jwt: string, paymentGateway: string }>("/order/createOrder", async ({ address, jwt, paymentGateway }, { rejectWithValue }) => {
    try {
        const response = await api.post("/orders", address, {
            headers: { Authorization: `bearer ${jwt}` },
            params: { paymentMethod: paymentGateway }
        })
        console.log("Order created", response.data);
        if (response.data.payment_link_url) {
            window.location.href = response.data.payment_link_url
        }
        return response.data;
    } catch (error: any) {
        console.log("error - ", error.response);
        return rejectWithValue("Failed to Create Order");
    }
})

export const fetchOrderItemById = createAsyncThunk<OrderItem, { orderItemId: number, jwt: string }>("/order/fetchOrderItemById",
    async ({ jwt, orderItemId }, { rejectWithValue }) => {
        try {
            const response = await api.get(`/orders/item/${orderItemId}`, {
                headers: {
                    Authorization: `bearer ${jwt}`
                }
            })
            console.log("fetch Order Item", response.data);
            return response.data;
        } catch (error: any) {
            console.log("error - ", error.response);
            return rejectWithValue("Failed to fetch Order Item");
        }
    }
)

export const paymentSuccess = createAsyncThunk<any, { paymentId: string, jwt: string, paymentLinkId: string }, { rejectValue: string }>("/order/paymentSuccess",
    async ({ paymentId, jwt, paymentLinkId }, { rejectWithValue }) => {
        try {
            const response = await api.get(`/payment/${paymentId}`, {
                headers: { Authorization: `bearer ${jwt}` },
                params: { paymentLinkId }
            })
            console.log("Payment Success", response.data);
            return response.data
        } catch (error: any) {
            console.log("error - ", error.response);
            if (error.response) {
                return rejectWithValue(error.response.data.message);
            }
            return rejectWithValue("Failed to Payment success");
        }
    }
)

export const cancelOrder = createAsyncThunk<Order, any>("/order/cancelOrder",
    async (orderId, { rejectWithValue }) => {
        try {
            const response = await api.put(`/orders/${orderId}/cancel`, {
                headers: {
                    Authorization: `bearer ${localStorage.getItem("jwt")}`
                }
            });
            console.log("Cancel Order", response.data);
            return response.data;
        } catch (error: any) {
            console.log("error - ", error.response);
            if (error.response) {
                return rejectWithValue(error.response.data.error)
            }
            return rejectWithValue("An Error Occurred while Cancelling a Order");
        }
    }
)

const initialState: OrderState = {
    orders: [],
    orderItem: null,
    currentOrder: null,
    paymentOrder: null,
    loading: false,
    error: null,
    orderCanceled: false
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUserOrderHistory.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.orderCanceled = false;
        })
        .addCase(fetchUserOrderHistory.fulfilled, (state, action: PayloadAction<Order[]>) => {
            state.orders = action.payload;
            state.loading = false;
        })
        .addCase(fetchUserOrderHistory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(fetchOrderById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchOrderById.fulfilled, (state, action: PayloadAction<Order>) => {
            state.currentOrder = action.payload;
            state.loading = false;
        })
        .addCase(fetchOrderById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(createOrder.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createOrder.fulfilled, (state, action: PayloadAction<any>) => {
            state.paymentOrder = action.payload;
            state.loading = false;
        })
        .addCase(createOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(fetchOrderItemById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchOrderItemById.fulfilled, (state, action) => {
            state.orderItem = action.payload;
            state.loading = false;
        })
        .addCase(fetchOrderItemById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(paymentSuccess.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(paymentSuccess.fulfilled, (state, action) => {
            console.log("Payment Success: ", action.payload);
            state.loading = false;
        })
        .addCase(paymentSuccess.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(cancelOrder.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.orderCanceled = false;
        })
        .addCase(cancelOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.orders = state.orders.map((order) => 
                order.id === action.payload.id ? action.payload : order
            );
            state.orderCanceled = true;
            state.currentOrder = action.payload;
        })
        .addCase(cancelOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    },
})

export default orderSlice.reducer;