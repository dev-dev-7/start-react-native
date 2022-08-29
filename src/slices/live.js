import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import DataService from "../services/api/goLive";
import { uploadFile } from "../services/api/fileUpload";

const initialState = [];

export const live = createAsyncThunk("live", async (data) => {
    data.files = await uploadFile(data.files);
    const res = await DataService.live(data);
    return res.data;
});

const LiveSlice = createSlice({
    name: "live", initialState, extraReducers: {
        [live.fulfilled]: (state, action) => {
            storeData("access_token", action.payload.access_token);
            return [action.payload];
        }
    }
});

const { reducer } = LiveSlice;

export default reducer;