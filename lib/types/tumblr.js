import React from 'react';
import renderText from '../render-text';

const render = ({ did, url, text }) =>
  <div className='tumblr-post' data-href={url} data-did={did}>
    {renderText(text)}
  </div>
;

render.propTypes = {
  did: React.PropTypes.string,
  url: React.PropTypes.string,
  text: React.PropTypes.string,
};

export default render;
