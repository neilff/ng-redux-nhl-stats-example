import angular from 'angular';
import TeamSelectorController from './team-selector-controller';

export default angular
  .module('app.components.teamSelector', [])
  .controller('TeamSelectorController', TeamSelectorController)
  .directive('teamSelector', () => {
    return {
      restrict: 'E',
      controller: 'TeamSelectorController',
      controllerAs: 'teamSelector',
      bindToController: true,
      template: require('./team-selector-tpl.html')
    };
  })
  .name;
