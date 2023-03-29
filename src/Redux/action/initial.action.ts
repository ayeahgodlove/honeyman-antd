import { fetchCategoriesAsync } from "redux/category.slice";
import { fetchOrdersAsync } from "redux/order.slice";
import { fetchProductsAsync } from "redux/product.slice";
import { AppThunk } from "redux/store";
import { fetchSubCategoriesAsync } from "redux/sub-category.slice";
import { fetchUsersAsync } from "redux/user.slice";

export const initialDataAsync = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchCategoriesAsync());
    dispatch(fetchSubCategoriesAsync());
    dispatch(fetchUsersAsync());
    dispatch(fetchProductsAsync());
    dispatch(fetchOrdersAsync());
  } catch (error) {
    console.log(error);
  }
};
