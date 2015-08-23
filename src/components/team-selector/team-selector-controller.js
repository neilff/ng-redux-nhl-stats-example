import R from 'ramda';

export default class TeamSelectorController {
  constructor($ngRedux, filterActions) {
    this.teams = [];
    this.filterActions = filterActions;

    $ngRedux.connect(state => state, state => {
      this.teams = R.pipe(
        R.map(player => player.playerTeamsPlayedFor.split(', ')),
        R.flatten,
        R.uniq
      )(state.stats.toJS().dataset);

      this.activeTeam = state.filters.get('team');
    });
  }

  addFilter(team) {
    this.filterActions.addFilter('team', team);
  }
}

TeamSelectorController.$inject = ['$ngRedux', 'filterActions'];
