import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice"
import chatSlice from "./chatSlice"
const store=configureStore({
 reducer:{
 app:appSlice,
 search:searchSlice,
 chat:chatSlice
//  we are adding slice to the store
// now we have to dispatch an action
 }
});
export default store;