import R from 'ramda';
import {
  teamFilter
}
from '../../selectors/team-selector';

export default class TotalPimsController {
  constructor($scope, $ngRedux) {
    this.totalPims = null;
    $ngRedux.connect($scope, state => {
      return {
        totalPims: teamFilter(state).reduce((acc, elem) => {
          return acc + elem.get('penaltyMinutes');
        }, 0)
      }
    });

  }
};

TotalPimsController.$inject = ['$scope', '$ngRedux'];
