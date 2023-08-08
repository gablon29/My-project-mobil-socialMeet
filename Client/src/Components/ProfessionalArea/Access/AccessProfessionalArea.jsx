import { useSelector } from "react-redux";
import SelectProfessionalArea from "../SelectProfessionalArea";

const AccessProfessionalArea = ({route}) => {
    const {register/* , profile, professionals */} = route.params;
    const profile = useSelector((state) => state.ReducerAuth.profile);
    const professionals = useSelector((state)=> state.ReducerProfessional.userProfessionals);
    return (
        <SelectProfessionalArea professionals={professionals.professionals} profileId={profile?.id} register={register} text={`Accede a tu área${"\n"}profesional`}/>
    );
}
 
export default AccessProfessionalArea;