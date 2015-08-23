import TopScorerController from './top-scorer-controller';

export default angular
  .module('app.components.topScorerComponent', [])
  .controller('TopScorerController', TopScorerController)
  .directive('topScorer', () => {
    return {
      restrict: 'E',
      controller: 'TopScorerController',
      controllerAs: 'topScorer',
      bindToController: true,
      template: require('./top-scorer-tpl.html')
    };
  })
  .name;
