import R from 'ramda';
import { teamFilter } from '../../selectors/team-selector';

export default class TotalGoalsScoreController {
  constructor($ngRedux) {
    this.totalGoals = null;

    $ngRedux.connect(teamFilter, stats => {
      this.totalGoals = stats.reduce((acc, elem) => {
        return acc + elem.get('goals');
      }, 0)
    });
  }
};

TotalGoalsScoreController.$inject = ['$ngRedux'];
