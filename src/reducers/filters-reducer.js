import {ADD_FILTER, REMOVE_FILTER} from '../actions/filters/filters-actions';
import { Map, fromJS } from 'immutable';

const INITIAL_STATE = Map({
  team: null
});

/**
 * Reducer of filter actions. Returns a state object
 * with { currentState, currentParams, prevState, prevParams }
 *
 * @param  {Object} state - Previous state
 * @param  {Object} action - Action
 * @return {Object} New state
 */
export default function filters(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_FILTER:
      let {payload} = action;
      return state.set(payload.key, payload.value);

    case REMOVE_FILTER:
      return state;

    default:
      return state;
  };
}
