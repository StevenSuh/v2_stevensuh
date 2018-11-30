import * as action_types from './action_types';

export const setCurrentProject = project => ({
  type: action_types.setCurrentProject,
  value: project,
});
