import R from 'ramda';
import {
  teamFilter
}
from '../../selectors/team-selector';

export default class TotalShotsController {
  constructor($scope, $ngRedux) {
    this.totalShots = null;
    $ngRedux.connect($scope, state => {
      return {
        totalShots: teamFilter(state).reduce((acc, elem) => {
          return acc + elem.get('shots');
        }, 0)
      }
    });

  }
};

TotalShotsController.$inject = ['$scope', '$ngRedux'];
