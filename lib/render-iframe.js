/* @flow */
import React from 'react';

type PropsType = {
  src: string,
  width?: number | string,
  height?: number | string,
  allowFullscreen?: boolean,
};

function renderIframe({ src, width, height, allowFullscreen }: PropsType) {
  return (<iframe
    src={src}
    width={width}
    height={height}
    frameBorder='0'
    allowFullScreen={allowFullscreen}
  />);
}

export default renderIframe;
