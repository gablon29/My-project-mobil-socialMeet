import "./App.css";
import { Route, Switch } from "react-router";
import { Home } from "./Components/Home";
import { Panel } from "./Components/Panel";
import axios from "axios";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { Mascotas } from "./Components/Chips/Mascotas";


axios.defaults.baseURL = "https://whopaws-production.up.railway.app"

// axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Panel />}

      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/dashboard" />
        <Route exact path="/dashboard/usuarios" />

        <Route exact path="/dashboard/add" />
        <Route exact path="/activate/:id" component={Mascotas} />

      </Switch>
    </div>
  );
}

export default App;