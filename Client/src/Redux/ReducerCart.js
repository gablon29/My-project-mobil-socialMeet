import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingCart: false,
  errorCart: '',
  successCart: '',
  cart: [],
};

const ReducerCart = createSlice({
  name: 'ReducerCart',
  initialState,
  reducers: {
    addCart(state, action) {
      return {
        ...state,
        cart: [...state.cart, action.payload],
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
    setCleanCart(state, action) {
      return {
        ...state,
        cart: [],
      };
    },
  },
});

export const {
  addCart,
  setCleanCart,
  setLoadingCart,
  setErrorCart,
  setSuccessCart,
} = ReducerCart.actions;

export default ReducerCart.reducer;
