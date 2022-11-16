import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "getDataFromDB",
  initialState: [1, 2],
  reducers: {},
});

export default dataSlice.reducer;
