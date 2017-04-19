/* @flow */
import React from 'react';
import renderText from '../render-text';
import type { TextArrayType } from '../render-text';

type UserType = {
  // This is a known issue with eslint-plugin-react; it fails to notice usage of nested props.
  // See https://github.com/yannickcr/eslint-plugin-react/issues/816#issuecomment-294487511
  /* eslint-disable */
  name?: string,
  slug?: string,
  /* eslint-enable */
};

type TweetType = {
  url: string,
  text: TextArrayType,
  user: UserType,
  date: string,
};

type PropsType = {
  embedAs: string,
  url: string,
  text: TextArrayType,
  user: UserType,
  date: string,
};
const renderUser = (user: UserType) =>
  (user && user.name && user.slug
  ? `\u2014 ${user.name} (@${user.slug}) `
  : '');

const renderVideo = ({ text, url, date, user }: TweetType) =>
  (<blockquote className='twitter-video' data-lang='en'>
    <p lang='en' dir='ltr'>{renderText(text)}</p>
    {renderUser(user)}
    <a href={url}>{date}</a>
  </blockquote>);

const renderTweet = ({ text, url, date, user }: TweetType) =>
  (<blockquote className='twitter-tweet' data-lang='en'>
    <p lang='en' dir='ltr'>{renderText(text)}</p>
    {renderUser(user)}
    <a href={url}>{date}</a>
  </blockquote>);

const renderTypes = {
  video: renderVideo,
  tweet: renderTweet,
};

export default (opts: PropsType) => (renderTypes[opts.embedAs]
  ? renderTypes[opts.embedAs](opts)
  : renderTypes.tweet(opts));
