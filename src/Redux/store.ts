import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import { tokenReducer } from "./token.slice";
import { productReducer } from "./product.slice";
import { userReducer } from "./user.slice";
import { categoryReducer } from "./category.slice";
import { orderReducer } from "./order.slice";
import { subCategoryReducer } from "./sub-category.slice";
import { paymentReducer } from "./payment.slice";
import { themeReducer } from "./shared/theme.slice";
import { formErrorReducer } from "./shared/form-error.slice";
import { reviewReducer } from "./review.slice";

const middlewares: [any] = [thunkMiddleware];

export const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
  product: productReducer,
  order: orderReducer,
  category: categoryReducer,
  subCategory: subCategoryReducer,
  payment: paymentReducer,
  review: reviewReducer,
  theme: themeReducer,
  formError: formErrorReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(loggerMiddleware)
      .concat(middlewares),
  devTools: true, //change when deploying
});

export type IRootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, IRootState, unknown, Action<string>>;

export default store;
