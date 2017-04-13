import test from 'tapava';
import renderEmbeds from '../lib';

test('test', (t) => {
  const actual = renderEmbeds();
  t.is(actual, 'not implemented');
});
