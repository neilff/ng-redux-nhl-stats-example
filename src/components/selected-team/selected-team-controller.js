import R from 'ramda';
import {teamSelector} from '../../selectors';

export default class SelectedTeamController {
  constructor($scope, $ngRedux) {
    this.team = '';

    $ngRedux.connect($scope, state => {
      return {
        team: teamSelector(state)
      };
    });

    this.teamLogos = {
      'ANA': 'Ducks',
      'ARI': 'Coyotes',
      'BOS': 'Bruins',
      'BUF': 'Sabres',
      'CGY': 'Flames',
      'CAR': 'Hurricanes',
      'CHI': 'Blackhawks',
      'COL': 'Avalanche',
      'CBJ': 'BlueJackets',
      'DAL': 'Stars',
      'DET': 'RedWings',
      'EDM': 'Oilers',
      'FLA': 'Panthers',
      'LAK': 'Kings',
      'MIN': 'Wild',
      'MTL': 'Canadiens',
      'NSH': 'Predators',
      'NJD': 'Devils',
      'NYI': 'Islanders',
      'NYR': 'Rangers',
      'PHI': 'Flyers',
      'PIT': 'Penguins',
      'OTT': 'Senators',
      'SJS': 'Jose Sharks',
      'STL': 'Blues',
      'TBL': 'Lightning',
      'TOR': 'MapleLeafs',
      'VAN': 'Canucks',
      'WSH': 'Capitals',
      'WPG': 'Jets'
    }

    this.getTeamLogo = (id) => {
      var start = 'http://cdn.nhle.com/nhl/images/logos/teams/';
      var end = '_logo.svgz?v=8.46';
      return start + this.teamLogos[id].toLowerCase() + end
    }
  }
}

SelectedTeamController.$inject = ['$scope', '$ngRedux'];
