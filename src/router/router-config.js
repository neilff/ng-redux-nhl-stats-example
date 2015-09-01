import mainTemplate from '../components/main/main-tpl.html';

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
    });
}

routerConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
