import { createSlice } from "@reduxjs/toolkit";

import products from "../../app/JSONProducts.json";

const initialState = products;

export const dataSlice = createSlice({
  name: "getDataFromDB",
  //initialState: initialState,
  initialState,
  reducers: {},
});

export default dataSlice.reducer;
