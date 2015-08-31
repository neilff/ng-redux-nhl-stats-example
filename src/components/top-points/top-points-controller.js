import R from 'ramda';
import {
  teamFilter
}
from '../../selectors/team-selector';

export default class TopPointsController {
  constructor($scope, $ngRedux) {
    this.statsData = [];
    $ngRedux.connect($scope, state => {
      return {
        statsData: this.getTopPoints(15)(teamFilter(state).toJS())
      }
    })

  }

  getTopPoints(count) {
    return R.pipe(
      R.sort((a, b) => b.points - a.points),
      R.take(count)
    );
  }
};

TopPointsController.$inject = ['$scope', '$ngRedux'];
