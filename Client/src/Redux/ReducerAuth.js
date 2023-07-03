import { createSlice } from '@reduxjs/toolkit';

//SE INICIA OBJETO DEL REDUCER
const initialState = {
   authenticatedAuth: true,
   loadingAuth: false,
   errorAuth: '',
   token: '',
   successAuth: '',
   profile: [],
};

//ACÁ SE CREA EL REDUCER JUNTO CON LAS ACTIONS
const ReducerAuth = createSlice({
   name: 'ReducerAuth',
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
      setLoadingAuth(state, action) {
         return {
            ...state,
            loadingAuth: action.payload
         };
      },
      setErrorAuth(state, action) {
         return {
            ...state,
            errorAuth: action.payload
         };
      },
      setSuccessAuth(state, action) {
         return {
            ...state,
            successAuth: action.payload
         };
      },
   },
});

export const { authSetUser, userRefresh, setLoadingAuth, setErrorAuth, setSuccessAuth } = ReducerAuth.actions;

export default ReducerAuth.reducer;
