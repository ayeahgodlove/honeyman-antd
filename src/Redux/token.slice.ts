import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: any = {
  errors: "",
  token: "",
  isLoading: false,
  initialFetch: true,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    fetchTokenSuccess: (
      state = initialState,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.initialFetch = false;
      state.token = action.payload;
    },
    fetchTokenError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const { fetchTokenSuccess, fetchTokenError } =
  tokenSlice.actions;

const reducer = tokenSlice.reducer;

export { reducer as tokenReducer };
