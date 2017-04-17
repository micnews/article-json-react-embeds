import React from 'react';
import renderText from '../render-text';

const renderUser = user =>
  (user && user.name && user.slug
  ? `\u2014 ${user.name} (@${user.slug}) `
  : '');

const renderVideo = ({ text, url, date, user }) =>
  (<blockquote className='twitter-video' data-lang='en'>
    <p lang='en' dir='ltr'>{renderText(text)}</p>
    {renderUser(user)}
    <a href={url}>{date}</a>
  </blockquote>);

const renderTweet = ({ text, url, date, user }) =>
  (<blockquote className='twitter-tweet' data-lang='en'>
    <p lang='en' dir='ltr'>{renderText(text)}</p>
    {renderUser(user)}
    <a href={url}>{date}</a>
  </blockquote>);

renderVideo.propTypes = renderTweet.propTypes = {
  text: React.PropTypes.string,
  url: React.PropTypes.string,
  user: React.PropTypes.string,
  date: React.PropTypes.string,
};

const renderTypes = {
  video: renderVideo,
  tweet: renderTweet,
};

export default opts => (renderTypes[opts.embedAs]
  ? renderTypes[opts.embedAs](opts)
  : renderTypes.tweet(opts));
