class Rocks {
    constructor(ctx, x, y){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.r = SQUARE_SIZE/2;
        this.color = "#000";
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x + this.r, this.y + this.r, this.r, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
      }
}