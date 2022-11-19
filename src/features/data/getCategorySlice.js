import { createSlice } from "@reduxjs/toolkit";
import category from "../../app/JSONCategory.json";

const initialState = category;

export const categorySlice = createSlice({
  name: "getDataFromDB",
  //initialState: initialState,
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
