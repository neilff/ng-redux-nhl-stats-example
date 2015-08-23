import globalDebug from './global-debug';
import topScorer from './top-scorer';
import topPoints from './top-points';
import selectDataSource from './select-data-source';
import teamSelector from './team-selector';
import totalGoalsScored from './total-goals-scored';

export default angular
  .module('app.components', [
    globalDebug,
    topScorer,
    topPoints,
    selectDataSource,
    teamSelector,
    totalGoalsScored
  ])
  .name;
