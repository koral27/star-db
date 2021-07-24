// Компоненты для списков персонажей, космических кораблей и планет

import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService, withChildFunction, compose } from '../hoc-helpers';



const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndModel = ({ name, model }) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}
const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}
const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList)

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList)

const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderNameAndModel)
)(ItemList)

export {
  PersonList,
  PlanetList,
  StarshipList
};