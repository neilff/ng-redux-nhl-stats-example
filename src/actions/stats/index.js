import angular from 'angular';

import statsActions from './stats-actions';

export default angular
  .module('app.actions.stats', [])
  .factory('statsActions', statsActions)
  .name;
