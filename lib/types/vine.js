import renderIframe from '../render-iframe';

export default({ url, size = 600 }) => renderIframe({
  src: url, width: size, height: size,
});
