import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";
import cartReducer from "./ui/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;

//⚠️ NOW PROVIDE THE GLOBAL STATE TO THE ENTIRE APP TREE.
//⚠️ SO GO TO main.jsx
