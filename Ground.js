class Ground {
    constructor (ctx){
        this.ctx = ctx;
        this.w = 10,
        this.h = 10,
        this.color = "#804000"
    }
}

draw() {
    this.ctx.fillStyle = this.color,
    this.fillRect(
        this.ctx.w,
        this.ctx.h
        )
};