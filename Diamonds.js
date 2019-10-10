class Diamonds {
    constructor (ctx, x, y){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = SQUARE_SIZE,
        this.h = SQUARE_SIZE,
        this.color = "#0F54F1",
        this.shouldDelete = false
    }
    draw() {
        this.ctx.fillStyle = this.color,
        this.ctx.fillRect(
            this.x, 
            this.y,
            this.w,
            this.h
            )
    }

    collide(miner){
        return miner.x === this.x && miner.y === this.y
    }
}