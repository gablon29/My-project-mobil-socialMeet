import React from "react";
import { useState } from "react";
import axios from "axios"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { InputRegister } from "../redux/actions";
export const useAuth = () =>{

const [login, setLogin] = useState({
    email: "",
    password: "",
    name: "",
})    

const [register, setRegister] = useState(false)
const [incorrect, setIncorrect] = useState(false)
const handleChange = (e) =>{
setLogin({
    ...login,
    [e.target.name]: e.target.value 
})
}
const dispatch = useDispatch()
const history = useHistory()
const handleSubmit = async () => {

        try {
            const response = await axios.post("/api/user/login", {
                email: login.email,
                password: login.password,
            });
            localStorage.setItem('token', response.data.token);
            dispatch(InputRegister(response.data.user))
            history.push("/dashboard")
        } catch (error) {
            console.log(error);
            setIncorrect(true)
        }  
};
    

return{
    login, setLogin, handleChange, register, setRegister, handleSubmit,incorrect
}
}