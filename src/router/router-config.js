import mainTemplate from '../components/main/main-tpl.html';
import cardTemplate from '../components/card/card-tpl.html';

export default function routerConfig($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/app');

  $stateProvider
    .state('app', {
      url: '/app?team?season',
      views: {
        main: {
          template: mainTemplate,
          controller: 'MainController',
          controllerAs: 'main'
        }
      }
    })
    .state('app.card', {
      url: '/card/:playerId',
      views: {
        card: {
          template: cardTemplate,
          controller: 'CardController',
          controllerAs: 'card'
        }
      }
    });
}

routerConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
