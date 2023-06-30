import { createSlice } from '@reduxjs/toolkit';

//SE INICIA OBJETO DEL REDUCER
const initialState = {
   loadingPets: false,
   errorPets: '',
   successPets: '',
   userPets: [],
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
      getAllPets(state, action) {
         return {
            ...state,
            userPets: action.payload,
         };
      },
   },
});

export const { addNewPets, getAllPets } = ReducerAuth.actions;

export default ReducerPets.reducer;
