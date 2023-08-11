import { authSetError, authSetLoading } from '@/redux/reducer/reducerAuth';
import Profesionales from '../components/Profesionales/Profesionales';
import { setProfessions } from '@/redux/reducer/reducerProfesionales';
import { useEffect } from 'react';
import { getAllProfessions } from '../../utils/metodos/userMetodos';
import { useDispatch } from 'react-redux';

const profesionales = () =>{

    // const dispatch = useDispatch()

    // useEffect(() => {
        
    //     getAllProfessions({
    //         loading: (v) => dispatch(authSetLoading(v)),
    //         error: (msg) => dispatch(authSetError(msg)),
    //         success: async (res) => dispatch(setProfessions(res))
            
    //     })
    // }, [])

    return(
        <>

        <Profesionales/>
        </>
    )
}
export default profesionales