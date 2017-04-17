import React from 'react';

const render = ({ src, alt, width, height }) =>
  <img src={src} alt={alt} width={width} height={height} />;

render.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string,
  width: React.PropTypes.number,
  height: React.PropTypes.height,
};

export default render;
