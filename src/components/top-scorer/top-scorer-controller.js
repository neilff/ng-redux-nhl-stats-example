import R from 'ramda';
import { teamFilter, topScorerSelector } from '../../selectors';

export default class TopScorerController {
  constructor($scope,$ngRedux) {
    this.statsData = [];

    $ngRedux.connect($scope, state => {
      return {
        statsData: topScorerSelector(state).toJS()
      };
    });
  }
};

TopScorerController.$inject = ['$scope','$ngRedux'];
