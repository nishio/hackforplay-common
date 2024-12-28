# common

Common package for building stages in hackforplay

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm latest version](https://img.shields.io/npm/v/@hackforplay/common/latest.svg)](https://www.npmjs.com/package/@hackforplay/common)

# 開発環境のセットアップと動作確認

## セットアップ手順

- `npm install`
- `npm start`

## 動作確認手順

1. [HackforPlay](https://www.hackforplay.xyz/)にアクセスし、新しいステージを作成
   - ログインは不要です
   - 新しいステージを作成すると、Web IDEが起動します

2. Web IDEでimport文を変更
   ```javascript
   // 変更前
   import 'https://cdn.hackforplay.xyz/common/0.46/register.min.js';

   // 変更後
   import 'http://localhost:8080/register.js';
   ```
   ※ 開発中は非minifyバージョン（register.js）を使用することで、デバッグがしやすくなります

3. 動作確認のポイント
   - Playボタンを押してゲームを実行
   - 指のアイコンが表示された場合は、ゲーム画面をクリックして初期化を完了
   - プレイヤーキャラクターが表示され、動作することを確認
   - HP、MONEY、TIMEなどのゲームUIが正常に表示されることを確認

# Deploy

- `git push origin`
- Then start automatic deploying via [semantic-release](https://github.com/semantic-release/semantic-release)

or manual deploy

- `npx np`
- Then start interactive shell via [np](https://github.com/sindresorhus/np)
