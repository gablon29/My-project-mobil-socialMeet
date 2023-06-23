import { createSlice } from "@reduxjs/toolkit";

//SE INICIA OBJETO DEL REDUCER
const initialState = {
  authenticatedAuth: false,
  loadingAuth: false,
  errorAuth: "",
  token: "",
  successAuth: "",
  profile: [],
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
        token: action.payload.user,
      };
    },
    userRefresh(state, action) {
      return {
        ...state,
        authenticatedAuth: true,
        profile: action.payload,
      };
    },
  },
});

export const { authSetUser, userRefresh } = ReducerAuth.actions;

export default ReducerAuth.reducer;
