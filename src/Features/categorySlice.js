import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../axios/axios";

const createCategory = createAsyncThunk(
  "category/create",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axiosInstance.post("", data).then((res) => res.data);
      return result;
    } catch (error) {
      return rejectWithValue(error.msg);
    }
  }
);

const initialState = {
  categoryData: [],
  isLoading: false,
  isError: false,
};
createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});
