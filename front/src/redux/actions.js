import axios from "axios";


export const InputRegister = (payload) =>{
  return{
  type: "INFOUSER2",
  payload,
}
}
export const Proveedores = (payload) =>{
  return{
  type: "PROVEEDORES",
  payload,
}
}
export const Clientes = (payload) =>{
  return{
  type: "CLIENTES",
  payload,
}
}
export const Ventasdispatch = (payload) =>{
  return{
  type: "VENTAS",
  payload,
}
}
export const Comprasdispatch = (payload) =>{
  return{
  type: "COMPRAS",
  payload,
}
}
export const Change = () =>{
  return{
    type: "CHANGE"
  }
}
export const Reload = () =>{
  return{
    type: "RELOAD"
  }
}
export const CleanProfile = () =>{
  return{
    type: "CLEAN"
  }
}