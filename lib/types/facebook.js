/* @flow */
/* eslint-disable jsx-a11y/href-no-hashs */
import React from 'react';
import renderText from '../render-text';
import type { TextArrayType } from '../render-text';

type UserType = {
  url: string,
  name: string,
};

type VideoPropsType = {
  url: string,
  user: UserType,
  text: TextArrayType,
  headline?: string,
  date?: string,
};

type PostPropsType = {
  url: string,
  user: UserType,
  text: TextArrayType,
  date?: string,
};

type PropsType = {
  embedAs: string,
  url: string,
  user: UserType,
  text: TextArrayType,
  headline?: string,
  date?: string,
};

const renderVideo = ({ url, user, text, headline, date }: VideoPropsType) =>
  (<div className='fb-video' data-allowfullscreen='1' data-href={url}>
    <div className='fb-xfbml-parse-ignore'>
      <blockquote cite={url}>
        <a href={url}>{headline}</a>
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

const renderTypes = {
  video: renderVideo,
  post: renderPost,
  photo: renderPost,
};

export default (opts: PropsType) => (renderTypes[opts.embedAs]
  ? renderTypes[opts.embedAs](opts)
  : renderTypes.post(opts));
