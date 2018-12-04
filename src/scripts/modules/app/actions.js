import * as actionTypes from './action_types';

export const setActiveFilter = filter => ({
  type: actionTypes.setActiveFilter,
  value: filter,
})

export const setCurrentProject = project => ({
  type: actionTypes.setCurrentProject,
  value: project,
});
