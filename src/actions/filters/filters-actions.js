import * as redux from 'redux';

export const ADD_FILTER = '@@ngReduxNhlStats/addFilter';
export const REMOVE_FILTER = '@@ngReduxNhlStats/removeFilter';

/**
 * Filter actions
 */
export function addFilter(key, value) {
  return {
    type: ADD_FILTER,
    payload: {
      key,
      value
    }
  };
}

export function removeFilter(key, value) {
  return {
    type: REMOVE_FILTER,
    payload: {
      key,
      value
    }
  };
}

export default function filterActions($ngRedux) {
  let actionCreator = {
    addFilter,
    removeFilter
  };

  return redux.bindActionCreators(actionCreator, $ngRedux.getStore().dispatch);
}

filterActions.$inject = ['$ngRedux'];
