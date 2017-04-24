/* @flow */
import React from 'react';

type TextItemType = {
  content: string,
  href?: string,
};

export type TextArrayType = Array<TextItemType>;

export default (text?: TextArrayType) =>
  (text || []).map(({ content, href }, index) =>
    (href
    ? <a href={href} key={index}>{content}</a>
    : content),
  );
