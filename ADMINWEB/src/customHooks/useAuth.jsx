import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginUserMethod } from '../../utils/metodos/metodosAuth';
import { authSetError, authSetLoading, authSetUser } from '../redux/reducer/reducerAuth';
import { getAllPets, getAllTickets, getAllUsets } from '../../utils/metodos/adminMetodos';
import { setPets, setTickets, setUsuarios } from '@/redux/reducer/reducerUsuarios';
import { getAllProfessions } from '../../utils/metodos/userMetodos';
import { setProfessions } from '@/redux/reducer/reducerProfesionales';

export const useAuth = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const dispatch = useDispatch();

   const handleSubmit = async (e) => {
    e.preventDefault();
    await LoginUserMethod({
      email,
      password,
      loading: (v) => dispatch(authSetLoading(v)),
      error: (msg) => dispatch(authSetError(msg)),
      success: async (res) => {
        dispatch(authSetUser(res.payload.user));
        await getAllUsets({
          loading: (v) => dispatch(authSetLoading(v)),
          error: (msg) => dispatch(authSetError(msg)),
          success: async (res) => dispatch(setUsuarios(res)),
        });
        await getAllPets({
          loading: (v) => dispatch(authSetLoading(v)),
          error: (msg) => dispatch(authSetError(msg)),
          success: async (res) => dispatch(setPets(res)),
        });
        await getAllTickets({
          loading: (v) => dispatch(authSetLoading(v)),
          error: (msg) => dispatch(authSetError(msg)),
          success: async (res) => dispatch(setTickets(res)),
        });
        await getAllProfessions({
          loading: (v) => dispatch(authSetLoading(v)),
          error: (msg) => dispatch(authSetError(msg)),
          success: async (res) => dispatch(setProfessions(res))       
        })
      },
    });
  };

   return {
      handleSubmit,
      email,
      setEmail,
      password,
      setPassword,
   };
};
