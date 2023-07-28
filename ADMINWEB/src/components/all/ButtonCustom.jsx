const ButtonCustom = ({btClass, action, valueAction, dissable, text, component}) => {
    return (
        <button disabled={dissable} onClick={()=>action(valueAction)} className={btClass}>
            {text}
            {component}
        </button>
    );
}
 
export default ButtonCustom;