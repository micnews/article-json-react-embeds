import renderIframe from '../render-iframe';

export default ({ youtubeId, width = 640, height = 360 }) => renderIframe({
  src: `https://www.youtube.com/embed/${youtubeId}`,
  width,
  height,
  allowFullscreen: true,
});
