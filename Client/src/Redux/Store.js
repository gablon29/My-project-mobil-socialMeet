import { configureStore } from "@reduxjs/toolkit";
import ReducerAuth from "./ReducerAuth";
import ReducerPets from "./ReducerPets";

const store = configureStore({
  reducer: {
    ReducerAuth: ReducerAuth,
    ReducerPets: ReducerPets
  },
});

export default store;
