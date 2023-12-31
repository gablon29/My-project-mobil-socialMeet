import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { LogoutUserMethod } from '../../../utils/metodos/metodosAuth';
import { useDispatch, useSelector } from 'react-redux';
import { authSetError, authSetLoading, authSignOut } from '@/redux/reducer/reducerAuth';
import { useRouter } from 'next/router';

export const Sidebar = () => {
   const dispatch = useDispatch();
   const router = useRouter();
   const { usuarioAuth, authenticatedAuth, loadingAuth, errorAuth, successAuth } = useSelector((state) => state.reducerAuth);
   const [activeView, setActiveView] = useState(router.pathname)

   const cerrarSesion = () => {
      LogoutUserMethod({
         loading: (v) => dispatch(authSetLoading(v)),
         error: (msg) => dispatch(authSetError(msg)),
         success: (res) => {
            dispatch(authSignOut());
         },
      })
   }

   useEffect(()=>{
      setActiveView(router.pathname)
   }, [])

   const activeOption = (set) => {
      setActiveView(set)
   }
   
   return (
      <aside className='grid col-start-1 row-start-1 row-end-2'>
        <div className='flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-black border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 z-50'>
        <Link href='/'>
            <img src='https://i.ibb.co/gSZCMVw/Logo-transparente-3.png' alt='Logo' width='100' height='40' />
         </Link>

         <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav className='-mx-3 space-y-6 '>
               <div className='space-y-3 '>
                  <Link onClick={()=>activeOption('/')} href='/' className={`${activeView === '/' ? "bg-gray-100 text-gray-700" : "text-white"} flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}>
                     <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605' />
                     </svg>
                     <span className='mx-2 text-sm font-medium'>Inicio</span>
                  </Link>
                  <Link onClick={()=>activeOption('/usuarios')} href='/usuarios' className={`${activeView == '/usuarios' ?  "bg-gray-100 text-gray-700" : "text-white"} flex items-center px-3 py-2  transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}>
                     <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6' />
                     </svg>

                     <span className='mx-2 text-sm font-medium'>usuarios</span>
                  </Link>
               </div>

               <div className='space-y-3 '>

                  <Link onClick={()=>activeOption('/mascotas')} href='/mascotas' className={`${activeView == '/mascotas' ?  "bg-gray-100 text-gray-700" : "text-white"} flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}>
                     <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' />
                     </svg>

                     <span className='mx-2 text-sm font-medium'>mascotas</span>
                  </Link>

                  <Link onClick={()=>activeOption('/soporte')} href='/soporte' className={`${activeView == '/soporte' ?  "bg-gray-100 text-gray-700" : "text-white"} flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}>
                     <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           d='M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3'
                        />
                     </svg>

                     <span className='mx-2 text-sm font-medium'>Soporte</span>
                  </Link>

                  <Link onClick={()=>activeOption('/profesionales')} href='/profesionales' className={`${activeView == '/profesionales' ?  "bg-gray-100 text-gray-700" : "text-white"} flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}>
                     <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           d='M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3'
                        />
                     </svg>

                     <span className='mx-2 text-sm font-medium'>Profesionales</span>
                  </Link>

                  <Link onClick={()=>activeOption('/pedidos')} href='/pedidos' className={`${activeView == '/pedidos' ?  "bg-gray-100 text-gray-700" : "text-white"} flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}>
                     <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
                        />
                     </svg>

                     <span className='mx-2 text-sm font-medium'>Pedidos Whopaws</span>
                  </Link>
               </div>

      
               <div className='space-y-3 '>
                  <Button variant='filled' onClick={cerrarSesion}>Cerrar Sesion</Button>
               </div>
            </nav>
         </div>
        </div>
      </aside>
   );
};
