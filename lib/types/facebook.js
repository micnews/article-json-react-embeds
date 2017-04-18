/* eslint-disable jsx-a11y/href-no-hash, react/forbid-prop-types */
import React from 'react';
import renderText from '../render-text';

const userType = React.PropTypes.shape({
  url: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
});

const renderVideo = ({ url, user, text, headline, date }) =>
  (<div className='fb-video' data-allowfullscreen='1' data-href={url}>
    <div className='fb-xfbml-parse-ignore'>
      <blockquote cite={url}>
        <a href={url}>{headline}</a>
        <p>{renderText(text)}</p>
        Posted by <a href={user.url}>{user.name}</a> on {date}
      </blockquote>
    </div>
  </div>);

renderVideo.propTypes = {
  url: React.PropTypes.string.isRequired,
  user: userType,
  text: React.PropTypes.array,
  headline: React.PropTypes.string,
  date: React.PropTypes.string,
};

const renderPost = ({ url, user, date, text }) =>
  (<div className='fb-post' data-href={url} data-width='500'>
    <div className='fb-xfbml-parse-ignore'>
      <blockquote cite={url}>
        <p>{renderText(text)}</p>
        Posted by <a href='#' role='button'>{user}</a> on <a href={url}>{date}</a>
      </blockquote>
    </div>
  </div>);

renderPost.propTypes = {
  url: React.PropTypes.string.isRequired,
  user: userType,
  text: React.PropTypes.array,
  date: React.PropTypes.string,
};

const renderTypes = {
  video: renderVideo,
  post: renderPost,
  photo: renderPost,
};

export default opts => (renderTypes[opts.embedAs]
  ? renderTypes[opts.embedAs](opts)
  : renderTypes.post(opts));
