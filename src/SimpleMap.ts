class SimpleMap extends egret.Sprite {
    public constructor(h: number, w: number) {
        super();
        this.createMap(h, w);
    }

    private createMap(h: number, w: number): void {
        this.graphics.beginFill(0xfaebD7);
        this.graphics.drawRect(0, 0, w, h);
        this.graphics.endFill();
    }
}