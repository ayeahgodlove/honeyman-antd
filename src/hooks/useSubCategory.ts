import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { IRootState } from "Redux/store";
import { ISubCategory } from "Models/ICategory";
import {
  addSubCategorySuccess,
  editSubCategorySuccess,
  fetchCategoriesAsync,
  setActiveSubCategory,
} from "../Redux/sub-category.slice";
import { SubCategoryService } from "Services/SubCategoryService";
const useSubCategory = () => {
  const subCategories = useSelector<IRootState, ISubCategory[]>((state) => state.subCategory.subCategories);
  const isLoading = useSelector<IRootState, boolean>(
    (state) => state.category.isLoading
  );
  const initialFetch = useSelector<IRootState, boolean>(
    (state) => state.category.initialFetch
  );
  const subCategory = useSelector<IRootState, ISubCategory>((state) => state.subCategory.subCategory);

  const dispatch = useDispatch();

  const loadSubCategorys = useCallback(() => {
    if (initialFetch) {
      dispatch(fetchCategoriesAsync() as any);
    }
  }, [dispatch, initialFetch]);

  const addSubCategory = async (subCategory: ISubCategory) => {
    return await SubCategoryService.create(subCategory)
      .then((subCategoryResponse) => {
        dispatch(addSubCategorySuccess(subCategoryResponse.data));
        return true;
      })
      .catch((error) => {
        console.log(error)
        return false;
      });
  };

  const setSubCategory = (subCategory: ISubCategory) => {
    dispatch(setActiveSubCategory(subCategory));
  };

  const editSubCategory = async (subCategory: ISubCategory) => {
    return await SubCategoryService.update(subCategory)
      .then((subCategoryResponse) => {
        dispatch(editSubCategorySuccess(subCategoryResponse.data));
        setSubCategory(subCategoryResponse.data);
        return true;
      })
      .catch((error) => {
        console.log(error)
        return false;
      });
  };

  useEffect(() => {
    loadSubCategorys();
  }, [subCategory, subCategories, isLoading, initialFetch, loadSubCategorys]);

  return {
    subCategory,
    subCategories,
    isLoading,
    initialFetch,
    addSubCategory,
    editSubCategory,
    setSubCategory,
  };
};

export { useSubCategory };
