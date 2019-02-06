import { default as Hack } from './hack';

const audioData: { [key: string]: string } = {
  あわ01: 'bubble01.mp3',
  きぬずれ01: 'cloth01.mp3',
  きぬずれ02: 'cloth02.mp3',
  かいふく01: 'cure01.mp3',
  かいふく02: 'cure02.mp3',
  ダメージ01: 'damage01.mp3',
  ダメージ02: 'damage02.mp3',
  ダメージ03: 'damage03.mp3',
  ダメージ04: 'damage04.mp3',
  ぶきみ01: 'darkness01.mp3',
  ぶきみ02: 'darkness02.mp3',
  やられた01: 'death01.mp3',
  やられた02: 'death02.mp3',
  はずれ01: 'error01.mp3',
  ばくはつ01: 'explosion01.mp3',
  ばくはつ02: 'explosion02.mp3',
  ばくはつ03: 'explosion03.mp3',
  ばくはつ04: 'explosion04.mp3',
  ばくはつ05: 'explosion05.mp3',
  おちる01: 'fall01.mp3',
  ほのお01: 'fire01.mp3',
  ほのお02: 'fire02.mp3',
  ほのお03: 'fire03.mp3',
  ゲームオーバー01: 'gameover01.mp3	',
  ゲームオーバー02: 'gameover02.mp3	',
  まほう01: 'magic01.mp3',
  まほう02: 'magic02.mp3',
  まほう03: 'magic03.mp3',
  まほう04: 'magic04.mp3',
  おかね01: 'money01.mp3',
  おかね02: 'money02.mp3',
  おかね03: 'money03.mp3',
  パワーダウン01: 'powerdown01.mp3	',
  パワーダウン02: 'powerdown02.mp3	',
  パワーダウン03: 'powerdown03.mp3	',
  パワーダウン04: 'powerdown04.mp3	',
  パワーアップ01: 'powerup01.mp3',
  パワーアップ02: 'powerup02.mp3',
  パワーアップ03: 'powerup03.mp3',
  パワーアップ04: 'powerup04.mp3',
  パワーアップ05: 'powerup05.mp3',
  にげる01: 'revive01.mp3',
  なぞとき01: 'secret01.mp3',
  ビーム01: 'shoot01.mp3',
  ビーム02: 'shoot02.mp3',
  ビーム03: 'shoot03.mp3',
  ビーム04: 'shoot04.mp3',
  ビーム05: 'shoot05.mp3',
  かたな01: 'slice01.mp3',
  じゅもん01: 'spell01.mp3',
  せいかい01: 'succes01.mp3',
  せいかい02: 'succes02.mp3',
  せいかい03: 'succes03.mp3',
  せいかい04: 'succes04.mp3',
  あせ01: 'sweat01.mp3',
  けんをふる01: 'swing01.mp3',
  けんをふる02: 'swing02.mp3',
  けんをふる03: 'swing03.mp3',
  けんをふる04: 'swing04.mp3',
  テレポート01: 'teleport01.mp3',
  テレポート02: 'teleport02.mp3',
  たおれる01: 'thud01.mp3',
  むち01: 'whip01.mp3',
  まじょ01: 'witch01.mp3'
};

export default function seFileName(audioName: string) {
  const data = audioName;
  var fileName = audioData[data];
  if (fileName === undefined) {
    Hack.log(`'${audioName}' という名前の おと は ないみたい`);
  }
  return fileName;
}
