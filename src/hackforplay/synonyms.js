export const assets = [
  /* Hack.assets.knight === self._kきし === Skin.ナイト */
  ['magician', '_mまじょ', 'ウィッチ'],
  ['knight', '_kきし', 'ナイト'],
  ['darkKnight', '_aあんこくきし', 'ダークナイト'],
  ['slime', '_sスライム', 'スライム'],
  ['insect', '_iいもむし', 'イモムシ'],
  ['spider', '_kくも', 'クモ'],
  ['bat', '_kこうもり', 'コウモリ'],
  ['dragon', '_dドラゴン', 'ドラゴン'],
  ['minotaur', '_mミノタウルス', 'ミノタウルス'],
  ['boy', '_o男の子', 'ボーイ'],
  ['girl', '_o女の子', 'ガール'],
  ['woman', '_o女の人', 'ウーマン'],
  ['enchantBookItem', '_m魔道書', 'マドウショ'],
  ['explosion', '_bばくえん', 'バクエン'],
  ['ouroboros', '_uウロボロス', 'ウロボロス'],
  ['beam', '_bビーム', 'ビーム'],
  ['downStair', '_kくだりかいだん', 'クダリカイダン'],
  ['upStair', '_nのぼりかいだん', 'ノボリカイダン'],
  ['warp', '_wワープ', 'ワープ'],
  ['castle', '_sしろ', 'キャッスル'],
  ['flower', '_hはな', 'フラワー'],
  ['ruby', '_rルビー', 'ルビー'],
  ['trap', '_wわな', 'トラップ'],
  ['usedTrap', '_wわなかかった', 'トラップ2'],
  ['heart', '_hハート', 'ハート'],
  ['tree', '_k木', 'ツリー'],
  ['rock', '_iいわ', 'ロック'],
  ['clayWall', '_tつちかべ', 'クレイ'],
  ['stoneWall', '_iいしかべ', 'ストーン'],
  ['box', '_tたからばこ', 'トレジャーボックス'],
  ['openedBox', '_tたからばこひらいた', 'トレジャーボックス2'],
  ['skull', '_dドクロ', 'ドクロ'],
  ['poo', '_uうんこ', 'ウンコ'],
  ['pot', '_tつぼ', 'ツボ'],
  ['diamond', '_dダイヤモンド', 'ダイヤモンド'],
  ['magic', '_mまほうじん', 'マホウジン'],
  ['usedMagic', '_mまほうじんひかった', 'マホウジン2'],
  ['coin', '_kコイン', 'コイン'],
  ['sapphire', '_sサファイア', 'サファイア'],
  ['star', '_hほし', 'スター'],
  ['key', '_kかぎ', 'キー'],
  ['bomb', '_bばくだん', 'ボム']
];

export const events = {
  playerenter: 'のった', // Deprecated
  playerstay: 'いる', // Deprecated
  playerexit: 'おりた', // Deprecated
  walkstart: 'あるきはじめた',
  walkmove: 'あるいている',
  walkend: 'あるきおわった',
  triggerenter: 'ふれはじめた',
  triggerstay: 'ふれつづけている',
  triggerexit: 'ふれおわった',
  collided: 'ぶつかった',
  hpchange: 'HPかわった',
  becomeidle: 'とまるとき',
  becomewalk: 'あるくとき',
  becomeattack: 'こうげきするとき',
  becomedamaged: 'くらったとき',
  becomedead: 'たおれたとき',
  addtrodden: 'ふまれた',
  removetrodden: 'どかれた',
  attacked: 'こうげきされた',
  enterframe: 'つねに'
};
