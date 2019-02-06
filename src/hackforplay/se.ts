import { default as Hack } from './hack';

const feeles = (<any>window).feeles;
const data: { [key: string]: AudioBuffer | null | undefined } = {};
const audioCtx = new AudioContext();
Hack.seBaseUrl = 'https://storage.googleapis.com/hackforplay-sounds/';

export default async function soundEffect(jpName: string, fileName: string) {
  const audioSource = data[jpName];
  if (audioSource === null) {
    return;
  }
  if (audioSource === undefined) {
    var source = audioCtx.createBufferSource(); // source を作成
    var gainNode = audioCtx.createGain();

    const url = `${Hack.seBaseUrl}${fileName}`;
    const audioData: ArrayBuffer = await feeles.fetchArrayBuffer(url);

    // array buffer を audio buffer に変換
    audioCtx.decodeAudioData(
      audioData,
      function(buffer) {
        data[jpName] = buffer;
        source.buffer = buffer; // buffer をセット
        source.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        gainNode.gain.value = 0.3;
      },

      function(e) {
        feeles.throwError(e);
      }
    );
    source.start();
  } else {
    // ロード済
    var source = audioCtx.createBufferSource(); // source を作成
    var gainNode = audioCtx.createGain();
    source.buffer = audioSource;
    source.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    gainNode.gain.value = 0.3;
    source.start();
  }
}
