export default class Point2D {
  constructor(public x: number, public y: number) {}

  directionTo(point: Point2D): Point2D {
    return new Point2D(point.x - this.x, point.y - this.y);
  }

  directionFrom(point: Point2D): Point2D {
    return new Point2D(this.x - point.x, this.y - point.y);
  }
}
