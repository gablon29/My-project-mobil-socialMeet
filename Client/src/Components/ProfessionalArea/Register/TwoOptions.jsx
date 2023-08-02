import { Text, View } from "react-native";
import Button from "../../Buttons/ButtonCuston";
import { useState } from "react";

const TwoOptions = ({tipo, setRender, title, text, op1, op2, setModalidadNoVet, modalidadNoVet}) => {
    
    const [chosen, setChosen] = useState([]);
    const [selectOp, setSelectOp ] = useState({op1: false, op2: false});
    const [countStep, setCountStep] = useState(0);
    
    const select = (option, title) => {
        if (option === "op1") {
          setSelectOp((prevState) => ({
            ...prevState,
            op1: !prevState.op1,
          }));
        } else {
          setSelectOp((prevState) => ({
            ...prevState,
            op2: !prevState.op2,
          }));
        }
        setChosen((prevChosen) => {
          if (prevChosen.includes(title)) {
            return prevChosen.filter((item) => item !== title);
          } else {
            return [...prevChosen, title];
          }
        });
      };

      const nextStep = (nameProperty) => {
        if(tipo === "Cuidador") {
          setRender(11)
        } else if (tipo === "Peluquero") {
          setCountStep(countStep + 1)
          countStep === 1 ? setModalidadNoVet((prevState) => ({
            ...prevState,
            "donde" : chosen
          }))
          :
          setModalidadNoVet((prevState) => ({
            ...prevState,
            "desplazo" : chosen
          }));
          countStep === 1 ? chosen.includes(op1) ? setRender(13) : setRender(14) : console.log("Aquí voy")
        }
      }
      

    return (
        <View className="w-screen items-center py-10">
            <Text className="text-2xl font-bold text-center mb-10">{title}</Text>
            {tipo === "Peluquero" ? <Text className="mb-10 text-base font-semibold text-center">{text}</Text> : null}
            <Button 
                title={op1}
                titleClass={"font-bold text-base"}
                buttonClass={`bg-new rounded-xl w-10/12 h-10 items-center justify-center ${selectOp.op1 ? "border-2 border-black" : ""}`}
                onPress={()=>select("op1", op1)}
            />
            <Button 
                title={op2}
                titleClass={"font-bold text-base"}
                buttonClass={`bg-new mt-16 rounded-xl w-10/12 h-10 items-center justify-center ${selectOp.op2 ? "border-2 border-black" : ""}`}
                onPress={()=>select("op2", op2)}
            />
            <Button 
                title={"Siguiente"}
                titleClass={"text-naranja font-bold text-base"}
                buttonClass={"bg-white mt-10 border-2 border-naranja mb-10 w-64 h-14 rounded-2xl items-center justify-center"}
                onPress={()=>nextStep()}
            />
        </View>
    );
}
 
export default TwoOptions;