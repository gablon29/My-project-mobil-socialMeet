import { createSlice } from "@reduxjs/toolkit";

//SE INICIA OBJETO DEL REDUCER
const initialState = {
  usuarioAuth: undefined,
  authenticatedAuth: false,
  loadingAuth: false,
  errorAuth: "",
  needVerificationAuth: false,
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
        usuarioAuth: action.payload,
        authenticatedAuth: true,
        profile: action.payload
      };
    },
  },
});

export const { authSetUser } = ReducerAuth.actions;

export default ReducerAuth.reducer;
