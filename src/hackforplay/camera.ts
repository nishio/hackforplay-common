import { default as enchant } from '../enchantjs/enchant';
import '../enchantjs/ui.enchant';
import '../enchantjs/fix';
import './rpg-kit-main';
import { default as Hack } from './hack';
import { default as game } from './game';
import RPGObject from './object/object';
import { clamp } from './utils/math-utils';
import * as N from './object/numbers';

type Vector2 = { x: number; y: number };
type Rect = { x: number; y: number; width: number; height: number };

class Camera extends enchant.Sprite {
  static collection: Camera[] = [];
  static main: Camera | null = null;

  x: number;
  y: number;

  background = '#000';

  enabled = true;
  target: RPGObject | null = null;
  center: Vector2 | null = null;
  clip = true;
  clipScaleFunction = Math.min;
  clamp = true;
  scale = 1;

  border = false;
  borderColor = '#000';
  borderLineWidth = 1;

  private numberLabels: any[] = [];

  constructor(x = 0, y = 0, w: number = game.width, h: number = game.height) {
    super(w, h);

    this.image = new enchant.Surface(w, h);

    this.x = x;
    this.y = y;

    // カメラにつけるラベル
    this.addNumberLabel('HP:', 'hp');

    Hack.cameraGroup.addChild(this);
    Camera.collection.push(this);
  }

  get w() {
    return this.width;
  }
  set w(value: number) {
    this.width = value;
  }

  get h() {
    return this.height;
  }
  set h(value: number) {
    this.height = value;
  }

  resize(w: number, h: number) {
    w = Math.ceil(w);
    h = Math.ceil(h);

    if (!w || !h) return;
    if (this.w === w && this.h === h) return;

    this._width = w;
    this._height = h;

    if (this.image) {
      this.image.width = w;
      this.image.height = h;
      this.image._element.width = w;
      this.image._element.height = h;
    }

    this.dispatchEvent(new enchant.Event(enchant.Event.RESIZE));

    return this;
  }

  getCenter() {
    // center 固定
    if (this.center) return this.center;

    // target
    if (this.target && this.target instanceof RPGObject) {
      return this.target.center;
    }

    // プレイヤー
    if (Hack.player && Hack.player instanceof RPGObject) {
      return Hack.player.center;
    }

    // マップの中心
    if (Hack.map) {
      const map = Hack.map;

      return {
        x: map.width / 2,
        y: map.height / 2
      };
    }

    // console.error('Camera#getCenter');
  }

  getScale() {
    // クリップしない
    if (!this.clipScaleFunction) return this.scale;

    const x = Hack.map.width / this.w;
    const y = Hack.map.height / this.h;

    const clip = this.clipScaleFunction(x, y);
    if (this.scale > clip) return clip;

    return this.scale;
  }

  // 描画範囲を取得する
  getRenderRect() {
    var center = this.getCenter();

    var x = center.x;
    var y = center.y;

    var scale = this.getScale();

    var w = this.width * scale;
    var h = this.height * scale;

    x -= w / 2;
    y -= h / 2;

    var rect = {
      x: x,
      y: y,
      width: w,
      height: h
    };

    if (this.clamp) rect = this.clampRect(rect);

    return rect;
  }

  // 描画範囲を画面に収める
  clampRect(rect: Rect) {
    const { w, h } = this.getVisionSize();

    var over = false;

    var _d_x = false;
    var _d_y = false;

    if (w < rect.width) {
      _d_x = true;
      rect.x = (rect.width - w) / 2;
    }
    if (h < rect.height) {
      _d_y = true;
      rect.y = (rect.height - h) / 2;
    }

    var b = false;

    if (w > Hack.map.width) {
      _d_x = true;
      rect.x = -(w - Hack.map.width) / 2;
    }

    if (h > Hack.map.height) {
      _d_y = true;
      rect.y = -(h - Hack.map.height) / 2;
    }

    if (over || b) {
      return rect;
    }

    if (!_d_x) rect.x = clamp(rect.x, 0.0, Hack.map.width - w);
    if (!_d_y) rect.y = clamp(rect.y, 0.0, Hack.map.height - h);

    return rect;
  }

  _rectScale(rect: Rect, scale: number) {
    rect.x *= scale;
    rect.y *= scale;
    rect.width *= scale;
    rect.height *= scale;
    return rect;
  }

  // スクリーン座標をゲーム内座標に変換する
  projection(screenX: number, screenY: number) {
    const renderRect = this.getRenderRect();
    return [
      renderRect.x + (screenX - this.x) * (renderRect.width / this.width),
      renderRect.y + (screenY - this.y) * (renderRect.height / this.height)
    ];
  }

  // カメラ上の座標を計算する
  getNodeRect(node: RPGObject) {
    var renderRect = this.getRenderRect();
    var scale = this.getScale();

    var x = node.x - renderRect.x;
    var y = node.y - renderRect.y;

    var rect = {
      x: x,
      y: y,
      width: node.width,
      height: node.height
    };

    return this._rectScale(rect, 1.0 / scale);
  }

  getVisionSize() {
    const scale = this.getScale();
    return {
      w: this.w * scale,
      h: this.h * scale
    };
  }

  zoom(value: number) {
    this.scale /= value;
  }

  borderStyle(lineWidth: number, color: string) {
    this.border = true;
    this.borderLineWidth = lineWidth;
    this.borderColor = color;
  }

  drawBorder() {
    if (!this.border) return;
    const context = this.image.context;
    context.strokeStyle = this.borderColor;
    context.lineWidth = this.borderLineWidth;
    context.strokeRect(0, 0, this.w, this.h);
  }

  render() {
    const context = this.image.context;

    var center = this.getCenter();

    if (!center) return;

    var x = center.x;
    var y = center.y;

    var rect = this.getRenderRect();
    var r = rect;

    if (this.background) {
      context.fillStyle = this.background;
      context.fillRect(0, 0, this.w, this.h);
    }

    this.image.context.drawImage(
      Hack.map._surface._element,

      r.x,
      r.y,
      r.width,
      r.height,
      0,
      0,
      this.w,
      this.h
    );

    this.drawBorder();
  }

  remove() {
    super.remove();
    Camera.collection = Camera.collection.filter(camera => {
      return camera !== this;
    });
  }

  _computeFramePosition() {
    // サイズが変更されたときに呼ばれる
    super._computeFramePosition();
    this.resize(this.w, this.h);
  }

  addNumberLabel(
    prefix: string,
    key: keyof N.INumbers,
    beforeAt?: keyof N.INumbers
  ) {
    const {
      ui: { ScoreLabel }
    } = <any>enchant;
    const label = new ScoreLabel(this.w, this.h); // 見えない位置で初期化
    label.label = prefix;
    label._key = key;
    label.onenterframe = () => {
      if (!this.target) return;
      label.score = this.target[key];
    };
    Hack.menuGroup.addChild(label);
    if (beforeAt) {
      // key をふくむラベルを探して途中に追加
      const index = this.numberLabels.findIndex(
        label => label._key === beforeAt
      );
      if (index > -1) {
        this.numberLabels.splice(index, 0, label);
      } else {
        this.numberLabels.push(label);
      }
    } else {
      this.numberLabels.push(label);
    }
    this.refreshNumberLabels();
    return label;
  }

  removeNumberLabel(key: keyof N.INumbers) {
    const index = this.numberLabels.findIndex(label => label._key === key);
    if (index > 0) {
      const [label] = this.numberLabels.splice(index, 1);
      label.remove();
      this.refreshNumberLabels();
    }
  }

  refreshNumberLabels() {
    let y = 10;
    for (const label of this.numberLabels) {
      label.moveTo(10, y);
      y += 32;
    }
  }
}

// カメラを並べる
Camera.arrange = function(
  x: number,
  y: number,
  border = true,
  filter?: (camera: Camera) => boolean
) {
  var for2d = function(
    x: number,
    y: number,
    callback: (a: number, b: number) => void
  ) {
    for (var a = 0; a < x; ++a) {
      for (var b = 0; b < y; ++b) {
        callback(a, b);
      }
    }
  };

  // 枠を表示する
  if (border) {
    Camera.collection.forEach(function(camera) {
      camera.border = true;
    });
  }

  // 並べるカメラだけ取得
  var index = 0;
  var cameras = Camera.collection.filter(
    filter ||
      function(camera) {
        return camera.enabled;
      }
  );

  // 再配置
  for2d(y, x, function(y2, x2) {
    if (index >= cameras.length) return;
    var camera = cameras[index++];

    camera.moveTo((game.width / x) * x2, (game.height / y) * y2);
    camera.resize(game.width / x, game.height / y);
  });
};

Camera.layout = Camera.arrange;

export default Camera;