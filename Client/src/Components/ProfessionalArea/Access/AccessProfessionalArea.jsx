import SelectProfessionalArea from "../SelectProfessionalArea";
import { useSelector } from "react-redux";
const AccessProfessionalArea = ({route}) => {
    const {register} = route.params;
    const profile = useSelector((state) => state.ReducerAuth.profile);
    const professionals = useSelector((state)=> state.ReducerProfessional.userProfessionals);
    return (
        <SelectProfessionalArea professionals={professionals.professionals} profileId={profile?.id} register={register} text={`Accede a tu área${"\n"}profesional`}/>
    );
}
 
export default AccessProfessionalArea;