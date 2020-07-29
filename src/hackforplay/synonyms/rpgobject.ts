import { ISynonyms } from './synonymize';

export const synonyms: ISynonyms = {
  こうげきりょく: { type: 'primitive', name: 'atk' },
  // ばしょ: { type: 'primitive', name: 'location'},
  マップ: { type: 'primitive', name: 'mapName' },
  ひだりから: { type: 'primitive', name: 'mapX' },
  うえから: { type: 'primitive', name: 'mapY' },
  おかね: { type: 'primitive', name: 'money' },
  みえやすさ: { type: 'primitive', name: 'opacity' },
  ぶつかるか: { type: 'primitive', name: 'collisionFlag' },
  かんつうするかいすう: { type: 'primitive', name: 'penetrate' },
  たいりょく: { type: 'primitive', name: 'hp' },
  なにをしているか: { type: 'primitive', name: 'behavior' },
  ベクトル: { type: 'primitive', name: 'forward' },
  むき: { type: 'primitive', name: 'direction' },
  なかま: { type: 'primitive', name: 'family' },
  ダメージ: { type: 'primitive', name: 'damage' },
  あるくはやさ: { type: 'primitive', name: 'speed' },
  マップのはしにぶつかるか: { type: 'primitive', name: 'collideMapBoader' },
  たいりょくがみえるか: { type: 'primitive', name: 'showHpLabel' },
  なまえ: { type: 'primitive', name: 'name' },
  スキル: { type: 'primitive', name: 'skill' },
  みえるはんい: { type: 'primitive', name: 'fieldOfView' },
  みえるきょり: { type: 'primitive', name: 'lengthOfView' },
  むてきか: { type: 'primitive', name: 'isInvincible' },
  おや: { type: 'primitive', name: 'parent' },
  みためのはば: { type: 'primitive', name: 'scaleX' },
  みためのたかさ: { type: 'primitive', name: 'scaleY' },
  むてきじかん: { type: 'primitive', name: 'attackedDamageTime' },
  うごけない: { type: 'primitive', name: 'frozen' },
  こうげきする: { type: 'function', name: 'attack', await: true },
  あるく: { type: 'function', name: 'walk', await: true },
  みぎにあるく: { type: 'function', name: 'walkRight', await: true },
  ひだりにあるく: { type: 'function', name: 'walkLeft', await: true },
  いく: { type: 'function', name: 'locate' },
  まつ: { type: 'function', name: 'wait', await: true },
  しょうかんする: { type: 'function', name: 'summon' },
  へんしんする: { type: 'function', name: 'transform' },
  みつける: { type: 'function', name: 'find', await: true },
  てきをみつける: { type: 'function', name: 'findEnemy', await: true },
  とんでいく: { type: 'function', name: 'flyToward' },
  おとをならす: { type: 'function', name: 'se', await: true },
  はなす: { type: 'function', name: 'talk', await: true },
  みためをかえる: { type: 'function', name: 'costume', await: true },
  メッセージする: { type: 'function', name: 'message' },
  きえる: { type: 'function', name: 'destroy' },
  おいかける: { type: 'function', name: 'chase', await: true },
  ふりむく: { type: 'function', name: 'faceTo' },
  テレポートランダム: { type: 'function', name: 'teleportRandom' },
  むきをかえる: { type: 'function', name: 'turn' },
  は: { type: 'function', name: 'is' },
  てきかどうか: { type: 'function', name: 'isEnemy' },
  うかべる: { type: 'function', name: 'think', await: true }
};
