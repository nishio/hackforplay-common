import test from 'ava';

test('Import as a module and initialize game', t => {
	const { enchant, Hack, register } = require('../src/');
	const game = enchant.Core.instance;
	t.truthy(game);

	register(global);

	const gameOnLoad = require('./helpers/game').default;
	const hackOnLoad = require('./helpers/maps').default;

	game.onload = async () => {
		// gameOnLoad より先に実行するイベント
		// lifelabel などが gameOnLoad 時に参照できない対策
		game.dispatchEvent(new enchant.Event('awake'));

		await gameOnLoad();

		// Hack.player がないとき self.player を代わりに入れる
		if (self.player && !Hack.player) {
			Hack.player = self.player;
		}
		t.pass('game.onload');
	};
	Hack.onload = async () => {
		// Hack.maps を事前に作っておく
		Hack.maps = Hack.maps || {};
		await hackOnLoad();
		t.pass('Hack.onload');
	};

	// game.onload と Hack.onload がどちらも終了すればパス
	t.plan(2);

	// ゲームスタート
	Hack.start();
});
