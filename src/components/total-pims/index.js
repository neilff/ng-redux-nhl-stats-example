import TotalPimsController from './total-pims-controller';

export default angular
  .module('app.components.totalPims', [])
  .controller('TotalPimsController', TotalPimsController)
  .directive('totalPims', () => {
    return {
      restrict: 'E',
      controller: 'TotalPimsController',
      controllerAs: 'totalPims',
      bindToController: true,
      template: require('./total-pims-tpl.html')
    };
  })
  .name;
