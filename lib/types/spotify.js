import renderIframe from '../render-iframe';

export default ({ url, height = 80 }) => renderIframe({
  src: url, width: '100%', height,
});
