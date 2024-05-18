import { useState } from "react";
import { useDispatch } from "react-redux";
import { reduxStore } from "../../Features/indexStates";
import { useCategory } from "../../Hooks/use-category";
const { sliceMethods } = reduxStore;
      import Spline from '@splinetool/react-spline';


export const Category = (props) => {
  console.log(props)
  // console.log(userModules);
  /* #####################################
                  HOOKS
   ##################################### */
  const dispatch = useDispatch();
  const { categoryData, isCategoryLoading } = useCategory();
  const [payload, setPayload] = useState({
    categoryTitle: "",

    categoryDescription: "",
    count: "",
  });

  /* #####################################
              API CALL METHODS
   ##################################### */
  // const create = () => {
  //   dispatch(sliceMethods.createCategory(payload));
  // };

  // const update = () => {
  //   dispatch(sliceMethods);
  // };

  // const deleteCategory = () => {
  //   dispatch(sliceMethods);
  // };

  return (
    <>

    </>
  );
};

