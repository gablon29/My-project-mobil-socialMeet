import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   usuarios: undefined,
   mascotas: undefined,
   tickets: undefined
};

const reducerUsuarios = createSlice({
   name: 'reducerUsuarios',
   initialState,
   reducers: {
      setUsuarios(state, action) {
         return {
            ...state,
            usuarios: action.payload,
         };
      },
      setPets(state, action) {
         return {
            ...state,
            mascotas: action.payload,
         };
      },
      setTickets(state, action) {
         return {
            ...state,
            tickets: action.payload,
         };
      },
   },
});

//ACA SE EXPORTAN LAS ACTIONS QUE SE CREAN AUTOMATICAMENTE MAS ARRIVA
export const { setUsuarios, setPets, setTickets } = reducerUsuarios.actions;

//ACA SE EXPORTAN O EXPORTA EL REDUCER
export default reducerUsuarios.reducer;