
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { InputRegister } from "../redux/actions";
import { user_login } from "../utils/axiosHandlers";


export const useAuth = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [register, setRegister] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();
  const history = useHistory();

const handleSubmit = async (set_hay_token) => {
    try {
      const userdata = await user_login(login.email,login.password);
      dispatch(InputRegister(userdata));
      set_hay_token(true)
      history.push("/dashboard");      
    } catch (error) {
      console.log(error);
      setIncorrect(true);
    }
  };

  return {
    login,
    setLogin,
    handleChange,
    register,
    setRegister,
    handleSubmit,
    incorrect,
  };
};
