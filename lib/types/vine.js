/* @flow */
import renderIframe from '../render-iframe';

type PropsType = {
  url: string,
  size?: number,
};
export default({ url, size = 600 }: PropsType) => renderIframe({
  src: url, width: size, height: size,
});
