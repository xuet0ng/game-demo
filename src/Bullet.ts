/**
 * 子弹, BiuBiuBiu~
 */
class Bullet extends egret.Sprite {
    public constructor(x: number, y: number) {
        super();
        this.createActor(x, y);
    }

    private createActor(x, y): void {
        this.graphics.beginFill(0xff69b4);
        this.graphics.drawCircle(x, y, 5);
        this.graphics.endFill();
    }
}