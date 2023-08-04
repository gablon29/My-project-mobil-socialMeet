import SelectProfessionalArea from "../SelectProfessionalArea";

const AccessProfessionalArea = ({route}) => {
    const {register, profile, professionals} = route.params;
    return (
        <SelectProfessionalArea professionals={professionals} profileId={profile?.id} register={register} text={`Accede a tu área${"\n"}profesional`}/>
    );
}
 
export default AccessProfessionalArea;