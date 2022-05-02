import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from './Home.js';
import Historico from './Historico.js';
import Sobre from './Sobre.js';
import Autores from './Autores.js';

const Main = () => (
  <div>
    <Switch>
      <Route path='/Home' component={Overview} />
      <Route path='/Historico' component={Historico} />
      <Route path='/Sobre' component={Sobre} />
      <Route path='/Autores' component={Autores} />
    </Switch>
  </div>
)

export default Main;