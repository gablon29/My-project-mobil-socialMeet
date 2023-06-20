import { createSlice } from "@reduxjs/toolkit";

//SE INICIA OBJETO DEL REDUCER
const initialState = {
  usuarioAuth: undefined,
  authenticatedAuth: false,
  loadingAuth: false,
  errorAuth: "",
  needVerificationAuth: false,
  successAuth: "",
};

//ACÁ SE CREA EL REDUCER JUNTO CON LAS ACTIONS
const ReducerAuth = createSlice({
  name: "ReducerAuth",
  initialState,
  reducers: {
    authSetUser(state, action) {
      return {
        ...state,
        usuarioAuth: action.payload,
        authenticatedAuth: true,
      };
    },
  },
});

export const { authSetUser } = ReducerAuth.actions;

export default ReducerAuth.reducer;
