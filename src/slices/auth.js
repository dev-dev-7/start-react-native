import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import DataService from "../services/api/auth";
import {storeData} from "../services/asyncStorage";

const initialState = [];

export const login = createAsyncThunk(
    "login",
    async (data) => {
        const res = await DataService.login(data);
        return res.data;
    }
);

export const register = createAsyncThunk(
    "register",
    async ({ data }) => {
        const res = await DataService.register({ data });
        return res.data;
    }
);

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            storeData("access_token", action.payload.access_token);
            return [action.payload];
        },
        [register.fulfilled]: (state, action) => {
            return [...action.payload];
        }
    },
});

const { reducer } = AuthSlice;
export default reducer;