import { createSelector } from 'reselect';

const filterSelector = state => state.filters.get('team');
const statsSelector = state => state.stats.get('dataset');

export const teamFilter = createSelector(
  [statsSelector, filterSelector],
  (stats, teamFilter) => {
    if (teamFilter) {
      return stats.filter(player => player.get('playerTeamsPlayedFor').indexOf(teamFilter) !== -1);
    }

    return stats;
  }
);
