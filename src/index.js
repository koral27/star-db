import React from 'react';
import ReactDOM from 'react-dom';

import SwapiService from './services/swapi-service';
import App from './components/app'

const swapi = new SwapiService();

swapi.getAllPlanets().then((planets) => {
  // console.log(planets)
  })
  .catch((err) => {
    console.error('Ошибка подключения!', err)
  })

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)