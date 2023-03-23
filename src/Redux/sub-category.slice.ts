import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubCategoryService } from "services/sub-category.service";
import { ISubCategoryState, emptySubCategory, ISubCategory } from "../models/ICategory";

export const initialState: ISubCategoryState = {
  subCategories: [],
  errors: "",
  subCategory: emptySubCategory,
  isLoading: false,
  initialFetch: true,
};

export const fetchCategoriesAsync = createAsyncThunk<ISubCategory[], void>(
  "subCategory/fetchCategoriesAsync",
  async (_, thunkApi) => {
    try {
      return await SubCategoryService.list();
    } catch (error: any) {
      return thunkApi.rejectWithValue({ error: error.data });
    }
  }
);

export const subCategorySlice = createSlice({
  name: "subCategory",
  initialState,
  reducers: {
    fetchsubCategoryRequest: (state) => {
      state.isLoading = true;
    },
    fetchsubCategorySuccess: (state, action: PayloadAction<ISubCategory[]>) => {
      state.isLoading = false;
      state.initialFetch = false;
      state.subCategories = action.payload;
    },
    fetchsubCategoryError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    editSubCategorySuccess: (state, action: PayloadAction<ISubCategory>) => {
      state.subCategories = state.subCategories.map((subCategory) => {
        return subCategory.id === action.payload.id ? action.payload : subCategory;
      });
    },
    addSubCategorySuccess: (state, action: PayloadAction<ISubCategory>) => {
      state.subCategories = [...state.subCategories, action.payload];
    },
    setActiveSubCategory: (state, action: PayloadAction<ISubCategory>) => {
      state.subCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.initialFetch = false;
      state.subCategories = action.payload;
    });
    builder.addCase(fetchCategoriesAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const {
  fetchsubCategoryRequest,
  fetchsubCategorySuccess,
  fetchsubCategoryError,
  editSubCategorySuccess,
  addSubCategorySuccess,
  setActiveSubCategory,
} = subCategorySlice.actions;

const reducer = subCategorySlice.reducer;

export { reducer as subCategoryReducer };
