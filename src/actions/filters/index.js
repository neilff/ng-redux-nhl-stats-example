import angular from 'angular';

import filtersActions from './filters-actions';

export default angular
  .module('app.actions.filters', [])
  .factory('filterActions', filtersActions)
  .name;
