import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginUserMethod } from '../../utils/metodos/metodosAuth';
import { authSetError, authSetLoading, authSetUser } from '../redux/reducer/reducerAuth';
import { getAllPets, getAllUsets } from '../../utils/metodos/adminMetodos';
import { setPets, setUsuarios } from '@/redux/reducer/reducerUsuarios';

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
            success: async (res) => dispatch(setUsuarios(res),   
            ),
          })
          await getAllPets({
            loading: (v) => dispatch(authSetLoading(v)),
            error: (msg) => dispatch(authSetError(msg)),
            success: async (res) => dispatch(setPets(res),   
            ),
            
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
