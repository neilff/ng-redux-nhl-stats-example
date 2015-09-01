import R from 'ramda';
import {teamListSelector} from '../../selectors';

export default class TeamSelectorController {
  constructor($scope, $ngRedux) {
    this.teams = [];

    $ngRedux.connect($scope, state => {
      return {
        teams: teamListSelector(state)
      };
    });
  }
}

TeamSelectorController.$inject = ['$scope', '$ngRedux'];
