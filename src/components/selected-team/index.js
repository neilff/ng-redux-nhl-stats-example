import angular from 'angular';
import SelectedTeamController from './selected-team-controller';

export default angular
  .module('app.components.selectedTeam', [])
  .controller('SelectedTeamController', SelectedTeamController)
  .directive('selectedTeam', () => {
    return {
      restrict: 'E',
      controller: 'SelectedTeamController',
      controllerAs: 'selectedTeam',
      bindToController: true,
      template: require('./selected-team-tpl.html')
    };
  })
  .name;
