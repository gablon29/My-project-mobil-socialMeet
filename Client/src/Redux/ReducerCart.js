import { createSlice } from '@reduxjs/toolkit';

//SE INICIA OBJETO DEL REDUCER
const initialState = {
   loadingCart: false,
   errorCart: '',
   successCart: '',
   cart: [],
};

//ACÁ SE CREA EL REDUCER JUNTO CON LAS ACTIONS
const ReducerCart = createSlice({
   name: 'ReducerCart',
   initialState,
   reducers: {
      addCart(state, action) {
         return {
            ...state,
            cart: [...cart, action.payload],
         };
      },

      setLoadingCart(state, action) {
         return {
            ...state,
            loadingCart: action.payload,
         };
      },
      setErrorCart(state, action) {
         return {
            ...state,
            errorCart: action.payload,
         };
      },
      setSuccessCart(state, action) {
         return {
            ...state,
            successCart: action.payload,
         };
      },
   },
});

export const { addCart, setLoadingCart, setErrorCart, setSuccessCart } = ReducerCart.actions;

export default ReducerCart.reducer;
