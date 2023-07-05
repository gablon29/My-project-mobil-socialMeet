import "./App.css";
import { Route, Switch } from "react-router";
import { Login } from "./Components/Login";
import { Panel } from "./Components/Panel";
import axios from "axios";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { MisMascotas } from "./Components/Chips/MisMascotas";
import { useEffect, useState } from "react";
import { RenderMascota } from "./Components/Chips/RenderMascota";
import { Mascota } from "./Components/Chips/Mascota";

axios.defaults.baseURL = "https://whopaws-production.up.railway.app";

// axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();

  // logica de verificación de token al montarse la app
  const [hay_token, set_hay_token] = useState(false);
  const [quiere_logearse, set_quiere_logearse] = useState(true);


  useEffect(() => {
    const hay_token = localStorage.getItem("token");
    
    if (hay_token) {
      set_hay_token(true);
    } else {
      set_hay_token(false);
    }
  }, []);
  console.log(quiere_logearse)

  return (
    <div className="App">
      <Panel set_hay_token={set_hay_token} hay_token={hay_token} />

      <Switch>
        {/* Orden importa, activate primero sino pide logearse y no da ganas de complejizar mas el codigo */}
        <Route exact path="/activate/" />
        <Route
          exact
          path="/activate/:chipId"
          component={(props) => (
            <Mascota {...props} set_quiere_logearse={set_quiere_logearse}/>
          )}
        />
        
          <Route
            path="/"
            component={(props) => (
              <Login
                {...props}
                set_hay_token={set_hay_token}
                hay_token={hay_token}
                quiere_logearse={quiere_logearse}
              />
            )}
          />
        

        {/*<Route exact path="/dashboard"  />
        <Route exact path="/dashboard/usuarios" />
        <Route exact path="/dashboard/add" /> */}
      </Switch>
    </div>
  );
}

export default App;
