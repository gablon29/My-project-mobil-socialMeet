import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticatedTiket: false,
    loadingTickets: false,
    errorTickets: '',
    successTickets: '',
    userTickets: [],
    userTicket: undefined,
  };


export const ReducerTickets = createSlice({
	name: 'ReducerTickets',
    initialState,
    reducers: {
        addNewTicket(state, action) {
          return {
            ...state,
            userTickets: [...state.userTickets, action.payload]
          }
        },
        setAllTickets(state, action) {
            return {
                ...state,
                userTickets: action.payload
            }
        },
          setLoadingTickets(state, action) {
            return {
              ...state,
              loadingTickets: action.payload,
            };
          },
          setErrorTickets(state, action) {
            return {
              ...state,
              errorTickets: action.payload,
            };
          },
          ticketsRefresh(state, action) {
            return {
               ...state,
               authenticatedTiket: true,
               userTickets: action.payload
               
            };
         },
    }
})

export const { addNewTicket, setAllTickets, setLoadingTickets, setErrorTickets, ticketsRefresh } = ReducerTickets.actions;

export default ReducerTickets.reducer;