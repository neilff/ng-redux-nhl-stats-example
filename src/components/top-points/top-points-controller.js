import R from 'ramda';
import {
  topPointsSelector
}
from '../../selectors/team-selector';

export default class TopPointsController {
  constructor($scope, $ngRedux) {
    this.statsData = [];

    $ngRedux.connect($scope, state => {
      return {
        statsData: topPointsSelector(state).toJS()
      }
    })

  }
};

TopPointsController.$inject = ['$scope', '$ngRedux'];
