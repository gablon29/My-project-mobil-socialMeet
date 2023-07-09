import { createSlice } from '@reduxjs/toolkit';

//SE INICIA OBJETO DEL REDUCER
const initialState = {
   authenticatedAuth: false,
   loadingAuth: false,
   errorAuth: '',
   token: '',
   successAuth: '',
   profile: undefined,
   registro: false, // ESTA SOLO AVISA SI SE REGISTRO
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
      signOffAuth(state, action) {
         return {
            ...state,
            profile: undefined,
            authenticatedAuth: false,
            token: '',
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
      setRegistroAuth(state, action) {
         return {
            ...state,
            registro: action.payload
         };
      },
   },
});

export const { authSetUser, signOffAuth, userRefresh, setLoadingAuth, setErrorAuth, setSuccessAuth, setRegistroAuth } = ReducerAuth.actions;

export default ReducerAuth.reducer;
