import { configureStore } from "@reduxjs/toolkit";
import ReducerAuth from "./ReducerAuth";
import ReducerPets from "./ReducerPets";
import ReducerCart from "./ReducerCart";

const store = configureStore({
  reducer: {
    ReducerAuth: ReducerAuth,
    ReducerPets: ReducerPets,
    ReducerCart: ReducerCart

  },
});

export default store;
