export default class GlobalDebugController {
  constructor($scope, $ngRedux) {
    $ngRedux.connect($scope, state => {
      return {
        globalState: state
      };
    });
  }
}

GlobalDebugController.$inject = ['$scope', '$ngRedux'];
