import { useNavigation } from "@react-navigation/native";
import SelectProfessionalArea from "../SelectProfessionalArea";
const AccessProfessionalArea = ({route}) => {
    const {register, text} = route.params;
		const navigation = useNavigation()
    return (
        <SelectProfessionalArea navigation = {navigation} register={register} text={text}/>
    );
}
 
export default AccessProfessionalArea;