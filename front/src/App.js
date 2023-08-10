// App.js
import React, { useEffect, useState } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import { buscar_chipId } from './utils/axiosHandlers';
import { RegisterChip } from './Components/RegisterChip/RegisterChip';
import ChatComponent from '../src/Components/RegisterChip/SocketChat';

const App = () => {


  return (
    <Switch>
      {/* Ruta para mostrar la información de la mascota */}
      <Route path="/pet/:chipId" component={RegisterChip}>
      </Route>
       <Route path="/test" component={ChatComponent} />
      {/* Otras rutas */}
    </Switch>
  );
};

export default App;