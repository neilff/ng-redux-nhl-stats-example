export default class GlobalDebugController {
  constructor($ngRedux) {
    $ngRedux.connect(state => state.filters, state => this.globalState = state)
  }
}

GlobalDebugController.$inject = ['$ngRedux'];
