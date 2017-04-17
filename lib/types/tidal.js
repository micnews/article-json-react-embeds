import React from 'react';

const render = ({ dataType, dataId }) =>
  <div className='tidal-embed' data-type={dataType} data-id={dataId} />
;

render.propTypes = {
  dataType: React.PropTypes.string.isRequired,
  dataId: React.PropTypes.string.isRequired,
};

export default render;
