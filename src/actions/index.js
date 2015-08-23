import angular from 'angular';

import stats from './stats';
import filters from './filters';

export default angular
  .module('app.actions', [
    stats,
    filters
  ])
  .name;
