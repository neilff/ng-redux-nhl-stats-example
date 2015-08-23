import TotalGoalsScoredController from './total-goals-scored-controller';

export default angular
  .module('app.components.totalGoalsScored', [])
  .controller('TotalGoalsScoredController', TotalGoalsScoredController)
  .directive('totalGoals', () => {
    return {
      restrict: 'E',
      controller: 'TotalGoalsScoredController',
      controllerAs: 'totalGoals',
      bindToController: true,
      template: require('./total-goals-scored-tpl.html')
    };
  })
  .name;
