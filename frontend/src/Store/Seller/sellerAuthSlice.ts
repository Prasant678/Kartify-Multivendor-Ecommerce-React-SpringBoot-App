import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";

export const sellerLogin = createAsyncThunk<any, any>("/sellerAuth/sellerLogin",
    async(loginRequest, {rejectWithValue}) => {
        try {
           const response = await api.post("/seller/login", loginRequest)
           console.log("Login Success", response.data)
           const jwt = response.data.jwt;
           localStorage.setItem("jwt", jwt);
        } catch (error) {
            console.log("error - - - ", error);
        }
    }
)