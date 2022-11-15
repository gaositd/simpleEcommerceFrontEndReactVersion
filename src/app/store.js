import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "../features/data/getDataSlice";

export const store = configureStore({
  reducer: {
    getdata: dataSliceReducer,
  },
});
