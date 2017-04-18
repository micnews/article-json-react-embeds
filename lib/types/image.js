import React from 'react';

const Component = ({ src, alt, width, height }) =>
  <img src={src} alt={alt} width={width} height={height} />;

Component.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
};

export default Component;
