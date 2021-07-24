import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './app.css'

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorCatcher from '../error-catcher';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { LoginPage, PeoplePage, PlanetsPage, SecretPage, StarshipsPage } from '../pages'
import { SwapiServiceProvider } from '../swapi-service-context';
import { StarshipDetails } from '../sw-components';


export default class App extends React.Component {

  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  onServiceChange = () => {
    this.setState((state) => {
      const Service = state.swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      return {
        swapiService: new Service()
      }
    })
  }

  render() {
    return (
      <ErrorCatcher>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              
              <Switch>
                <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact/>
                <Route path="/people/:id?" component={PeoplePage} exact/>
                <Route path="/planets" component={PlanetsPage} exact/>
                <Route path="/starships" component={StarshipsPage} exact/>
                <Route 
                  path="/starships/:id" 
                  render={({match, location, history}) => {
                    const {id} = match.params;

                    return <StarshipDetails itemId={id} />
                  }}
                />
                <Route 
                  path="/login" 
                  render={() => (
                    <LoginPage 
                      isLoggedIn={this.state.isLoggedIn} 
                      onLogin={this.onLogin}/>
                  )}
                />
                <Route 
                  path="/secret" 
                  render={() => (
                    <SecretPage isLoggedIn={this.state.isLoggedIn}/>
                  )}
                />

                <Route render={() => <h2>Page not found</h2>}/>
              </Switch>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorCatcher>
    )
  }
}