/* @flow */
import React from 'react';

type PropsType = {
  dataType: string,
  dataId: string,
};

const render = ({ dataType, dataId }: PropsType) =>
  <div className='tidal-embed' data-type={dataType} data-id={dataId} />
;

export default render;
