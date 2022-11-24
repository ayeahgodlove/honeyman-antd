import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { IRootState } from "Redux/store";
import { ICategory } from "Models/ICategory";
import {
  addCategorySuccess,
  editCategorySuccess,
  fetchCategoriesAsync,
  setActiveCategory,
} from "../Redux/category.slice";
import { CategoryService } from "Services/CategoryService";
const useCategory = () => {
  const categorys = useSelector<IRootState, ICategory[]>((state) => state.category.categories);
  const isLoading = useSelector<IRootState, boolean>(
    (state) => state.category.isLoading
  );
  const initialFetch = useSelector<IRootState, boolean>(
    (state) => state.category.initialFetch
  );
  const category = useSelector<IRootState, ICategory>((state) => state.category.category);

  const dispatch = useDispatch();

  const loadCategorys = useCallback(() => {
    if (initialFetch) {
      dispatch(fetchCategoriesAsync() as any);
    }
  }, [dispatch, initialFetch]);

  const addCategory = async (category: ICategory) => {
    return await CategoryService.create(category)
      .then((categoryResponse) => {
        dispatch(addCategorySuccess(categoryResponse.data));
        return true;
      })
      .catch((error) => {
        console.log(error)
        return false;
      });
  };

  const setCategory = (category: ICategory) => {
    dispatch(setActiveCategory(category));
  };

  const editCategory = async (category: ICategory) => {
    return await CategoryService.update(category)
      .then((categoryResponse) => {
        dispatch(editCategorySuccess(categoryResponse.data));
        setCategory(categoryResponse.data);
        return true;
      })
      .catch((error) => {
        console.log(error)
        return false;
      });
  };

  useEffect(() => {
    loadCategorys();
  }, [category, categorys, isLoading, initialFetch, loadCategorys]);

  return {
    category,
    categorys,
    isLoading,
    initialFetch,
    addCategory,
    editCategory,
    setCategory,
  };
};

export { useCategory };
