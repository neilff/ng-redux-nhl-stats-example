import {
  currentPlayerIdSelector
}
from '../../selectors';

export default class CardController {
  constructor($scope, $ngRedux) {
    this.statsData = {};

    $ngRedux.connect($scope, state => {
      console.log(currentPlayerIdSelector(state));

      return {
        statsData: currentPlayerIdSelector(state)
      };
    });
  }
}

CardController.$inject = ['$scope', '$ngRedux'];
