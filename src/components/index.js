import globalDebug from './global-debug';
import topScorer from './top-scorer';
import topPoints from './top-points';
import selectDataSource from './select-data-source';
import selectedTeam from './selected-team';
import teamSelector from './team-selector';
import totalGoalsScored from './total-goals-scored';
import totalShots from './total-shots-taken';
import totalPims from './total-pims';
import main from './main';
import card from './card';

export default angular
  .module('app.components', [
    globalDebug,
    topScorer,
    topPoints,
    selectDataSource,
    selectedTeam,
    teamSelector,
    totalGoalsScored,
    totalShots,
    totalPims,
    main,
    card,
  ])
  .name;
