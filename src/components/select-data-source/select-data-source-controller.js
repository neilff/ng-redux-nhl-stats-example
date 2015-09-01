import { observableFromStore } from 'redux-rx';

export default class SelectDataSourceController {
  constructor(statsActions, $ngRedux, $state) {
    this.fetchPlayoff = statsActions.fetchPlayoffData;
    this.fetchRegularSeason = statsActions.fetchRegularSeasonData;

    const state$ = observableFromStore($ngRedux);

    state$
      .distinctUntilChanged(state => state.router.getIn(['currentParams', 'season']))
      .map(state => state.router.getIn(['currentParams', 'season']))
      .subscribe(state => {
        if (state === 'playoff') {
          statsActions.fetchPlayoffData();
        } else if (state === 'regular') {
          statsActions.fetchRegularSeasonData();
        } else {
          $state.go('app', {
            season: 'regular'
          });
        }
      });
  }
}

SelectDataSourceController.$inject = ['statsActions', '$ngRedux', '$state'];
