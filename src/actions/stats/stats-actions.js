import * as redux from 'redux';
import {CALL_API} from '../../middleware/http/http-middleware';

export const STATS_REQUEST = '@@reduxNgHttpMiddleware/statsRequest';
export const STATS_SUCCESS = '@@reduxNgHttpMiddleware/statsSuccess';
export const STATS_FAILURE = '@@reduxNgHttpMiddleware/statsFailure';

/**
 * Fetch the external stats
 */
export function fetchPlayoffData() {
  return {
    [CALL_API]: {
      types: [STATS_REQUEST, STATS_SUCCESS, STATS_FAILURE],
      endpoint: `/src/data/stats-playoffs.json`
    }
  };
}

export function fetchRegularSeasonData() {
  return {
    [CALL_API]: {
      types: [STATS_REQUEST, STATS_SUCCESS, STATS_FAILURE],
      endpoint: `/src/data/stats-regular-season.json`
    }
  };
}


export default function statsActions($ngRedux) {
  let actionCreator = {
    fetchPlayoffData,
    fetchRegularSeasonData
  };

  return redux.bindActionCreators(actionCreator, $ngRedux.getStore().dispatch);
}

statsActions.$inject = ['$ngRedux'];
