export default class SelectDataSourceController {
  constructor(statsActions) {
    this.fetchPlayoff = statsActions.fetchPlayoffData;
    this.fetchRegularSeason = statsActions.fetchRegularSeasonData;

    statsActions.fetchPlayoffData();
  }
}

SelectDataSourceController.$inject = ['statsActions'];
