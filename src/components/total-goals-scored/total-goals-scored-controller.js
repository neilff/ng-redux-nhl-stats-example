import R from 'ramda';
import {
  teamFilter
}
from '../../selectors';

export default class TotalGoalsScoreController {
  constructor($scope, $ngRedux) {
    this.totalGoals = null;

    $ngRedux.connect($scope, state => {
      return {
        totalGoals: teamFilter(state).reduce((acc, elem) => {
          return acc + elem.get('goals');
        }, 0)
      }
    });

  }
};

TotalGoalsScoreController.$inject = ['$scope', '$ngRedux'];
