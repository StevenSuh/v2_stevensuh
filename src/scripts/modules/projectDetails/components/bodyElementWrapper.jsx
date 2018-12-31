import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BodyElementWrapper = ({ children, onChangeModalImgSrc }) => {
  switch (children.type) {
    case 'Link':
      return (
        <Link
          {...children.props}
          to={children.props.href}
        />
      );
    case 'img':
      return React.cloneElement(
        children,
        {
          onClick: (event) => {
            const { src } = event.target;
            onChangeModalImgSrc(src);
          },
        },
      );
    default:
      return children;
  }
};

BodyElementWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  onChangeModalImgSrc: PropTypes.func.isRequired,
};

export default BodyElementWrapper;
