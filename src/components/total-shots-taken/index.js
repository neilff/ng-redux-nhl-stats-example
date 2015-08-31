import TotalShotsController from './total-shots-controller';

export default angular
  .module('app.components.totalShotsScored', [])
  .controller('TotalShotsController', TotalShotsController)
  .directive('totalShots', () => {
    return {
      restrict: 'E',
      controller: 'TotalShotsController',
      controllerAs: 'totalShots',
      bindToController: true,
      template: require('./total-shots-tpl.html')
    };
  })
  .name;
