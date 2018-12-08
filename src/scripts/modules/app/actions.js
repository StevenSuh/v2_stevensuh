import * as actionTypes from './action_types';

export const setActiveFilter = filter => ({
  type: actionTypes.onSetActiveFilter,
  value: filter,
});

export const setCurrentProject = project => ({
  type: actionTypes.onSetCurrentProject,
  value: project,
});
