require('./styles/_main.scss');

import angular from 'angular';

import ngRedux from 'ng-redux';
import ngTranslate from 'angular-translate';
import ngReduxUiRouter from 'redux-ui-router';
import * as redux from 'redux';
import createLogger from 'redux-logger';

import ngHttpMiddleware from './middleware/http';
import reducers from './reducers';
import router from './router';

import components from './components';
import actions from './actions';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

export default angular
  .module('app', [
    router,
    ngRedux,
    ngTranslate,
    ngReduxUiRouter,
    ngHttpMiddleware,
    components,
    actions,
  ])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(reducers, [
      'httpMiddleware',
      'ngUiRouterMiddleware',
      logger
    ]);
  })
  .config(function ($translateProvider) {
    $translateProvider.translations('en', {
      'ANA': 'Anaheim Ducks',
      'ARI': 'Arizona Coyotes',
      'BOS': 'Boston Bruins',
      'BUF': 'Buffalo Sabres',
      'CGY': 'Calgary Flames',
      'CAR': 'Carolina Hurricanes',
      'CHI': 'Chicago Blackhawks',
      'COL': 'Colorado Avalanche',
      'CBJ': 'Columbus Blue Jackets',
      'DAL': 'Dallas Stars',
      'DET': 'Detroit Red Wings',
      'EDM': 'Edmonton Oilers',
      'FLA': 'Florida Panthers',
      'LAK': 'Los Angeles Kings',
      'MIN': 'Minnesota Wild',
      'MTL': 'Montreal Canadiens',
      'NSH': 'Nashville Predators',
      'NJD': 'New Jersey Devils',
      'NYI': 'New York Islanders',
      'NYR': 'New York Rangers',
      'PHI': 'Philadelphia Flyers',
      'PIT': 'Pittsburgh Penguins',
      'OTT': 'Ottawa Senators',
      'SJS': 'San Jose Sharks',
      'STL': 'St Louis Blues',
      'TBL': 'Tampa Bay Lightning',
      'TOR': 'Toronto Maple Leafs',
      'VAN': 'Vancouver Canucks',
      'WSH': 'Washington Capitals',
      'WPG': 'Winnipeg Jets'
    });

    $translateProvider.preferredLanguage('en');
  })
  .name;
