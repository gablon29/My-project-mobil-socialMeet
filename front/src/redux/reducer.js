const initialState = {
    profile: [],
    compras: [],
    ventas: [],
    proveedores: [],
    clientes: [],
    change: true,
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "INFOUSER":
        return {
          ...state,
          profile: action.payload,
        };
      case "COMPRAS":
        return {
          ...state,
          compras: action.payload,
        };
      case "VENTAS":
        return {
          ...state,
          ventas: action.payload,
        };
      case "PROVEEDORES":
        return {
          ...state,
          proveedores: action.payload, // Corrección: Actualizar la propiedad "proveedores"
        };
      case "CLIENTES":
        return {
          ...state,
          clientes: action.payload,
        };
      case "INFOUSER2":
        return {
          ...state,
          profile: action.payload,
        };
      case "CHANGE":
        return {
          ...state,
          change: true,
        };
      case "CLEAN":
        return {
          ...state,
          profile: [],
        };
      case "RELOAD":
        return {
          ...state,
          change: false,
        };
      default:
        return { ...state };
    }
  }
  
  export default rootReducer;
  