import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/data/getDataSlice";

export const store = configureStore({
  reducer: {
    getData: dataReducer,
  },
});
