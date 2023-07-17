import { configureStore } from "@reduxjs/toolkit";
import ReducerAuth from "./ReducerAuth";
import ReducerPets from "./ReducerPets";
import ReducerCart from "./ReducerCart";
import ReducerTickets from "./ReducerTickets";

const store = configureStore({
  reducer: {
    ReducerAuth: ReducerAuth,
    ReducerPets: ReducerPets,
    ReducerCart: ReducerCart,
    ReducerTickets: ReducerTickets,

  },
});

export default store;
