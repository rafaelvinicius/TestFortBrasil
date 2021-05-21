import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './index.css';
import Login from './Login';
import Lista from './Lista';
import Busca from './Busca';
import Editar from './Editar';
import Cadastrar from './Cadastrar';

ReactDOM.render((
  <BrowserRouter basename="/">
     <Switch>
          <Route path="/editar/:customPath" exact component={ Editar } /> 
          <Route path="/cadastrar" exact component={ Cadastrar } />
          <Route path="/buscar" exact component={ Busca } />
          <Route path="/login" exact component={ Login } />
          <Route path="/" component={ Lista } />
      </Switch>
  </BrowserRouter>
), document.getElementById('root'));
