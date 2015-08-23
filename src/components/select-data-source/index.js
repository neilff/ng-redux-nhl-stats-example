import angular from 'angular';
import SelectDataSource from './select-data-source-controller';

export default angular
  .module('app.components.selectDataSource', [])
  .controller('SelectDataSource', SelectDataSource)
  .directive('selectDataSource', () => {
    return {
      restrict: 'E',
      controller: 'SelectDataSource',
      controllerAs: 'dataSource',
      bindToController: true,
      template: require('./select-data-source-tpl.html')
    };
  })
  .name;
