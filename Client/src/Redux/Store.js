import { configureStore } from "@reduxjs/toolkit";
import ReducerAuth from "./ReducerAuth";

const store = configureStore({
  reducer: {
    ReducerAuth: ReducerAuth,
  },
});

export default store;
