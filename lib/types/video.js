/* eslint-disable react/forbid-prop-types */

import React from 'react';

const renderSource = ({ src, type: sourceType }, index) =>
  <source src={src} type={sourceType} key={index} />;

renderSource.propTypes = {
  src: React.PropTypes.string,
  type: React.PropTypes.string,
};

const render = ({ sources, width, height }) =>
  <video width={width} height={height}>
    {sources.map(renderSource)}
  </video>;

render.propTypes = {
  sources: React.PropTypes.array,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
};

export default render;
