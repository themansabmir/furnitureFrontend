import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { ApiFeatures } from "../../Api/ApiRepo";

// ApiFeature: role, moduleName to create backend Path
const apiFeature = new ApiFeatures("admin", "category", axiosInstance);

export const createCategory = createAsyncThunk(
  "category/create",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, msg } = await apiFeature.create("create", payload);
      return { data, msg };
    } catch (error) {
      const errMessage = error.response.data.msg;
      return rejectWithValue(errMessage);
    }
  }
);

export const getAllCategories = createAsyncThunk(
  "categories/getall",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, count, msg } = await apiFeature.getAll("getall", payload);

      return { data, count, msg };
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);

// initial state of catregory store object
const initialState = {
  categoryData: [],
  isLoading: false,
  isError: false,
  count: 0,
  errorMessage: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCategory.fulfilled, (state, { payload }) => {
        state.categoryData = [payload.data, ...state.categoryData];
        state.isLoading = false;
      })
      .addCase(createCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCategory.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(getAllCategories.fulfilled, (state, { payload }) => {
        state.categoryData = payload.data;
        state.isLoading = false;
      })
      .addCase(getAllCategories.rejected, (state, { payload }) => {
        state.isError = true;
        state.errorMessage = payload;
      })
      .addCase(getAllCategories.pending, (state) => {
        state.isLoading = true;
      });
  },
}).reducer;

// exporting all states
export const categoriesData = (state) => state.categories.categoryData;
export const categoryLoading = (state) => state.categories.isLoading;
export const categoryErrorMsg = (state) => state.categories.errorMessage;
export const categoryIsError = (state) => state.categories.isError;
export const categoriesTotalCount = (state) => state.categories.count;
