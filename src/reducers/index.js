import * as redux from 'redux';

import http from '../middleware/http/http-state-reducer';
import stats from './stats-reducer';
import filters from './filters-reducer';

const reducers = redux.combineReducers({
  http,
  stats,
  filters
});

export default reducers;
