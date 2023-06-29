import { createSlice } from "@reduxjs/toolkit";

//SE INICIA OBJETO DEL REDUCER
const initialState = {
  authenticatedAuth: false,
  loadingAuth: false,
  errorAuth: "",
  token: "",
  successAuth: "",
  profile: [],
  userPets: [],
};

//ACÁ SE CREA EL REDUCER JUNTO CON LAS ACTIONS
const ReducerAuth = createSlice({
  name: "ReducerAuth",
  initialState,
  reducers: {
    authSetUser(state, action) {
      return {
        ...state,
        authenticatedAuth: true,
        profile: action.payload.user,
        token: action.payload.token,
      };
    },
    userRefresh(state, action) {
      return {
        ...state,
        authenticatedAuth: true,
        profile: action.payload,
      };
    },
    addNewPets(state, action) {
      console.log("ACTION PAYOLADASDASJDA", action.payload);
      return {
        ...state,
        userPets: [...userPets, action.payload],
      };
    },
    getAllPets(state, action) {
      return {
        ...state,
        userPets: action.payload,
      };
    },
  },
});

export const { authSetUser, userRefresh, addNewPets, getAllPets } =
  ReducerAuth.actions;

export default ReducerAuth.reducer;
