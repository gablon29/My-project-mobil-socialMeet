import { createSlice } from '@reduxjs/toolkit';

//SE INICIA OBJETO DEL REDUCER
const initialState = {
  gallery: [],
  loadingPets: false,
  errorPets: '',
  successPets: '',
  userPets: [],
  userPet: undefined,
  petByPhoto: undefined,
  owner: undefined
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
    setGallery(state, action) {
      return {
        ...state,
        gallery: action.payload,
      };
    },
    setPet(state, action) {
      return {
        ...state,
        userPet: action.payload,
      };
    },
    setPetByPhoto(state, action) {
      return {
        ...state,
        petByPhoto: action.payload,
      };
    },
    setOwnerByPet(state, action) {
      return {
        ...state,
        owner: action.payload,
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

export const { addNewPets, setPetByPhoto,setOwnerByPet, setGallery, setAllPets, setPet, setLoadingPets, setErrorPets, setSuccessPets } = ReducerPets.actions;

export default ReducerPets.reducer;
