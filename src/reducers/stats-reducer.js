import {STATS_REQUEST, STATS_SUCCESS, STATS_FAILURE} from '../actions/stats/stats-actions';
import { Map, fromJS } from 'immutable';

const INITIAL_STATE = Map({
  hasError: false,
  isLoading: false,
  dataset: []
});

/**
 * Reducer of RESOURCE actions. Returns a state object
 * with { currentState, currentParams, prevState, prevParams }
 *
 * @param  {Object} state - Previous state
 * @param  {Object} action - Action
 * @return {Object} New state
 */
export default function stats(state = INITIAL_STATE, action) {
  switch(action.type) {
    case STATS_REQUEST:
      return state.merge({
        isLoading: true,
        hasError: false,
        dataset: []
      });

    case STATS_SUCCESS:
      let data = fromJS(action.payload.data);

      return state.merge({
        isLoading: false,
        hasError: false,
        dataset: data
      });

    case STATS_FAILURE:
      return state.merge({
        isLoading: false,
        hasError: true,
        dataset: []
      });

    default:
      return state;
  };
}
