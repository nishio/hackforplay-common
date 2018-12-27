import SAT from '../../lib/sat.min';

export interface IVector2 {
  x: number;
  y: number;
}

export default class Vector2 implements IVector2 {
  x = 0;
  y = 0;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  set(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  clone() {
    return new Vector2(this.x, this.y);
  }

  add(vec: IVector2) {
    return new Vector2(this.x + vec.x, this.y + vec.y);
  }

  subtract(vec: IVector2) {
    return new Vector2(this.x - vec.x, this.y - vec.y);
  }

  scale(scalar: number) {
    return new Vector2(this.x * scalar, this.y * scalar);
  }

  dot(vec: IVector2) {
    return this.x * vec.x + this.y + vec.y;
  }

  moveTowards(vec: Vector2, t: number) {
    // Linearly interpolates between vectors A and B by t.
    // t = 0 returns A, t = 1 returns B
    t = Math.min(t, 1); // still allow negative t
    const diff = vec.subtract(this);
    return this.add(diff.scale(t));
  }

  magnitude() {
    return Math.sqrt(this.magnitudeSqr());
  }

  magnitudeSqr() {
    return this.x * this.x + this.y * this.y;
  }

  distance(vec: IVector2) {
    return Math.sqrt(this.distanceSqr(vec));
  }

  distanceSqr(vec: IVector2) {
    const deltaX = this.x - vec.x;
    const deltaY = this.y - vec.y;
    return deltaX * deltaX + deltaY * deltaY;
  }

  normalize() {
    const mag = this.magnitude();
    const vector = this.clone();
    if (Math.abs(mag) < 1e-9) {
      vector.x = 0;
      vector.y = 0;
    } else {
      vector.x /= mag;
      vector.y /= mag;
    }
    return vector;
  }

  angle() {
    return Math.atan2(this.y, this.x);
  }

  rotate(rad: number) {
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const vector = new Vector2();
    vector.x = this.x * cos - this.y * sin;
    vector.y = this.x * sin + this.y * cos;
    return vector;
  }

  /**
   * ベクトルを指定された角度だけ回転させる
   * XY座標系で回転行列を適用するが, Canvas 座標系は Y が反転しているため
   * 見た目上は「時計回りに回転する」ことになる
   * @param deg 度数法による角度
   */
  rotateDegree(deg: number) {
    return this.rotate((deg / 180) * Math.PI);
  }

  cross(vec: IVector2) {
    return this.x * vec.y - vec.x * this.y;
  }

  toSAT() {
    return new SAT.Vector(this.x, this.y);
  }

  unit() {
    return Math.abs(this.x) >= Math.abs(this.y)
      ? this.x >= 0
        ? new Vector2(1, 0)
        : new Vector2(-1, 0)
      : this.y >= 0
      ? new Vector2(0, 1)
      : new Vector2(0, -1);
  }

  unit8() {
    if (this.x === 0 && this.y === 0) return new Vector2(1, 0);
    return new Vector2(Math.sign(this.x), Math.sign(this.y));
  }

  static from(vec: IVector2) {
    return new Vector2(vec.x, vec.y);
  }

  static equal(a: IVector2, b: IVector2) {
    return a.x === b.x && a.y === b.y;
  }
}
