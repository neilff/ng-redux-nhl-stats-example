import angular from 'angular';
import CardController from './card-controller';

export default angular
  .module('app.components.card', [])
  .controller('CardController', CardController)
  .name;
