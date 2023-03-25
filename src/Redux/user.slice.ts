import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserService } from "services/user.service";
import { IUserState, emptyUser, IUser } from "../models/user.model";

export const initialState: IUserState = {
  users: [],
  errors: "",
  user: emptyUser,
  isLoading: false,
  initialFetch: true,
};

export const fetchUsersAsync = createAsyncThunk<IUser[], void>(
  "user/fetchUsersAsync",
  async (_, thunkApi) => {
    try {
      return await UserService.list();
    } catch (error: any) {
      return thunkApi.rejectWithValue({ error: error.data });
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchuserRequest: (state) => {
      state.isLoading = true;
    },
    fetchuserSuccess: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.initialFetch = false;
      state.users = action.payload;
    },
    fetchuserError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    editUserSuccess: (state, action: PayloadAction<IUser>) => {
      state.users = state.users.map((user) => {
        return user.id === action.payload.id ? action.payload : user;
      });
    },
    addUserSuccess: (state, action: PayloadAction<IUser>) => {
      state.users = [...state.users, action.payload];
    },
    setActiveUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.initialFetch = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsersAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const {
  fetchuserRequest,
  fetchuserSuccess,
  fetchuserError,
  editUserSuccess,
  addUserSuccess,
  setActiveUser,
} = userSlice.actions;

const reducer = userSlice.reducer;

export { reducer as userReducer };
