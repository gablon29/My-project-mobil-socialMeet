import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticateServices: false,
  loadingServices: false,
  errorServices: '',
  services: [],
	professionalPets:[]
};

const ReducerServices = createSlice({
  name: 'ReducerServices',
  initialState,
  reducers: {
    setServices(state, action) {
      return {
        ...state,
        services: action.payload,
      };
    },
    setProfessionalPets(state, action) {
      return {
        ...state,
        professionalPets: action.payload,
      };
    }
  },
});

export const { setServices, setProfessionalPets } = ReducerServices.actions;

export default ReducerServices.reducer;
