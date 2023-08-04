import SelectProfessionalArea from "../SelectProfessionalArea";

const AccessProfessionalArea = ({route}) => {
    const {register, profile} = route.params;
    return (
        <SelectProfessionalArea register={register} text={`Accede a tu área${"\n"}profesional`}/>
    );
}
 
export default AccessProfessionalArea;