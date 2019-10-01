class Background {
    constructor (ctx) {
        this.ctx = ctx,
        this.x = 0,
        this.y = 0,
        this.w = this.ctx.canvas.width,
        this.h = this.ctx.canvas.height,
        this.ground = new Ground(ctx)
    }

    draw(){
        this.ctx.ground.draw()
    }
}