import React from 'react';
import PropTypes from 'prop-types';

const EnlargeImg = ({ children, onChangeModalImgSrc }) => {
  if (children.type === 'img') {
    return React.cloneElement(
      children,
      {
        onClick: (event) => {
          const { src } = event.target;
          onChangeModalImgSrc(src);
        },
      },
    );
  }

  return children;
};

EnlargeImg.propTypes = {
  children: PropTypes.element.isRequired,
  onChangeModalImgSrc: PropTypes.func.isRequired,
};

export default EnlargeImg;
