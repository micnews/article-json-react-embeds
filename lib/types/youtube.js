/* @flow */
import renderIframe from '../render-iframe';

type PropsType = {
  youtubeId: string,
  width?: number,
  height?: number,
};
export default ({ youtubeId, width = 640, height = 360 }: PropsType) => renderIframe({
  src: `https://www.youtube.com/embed/${youtubeId}`,
  width,
  height,
  allowFullscreen: true,
});
