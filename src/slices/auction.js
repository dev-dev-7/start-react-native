import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import DataService from "../services/api/auction";
import { uploadFile } from "../services/api/fileUpload";

const initialState = [];

export const createAuction = createAsyncThunk("createAuction", async (data) => {
    if(data?.files?.length){
        data.files = await uploadFile(data.files);
    }
    const res = await DataService.createAuction(data);
    return res.data;
});

const AuctionSlice = createSlice({
    name: "createAuction", 
    initialState, 
    extraReducers: {
        [createAuction.fulfilled]: (state, action) => {
            return [action.payload];
        }
    }
});

const { reducer } = AuctionSlice;

export default reducer;