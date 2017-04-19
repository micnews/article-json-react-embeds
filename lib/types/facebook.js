/* @flow */
/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import renderText from '../render-text';
import type { TextArrayType } from '../render-text';

type UserType = {
  // This is a known issue with eslint-plugin-react; it fails to notice usage of nested props.
  // See https://github.com/yannickcr/eslint-plugin-react/issues/816#issuecomment-294487511
  /* eslint-disable */
  url: string,
  name: string,
  /* eslint-ensable */
};

type VideoPropsType = {
  url: string,
  text: TextArrayType,
  date: string,
  user: UserType,
  headline: string,
};

type PostPropsType = {
  url: string,
  user: string,
  text: TextArrayType,
  date: string,
};

type PropsType = {
  embedAs: 'video',
  url: string,
  text: TextArrayType,
  date: string,
  user: UserType,
  headline: string,
} | {
  embedAs: 'post' | 'photo',
  url: string,
  user: string,
  text: TextArrayType,
  date: string,
};

const renderVideo = ({ url, user, text, headline, date }: VideoPropsType) =>
  (<div className='fb-video' data-allowfullscreen='1' data-href={url}>
    <div className='fb-xfbml-parse-ignore'>
      <blockquote cite={url}>
        <a href={user.name}>{headline}</a>
        <p>{renderText(text)}</p>
        Posted by <a href={user.url}>{user.name}</a> on {date}
      </blockquote>
    </div>
  </div>);


const renderPost = ({ url, user, date, text }: PostPropsType) =>
  (<div className='fb-post' data-href={url} data-width='500'>
    <div className='fb-xfbml-parse-ignore'>
      <blockquote cite={url}>
        <p>{renderText(text)}</p>
        Posted by <a href='#' role='button'>{user}</a> on <a href={url}>{date}</a>
      </blockquote>
    </div>
  </div>);

export default (opts: PropsType) => {
  if (opts.embedAs === 'video') {
    return renderVideo(opts);
  }
  return renderPost(opts);
};
