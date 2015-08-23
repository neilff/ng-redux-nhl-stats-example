import R from 'ramda';
import { teamFilter } from '../../selectors/team-selector';

export default class TopPointsController {
  constructor($ngRedux) {
    this.statsData = [];

    $ngRedux.connect(teamFilter, stats => this.statsData = this.getTopPoints(15)(stats.toJS()));
  }

  getTopPoints(count) {
    return R.pipe(
      R.sort((a, b) => b.points - a.points),
      R.take(count)
    );
  }
};

TopPointsController.$inject = ['$ngRedux'];
