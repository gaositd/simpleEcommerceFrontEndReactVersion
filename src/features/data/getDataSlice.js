import { createSlice } from "@reduxjs/toolkit";

import products from '../../app/JSONProducts.json';
import category from '../../app/JSONCategory.json';

const initialState = products;

export const dataSlice = createSlice({
  name: "getDataFromDB",
  //initialState: initialState,
  initialState,
  reducers: {
    
  },
});

export default dataSlice.reducer;
