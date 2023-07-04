import "./App.css";
import { Route, Switch } from "react-router";
import { Home } from "./Components/Home";
import { Panel } from "./Components/Panel";
import axios from "axios";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { Compras } from "./Components/Compras";
import { Ventas } from "./Components/Ventas";

axios.defaults.baseURL = "https://app-work-production.up.railway.app/";
// axios.defaults.baseURL = "http://https://app-work-production.up.railway.app/:8080"

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
        <Route exact path="/dashboard/compras/:id" />
        <Route exact path="/dashboard/ventas" />
        <Route exact path="/dashboard/ventas/:id" />

        <Route exact path="/dashboard/add" />
      </Switch>
    </div>
  );
}

export default App;
