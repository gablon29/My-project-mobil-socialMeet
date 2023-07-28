import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from './all/Sidebar';
import { useAuth } from '@/customHooks/useAuth';
import { GetUserLocalMethod } from '../../utils/metodos/metodosAuth';
import { authSetError, authSetLoading, authSetUser } from '../redux/reducer/reducerAuth';
import Login from './Login';
import { Spinner } from '@material-tailwind/react';

const Layout = ({ children }) => {
   const dispatch = useDispatch();
   const { usuarioAuth, authenticatedAuth, loadingAuth, errorAuth, successAuth } = useSelector((state) => state.reducerAuth);

   useEffect(() => {
      getUserLocal();
   }, [dispatch]);

   const getUserLocal = async () => {
      await GetUserLocalMethod({
         loading: (v) => dispatch(authSetLoading(v)),
         error: (msg) => dispatch(authSetError(msg)),
         success: (res) => {
            dispatch(authSetUser(res.payload));
         },
      });
   };

   return (
      <>
         <head>
            <title>Whopaws Admin</title>
         </head>
         {loadingAuth ? (
            <Spinner className='h-20 w-20 mx-auto my-10' />
         ) : authenticatedAuth ? (
            <main className='grid grid-cols-[256px_1fr] grid-rows-[35vh_65vh]'>
               <Sidebar />
               <div className="grid col-start-2 col-end-3 row-start-1 row-end-3 grid-rows-[35vh_65vh] h-screen overflow-y-auto bg-orange-100">
                  {children}
               </div>
            </main>
         ) : (
            <Login />
         )}
      </>
   );
};

export default Layout;
