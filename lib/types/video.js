/* @flow */
import React from 'react';

type SourcePropsType = {
  src: string,
  type: string,
};

type PropsType = {
  sources: Array<SourcePropsType>,
  width: number,
  height: number,
};

const renderSource = ({ src, type: sourceType }: SourcePropsType, index) =>
  <source src={src} type={sourceType} key={index} />;

const render = ({ sources, width, height }: PropsType) =>
  <video width={width} height={height}>
    {sources.map(renderSource)}
  </video>;

export default render;
