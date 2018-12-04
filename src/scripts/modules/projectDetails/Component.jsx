import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import * as sharedDefs from 'src/scripts/shared/defs';

const ProjectDetails = ({
  match: {
    params: { projectName },
    url,
  },
}) => {
  const projectDetails = sharedDefs.PROJECT_DETAILS;
  if (!projectDetails[projectName]) {
    return <Redirect to="/" />;
  }

  const project = projectDetails[projectName];
  if (!url.startsWith(project.type)) {
    return <Redirect to="/" />;
  }

  return (
    <div style={{ padding: '20%' }}>
      {url} + {projectName}
    </div>
  );
};

export default ProjectDetails;
