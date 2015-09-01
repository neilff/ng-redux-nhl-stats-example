export default class GlobalDebugController {
  constructor($scope, $ngRedux) {
    $ngRedux.connect($scope, state => {
      return {
        globalState: {
          router: state.router,
          filter: state.filter,
        }
      };
    });
  }
}

GlobalDebugController.$inject = ['$scope', '$ngRedux'];
