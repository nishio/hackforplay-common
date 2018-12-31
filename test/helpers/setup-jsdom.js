import { JSDOM } from 'jsdom';
import register from './timers';

const window = new JSDOM().window;

window.focus = () => {};
window.Map = global.Map; // https://github.com/hackforplay/common/issues/10
register(window);

const exclude = ['localStorage', 'sessionStorage'];

for (const key of Object.getOwnPropertyNames(window)) {
  if (key in global) continue; // conflict
  if (exclude.includes(key)) continue; // exclude
  global[key] = window[key];
}
