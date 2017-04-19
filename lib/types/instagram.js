/* @flow */
/* eslint-disable max-len */
import React from 'react';

const blockquoteStyle = {
  background: '#FFF',
  border: 0,
  borderRadius: '3px',
  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
  margin: '1px',
  maxWidth: '658px',
  padding: 0,
  width: 'calc(100% - 2px)',
};

const wrapperStyle = {
  padding: '8px',
};

const innerStyle = {
  background: '#F8F8F8',
  lineHeight: 0,
  marginTop: '40px',
  padding: '50.0% 0',
  textAlign: 'center',
  width: '100%',
};

const backgroundStyle = {
  background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAGFBMVEUiIiI9PT0eHh4gIB4hIBkcHBwcHBwcHBydr+JQAAAACHRSTlMABA4YHyQsM5jtaMwAAADfSURBVDjL7ZVBEgMhCAQBAf//42xcNbpAqakcM0ftUmFAAIBE81IqBJdS3lS6zs3bIpB9WED3YYXFPmHRfT8sgyrCP1x8uEUxLMzNWElFOYCV6mHWWwMzdPEKHlhLw7NWJqkHc4uIZphavDzA2JPzUDsBZziNae2S6owH8xPmX8G7zzgKEOPUoYHvGz1TBCxMkd3kwNVbU0gKHkx+iZILf77IofhrY1nYFnB/lQPb79drWOyJVa/DAvg9B/rLB4cC+Nqgdz/TvBbBnr6GBReqn/nRmDgaQEej7WhonozjF+Y2I/fZou/qAAAAAElFTkSuQmCC)',
  display: 'block',
  height: '44px',
  margin: '0 auto -44px',
  position: 'relative',
  top: '-22px',
  width: '44px',
};

const pStyle = {
  color: '#c9c8cd',
  fontFamily: 'Arial,sans-serif',
  fontSize: '14px',
  lineHeight: '17px',
  marginBottom: 0,
  marginTop: '8px',
  overflow: 'hidden',
  padding: '8px 0 7px',
  textAlign: 'center',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

const captionLinkStyle = {
  color: '#000',
  fontFamily: 'Arial,sans-serif',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 'normal',
  lineHeight: '17px',
  textDecoration: 'none',
  wordWrap: 'break-word',
};

const linkWrapperStyle = {
  margin: '8px 0 0 0',
  padding: '0 4px',
};

const noCaptionLinkStyle = {
  color: '#c9c8cd',
  fontFamily: 'Arial,sans-serif',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 'normal',
  lineHeight: '17px',
  textDecoration: 'none',
};

const timeStyle = {
  fontFamily: 'Arial,sans-serif',
  fontSize: '14px',
  lineHeight: '17px',
};

type UserType = {
  // This is a known issue with eslint-plugin-react; it fails to notice usage of nested props.
  // See https://github.com/yannickcr/eslint-plugin-react/issues/816#issuecomment-294487511
  /* eslint-disable */
  slug: string,
  name: string,
  /* eslint-enable */
};

type DateType = {
  // This is a known issue with eslint-plugin-react.
  // See https://github.com/yannickcr/eslint-plugin-react/issues/816#issuecomment-294487511
  /* eslint-disable */
  utc: string,
  string: string,
  /* eslint-enable */
};

type WithoutCaptionType = {
  url: string,
  user: UserType,
  date: DateType,
};

type WithCaptionType = WithoutCaptionType & {
  text: string,
};

type PropsType = WithoutCaptionType & {
  text?: string,
};

const renderWithCaption = ({ url, text, user, date }: WithCaptionType) =>
  (<blockquote className='instagram-media' data-instgrm-captioned={true} data-instgrm-version='6' style={blockquoteStyle}>
    <div style={wrapperStyle}>{' '}
      <div style={innerStyle}>{' '}
        <div style={backgroundStyle} />
      </div>{' '}
      <p style={linkWrapperStyle}>{' '}
        <a href={url} style={captionLinkStyle} target='_blank' rel='noopener noreferrer'>
          {text}
        </a>
      </p>{' '}
      <p style={pStyle}>
        A photo posted by {user.name} (@{user.slug}) on <time style={timeStyle} dateTime={date.utc}>{date.string}</time>
      </p>
    </div>
  </blockquote>);

const renderWithoutCaption = ({ url, user, date }: WithoutCaptionType) =>
  (<blockquote className='instagram-media' data-instgrm-version='6' style={blockquoteStyle}>
    <div style={wrapperStyle}>{' '}
      <div style={innerStyle}>{' '}
        <div style={backgroundStyle} />
      </div>
      <p style={pStyle}>
        <a href={url} style={noCaptionLinkStyle} target='_blank' rel='noopener noreferrer'>
        A photo posted by {user.name} (@{user.slug})</a> on <time style={timeStyle} dateTime={date.utc}>{date.string}</time>
      </p>
    </div>
  </blockquote>);

export default ({ url, text, user, date }: PropsType) =>
  (text ? renderWithCaption({ url, text, user, date }) : renderWithoutCaption({ url, user, date }));
