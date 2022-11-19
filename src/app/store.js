import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/data/getDataSlice";
import categoryReducer from "../features/data/getCategorySlice";

export const store = configureStore({
  reducer: {
    getData: dataReducer,
    getCategory: categoryReducer,
  },
});
