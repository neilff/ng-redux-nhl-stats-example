import R from 'ramda';
import { teamFilter } from '../../selectors/team-selector';

export default class TopScorerController {
  constructor($scope,$ngRedux) {
    this.statsData = [];

    $ngRedux.connect($scope,state=>{
      return {
        statsData: this.getTopScorers(15)(teamFilter(state).toJS())
      }
    })
  
  }

  getTopScorers(count) {
    return R.pipe(
      R.sort((a, b) => b.goals - a.goals),
      R.take(count)
    );
  }
};

TopScorerController.$inject = ['$scope','$ngRedux'];
