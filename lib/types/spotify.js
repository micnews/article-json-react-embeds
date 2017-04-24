/* @flow */
import renderIframe from '../render-iframe';

type PropsType = {
  url: string,
  height?: number,
};
export default ({ url, height = 80 }: PropsType) => renderIframe({
  src: url, width: '100%', height,
});
