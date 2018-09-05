import test from 'ava';
import '@babel/polyfill';

test('Bundled js exports register, Hack and enchant', t => {
    const { register, Hack, enchant } = require('../dist/main');
    t.is(typeof register, 'function');
    t.is(typeof Hack, 'object');
    t.is(typeof enchant, 'function');
});