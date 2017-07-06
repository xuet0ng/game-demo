/**
 * 猪脚，在这里定义，可以move，可以发射子弹
 */
class Actor extends egret.Sprite {
    public constructor() {
        super();
        this.createActor();
    }

    private createActor(): void {
        this.graphics.beginFill(0xff69b4);
        this.graphics.drawRect(0, 0, 50, 50);
        this.graphics.endFill();
    }
}