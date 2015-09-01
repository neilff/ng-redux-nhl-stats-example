import R from 'ramda';
import Immutable from 'immutable';
import { createSelector, createSelectorCreator } from 'reselect';

const statsSelector = state => state.stats.get('dataset');
const teamSelector = state => state.router.getIn(['currentParams', 'team']);

const immutableCreateSelector = createSelectorCreator(Immutable.is);

export const teamFilter = immutableCreateSelector(
  [statsSelector, teamSelector],
  (stats, selectedTeam) => {
    return selectedTeam ?
      stats.filter(player => player.get('playerTeamsPlayedFor').indexOf(selectedTeam.toUpperCase()) !== -1) :
      stats;
  }
);

export const teamListSelector = immutableCreateSelector(
  [statsSelector],
  (stats) => {
    let filtered = stats
      .map(player => player.get('playerTeamsPlayedFor').split(', ')).toJS();

    return R.pipe(
      R.flatten,
      R.uniq
    )(filtered);
  }
);

export const topScorerSelector = immutableCreateSelector(
  [teamFilter],
  data => {
    return data
      .sort((a, b) => b.get('goals') - a.get('goals'))
      .take(5);
  }
);

export const topPointsSelector = immutableCreateSelector(
  [teamFilter],
  data => {
    return data
      .sort((a, b) => b.get('points') - a.get('points'))
      .take(5);
  }
);
