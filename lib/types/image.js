/* @flow */
import React from 'react';

type PropsType = {
  src: string,
  alt?: string,
  width?: number,
  height?: number,
};

const Component = ({ src, alt, width, height }: PropsType) =>
  <img src={src} alt={alt} width={width} height={height} />;

export default Component;
