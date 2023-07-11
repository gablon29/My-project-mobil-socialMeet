import { createSlice } from '@reduxjs/toolkit';

//SE INICIA OBJETO DEL REDUCER
const initialState = {
  loadingPets: false,
  errorPets: '',
  successPets: '',
  userPets: [],
  userPet: undefined,
};

//ACÁ SE CREA EL REDUCER JUNTO CON LAS ACTIONS
const ReducerPets = createSlice({
  name: 'ReducerPets',
  initialState,
  reducers: {
    addNewPets(state, action) {
      return {
        ...state,
        userPets: [...userPets, action.payload],
      };
    },
    setAllPets(state, action) {
      return {
        ...state,
        userPets: action.payload,
      };
    },
    setPet(state, action) {
      return {
        ...state,
        userPet: action.payload,
      };
    },
    setLoadingPets(state, action) {
      return {
        ...state,
        loadingPets: action.payload,
      };
    },
    setErrorPets(state, action) {
      return {
        ...state,
        errorPets: action.payload,
      };
    },
    setSuccessPets(state, action) {
      return {
        ...state,
        successPets: action.payload,
      };
    },
  },
});

export const { addNewPets, setAllPets, setPet, setLoadingPets, setErrorPets, setSuccessPets } = ReducerPets.actions;

export default ReducerPets.reducer;
