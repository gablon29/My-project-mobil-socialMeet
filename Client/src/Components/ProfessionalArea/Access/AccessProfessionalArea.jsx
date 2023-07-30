import SelectProfessionalArea from "../SelectProfessionalArea";

const AccessProfessionalArea = ({route}) => {
    const {register, text} = route.params;
    return (
        <SelectProfessionalArea register={register} text={text}/>
    );
}
 
export default AccessProfessionalArea;