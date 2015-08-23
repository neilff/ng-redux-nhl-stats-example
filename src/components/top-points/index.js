import TopPointsController from './top-points-controller';

export default angular
  .module('app.components.topPointsComponent', [])
  .controller('TopPointsController', TopPointsController)
  .directive('topPoints', () => {
    return {
      restrict: 'E',
      controller: 'TopPointsController',
      controllerAs: 'topPoints',
      bindToController: true,
      template: require('./top-points-tpl.html')
    };
  })
  .name;
