import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  id:"0",
  name:"Daniela Iveth Meraz Silva",
  job:"Programing Teacher",
  is:"Wife",
  age:"42",
},
{
  id:"1",
  name:"Ayde Cristina Gamez Meraz",
  job:"Little student",
  is:"big daughter",
  age:"5",
},
{
  id:"2",
  name:"Diego Gamaliel Gamez Meraz",
  job:"Little student",
  is:"big daughter",
  age:"5",
},
{
  id:"3",
  name:"Alvaro Gamez Chavez",
  job:"Father",
  is:"husband",
  age:"45",
},
{
  id:"4",
  name:"Mauricio Gamez Chavez",
  job:"Uncle",
  is:"Brother",
  age:"42",
}];

export const dataSlice = createSlice({
  name: "getDataFromDB",
  //initialState: initialState,
  initialState,
  reducers: {
    
  },
});

export default dataSlice.reducer;
