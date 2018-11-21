import { default as RPGObject } from './object/object';
import * as synonyms from './synonyms';
import { default as Family } from './family';

const checked = new WeakSet();

export default function deprecated() {
  let message = '';
  for (const item of [...RPGObject.collection]) {
    if (checked.has(item)) continue;
    message += checkEvents(item);
    message += checkFamily(item);
    checked.add(item);
  }
  return message;
}

const deprecatedEvents = ['playerenter', 'playerstay', 'playerexit'];
const deprecatedEventsJp = [
  synonyms.events.playerenter,
  synonyms.events.playerstay,
  synonyms.events.playerexit
];

/**
 * 下記のイベントが利用されていたら, コンソールにエラーを出す
 * playerenter, playerstay, playerexit
 */
function checkEvents(item: RPGObject) {
  // for Japanese (synonym)
  for (const type of deprecatedEventsJp) {
    if (isListening(item, type)) {
      return `Deprecated: '${type}' は廃止予定です. 代わりに 'ふまれた' か 'どかれた' を使ってください`;
    }
  }
  // for English (origin)
  for (const type of deprecatedEvents) {
    if (isListening(item, type)) {
      return `Deprecated: '${type}' is deprecated. Please use 'addtrodden' or 'removetrodden' instead.`;
    }
  }
  return '';
}

/**
 * Family.エネミー は廃止して Family.モンスターを代わりに使う
 */
function checkFamily(item: RPGObject) {
  if (item.family === Family.エネミー) {
    return 'Family.エネミー ではなく Family.モンスター を使ってください';
  }
  return '';
}

function isListening(item: RPGObject, type: string) {
  return item['on' + type] || item._listeners[type];
}
