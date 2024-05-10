import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../Features/Slices/categorySlice";
import { useCategory } from "../../Hooks/use-category";
import { useState } from "react";
import { reduxStore } from "../../Features/indexStates";
const { sliceMethods} = reduxStore
const Category = () => {
  /* #####################################
                  HOOKS
   ##################################### */
  const dispatch = useDispatch()
  const { categoryData, isCategoryLoading } = useCategory();
  const [payload, setPayload] = useState({categoryTitle:""})


  /* #####################################
              API CALL METHODS
   ##################################### */
  const create = () => {
    dispatch(sliceMethods.createCategory(payload))
  }

  const update = () => {
    dispatch(sliceMethods)
  }

  const deleteCategory =() => {
    dispatch(sliceMethods)
  }


  if (isCategoryLoading) return "Loading ...";
  return (
    <div>
      Category
      {categoryData.map((category, index) => {
        return <h1 key={index}>Mansab</h1>;
      })}
    </div>
  );
};

export default Category;
