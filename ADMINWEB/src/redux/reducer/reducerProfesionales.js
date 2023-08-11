import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    professions: [],
    cuidador: [],
    educador: [],
    veterinario: [],
    tienda: [],
    paseador: [],
    peluquero: [],
}

const reducerProfesionales = createSlice({
    name: 'reducerProfesionales',
    initialState,
    reducer: {
        setProfessions(state, action){
            return {
                ...state,
                professions: action.payload
            }
        },
        setEducador(state, action){
            return {
                ...state,
                educador: action.payload
            }
        },
        setCuidador(state, action){
            return {
                ...state,
                cuidador: action.payload
            }
        },
        setVeterinario(state, action){
            return {
                ...state,
                veterinario: action.payload
            }
        },
        setTienda(state, action){
            return {
                ...state,
                tienda: action.payload
            }
        },
        setPaseador(state, action){
            return {
                ...state,
                paseador: action.payload
            }
        },
        setPeluquero(state, action){
            return {
                ...state,
                peluquero: action.payload
            }
        }

    }
})

//ACA SE EXPORTAN LAS ACTIONS QUE SE CREAN AUTOMATICAMENTE MAS ARRIVA
export const { setProfessions, setPeluquero, setPaseador, setTienda, setVeterinario, setCuidador, setEducador } = reducerProfesionales.actions;

//ACA SE EXPORTAN O EXPORTA EL REDUCER
export default reducerProfesionales.reducer;