/* @flow */
import React from 'react';
import renderText from '../render-text';
import type { TextArrayType } from '../render-text';

type PropsType = {
  did: string,
  url: string,
  text: TextArrayType,
};
const render = ({ did, url, text }: PropsType) =>
  <div className='tumblr-post' data-href={url} data-did={did}>
    {renderText(text)}
  </div>
;

export default render;
