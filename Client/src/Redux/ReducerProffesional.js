import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authenticateProfessional: false,
    loadingProfessional: false,
    errorProfessional: "",
    successProfessional: "",
    userProfessionals: [],
    userProfessional: {},
		profession:""
};

const ReducerProfessional = createSlice({
    name: 'ReducerProfessional',
    initialState,
    reducers: {
        setProfessional(state, action) {
            return {
                ...state,
                userProfessional: action.payload,
            }
        },
        setAllProfessionals(state, action) {
            return {
                ...state,
                userProfessionals: action.payload,
            }
        },
        setLoadingProffesional(state, action) {
            return {
                ...state,
                loadingProfessional: action.payload,
            }
        },
        setErrorProfessional(state, action) {
            return {
                ...state,
                errorProfessional: action.payload
            }
        },
        setSuccessProfessional(state, action) {
            return {
                ...state,
                successProfessional: action.payload,
            }
        },
				setProfession(state,action) {
					return {
						...state,
						profession: action.payload
					}
				}
    }
});

export const {setProfessional, setAllProfessionals, setErrorProfessional, setLoadingProffesional, setSuccessProfessional, setProfession} = ReducerProfessional.actions;

export default ReducerProfessional.reducer;