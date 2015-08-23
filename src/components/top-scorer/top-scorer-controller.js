import R from 'ramda';
import { teamFilter } from '../../selectors/team-selector';

export default class TopScorerController {
  constructor($ngRedux) {
    this.statsData = [];

    $ngRedux.connect(teamFilter, stats => this.statsData = this.getTopScorers(15)(stats.toJS()));
  }

  getTopScorers(count) {
    return R.pipe(
      R.sort((a, b) => b.goals - a.goals),
      R.take(count)
    );
  }
};

TopScorerController.$inject = ['$ngRedux'];
