import { Text, View } from "react-native";
import Button from "../../Buttons/ButtonCuston";
import { useState } from "react";

const TwoOptions = ({tipo, setRender, title, text, op1, op2, render, lugarAtencion, setLugarAtencion, setCountry, setProvince, setCity}) => {
    console.log(lugarAtencion)
    const [selectOp, setSelectOp ] = useState({op1: "", op2: ""});
    
    const select = (option, title) => {
      if(render===12) {
        SelectMultiple(option, title)
      } else if(render===14) {
        setSelectOp((prevState) => ({
          op1: option === "op1" ? (prevState.op1 === "" ? title : prevState.op1) : "",
          op2: option === "op2" ? (prevState.op2 === "" ? title : prevState.op2) : "",
        }));
      } else {
        SelectMultiple(option, title)
      }
    };

    const SelectMultiple = (option, title) => {
      if (option === "op1") {
        setSelectOp((prevState) => ({...prevState, op1: prevState.op1 === "" ? title : "",}));
      } else {
        setSelectOp((prevState) => ({...prevState, op2: prevState.op2 === "" ? title : "",}));
      }
    }

    const nextStep = () => {
        if(tipo === "Cuidador") {
          setLugarAtencion([{lugar:selectOp}])
          setRender(11)
        } else if (tipo === "Peluquero") {
          if(render === 12) { // elije si es a domicilio o en casa, o ambas.
            setLugarAtencion([{lugar:selectOp}])
            selectOp.op1 != "" ? setRender(13) : setRender(14)
          } else if (render === 14) { //elije si se puede desplazar a toda la provincia
            lugarAtencion[0].lugar.op2 = [lugarAtencion[0].lugar.op2, selectOp.op1 != "" ? selectOp.op1 : selectOp.op2]
            const updateObject = lugarAtencion;
            setLugarAtencion(updateObject);
            setCountry("")
            setProvince("")
            setCity("")
            selectOp.op1 != "" ? setRender(15) : setRender(16)
          }
        } else if (tipo === "Educador"){
          setLugarAtencion([{lugar:selectOp}])
          setRender(23)
        }
      }
      

    return (
        <View className="w-screen items-center py-10">
            <Text className="text-2xl font-bold text-center mb-10">{title}</Text>
            {tipo !== "Cuidador" ? <Text className="mb-10 text-base font-semibold text-center">{text}</Text> : null}
            <Button 
                title={op1}
                titleClass={"font-bold text-base"}
                buttonClass={`bg-new rounded-xl w-10/12 h-10 items-center justify-center ${selectOp.op1 != "" ? "border-2 border-black" : ""}`}
                onPress={()=>{select("op1", op1)}}
            />
            <Button 
                title={op2}
                titleClass={"font-bold text-base"}
                buttonClass={`bg-new mt-16 rounded-xl w-10/12 h-10 items-center justify-center ${selectOp.op2 != "" ? "border-2 border-black" : ""}`}
                onPress={()=>select("op2", op2)}
            />
            <Button 
                title={"Siguiente"}
                titleClass={"text-naranja font-bold text-base"}
                buttonClass={"bg-white mt-10 border-2 border-naranja mb-10 w-64 h-14 rounded-2xl items-center justify-center"}
                onPress={()=>nextStep()}
                dissable={selectOp.op1 == "" && selectOp.op2 == "" ? false : true}
            />
        </View>
    );
}
 
export default TwoOptions;