import { configureStore } from "@reduxjs/toolkit";
import ReducerAuth from "./ReducerAuth";
import ReducerPets from "./ReducerPets";
import ReducerCart from "./ReducerCart";
import ReducerTickets from "./ReducerTickets";
import ReducerProfessional from "./ReducerProffesional";
import ReducerServices from "./ReducerServices";

const store = configureStore({
  reducer: {
    ReducerAuth: ReducerAuth,
    ReducerPets: ReducerPets,
    ReducerCart: ReducerCart,
    ReducerTickets: ReducerTickets,
    ReducerProfessional: ReducerProfessional,
		ReducerServices: ReducerServices
  },
});

export default store;
