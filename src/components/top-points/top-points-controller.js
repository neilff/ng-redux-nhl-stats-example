import R from 'ramda';
import {
  teamFilter
}
from '../../selectors/team-selector';

export default class TopPointsController {
  constructor($scope, $ngRedux) {
    this.statsData = [];
    var count=0;
    $ngRedux.connect($scope, state => {
      console.log('count update',++count);
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
