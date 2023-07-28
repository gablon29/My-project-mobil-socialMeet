import Toast from "react-native-root-toast"
export default function noImplementado(msg){
if(typeof msg !== 'string'){
  msg="Aún no implementado."
}
  Toast.show(msg, {
    duration: 500,
    position: Toast.positions.CENTER,
    shadow: true,
    animation: true,
    hideOnPress: false,
    delay: 0,
  })
}
