import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxStore } from "../Features/indexStates";

export const useCategory = () => {
  const dispatch = useDispatch();
  const { states, sliceMethods } = reduxStore;
  const categoryData = useSelector(states.categoriesData);
  const isCategoryLoading = useSelector(states.categoryLoading);
  const isCategoryError = useSelector(states.categoryIsError);
  const categoryErrorMsg = useSelector(states.categoryErrorMsg);

  useEffect(() => {
    dispatch(sliceMethods.getAllCategories({}));
  }, []);

  return {
    categoryData,
    isCategoryLoading,
    isCategoryError,
    categoryErrorMsg,
  };
};
