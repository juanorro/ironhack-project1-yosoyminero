class Background {
    constructor (ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = SQUARE_SIZE;
        this.h = SQUARE_SIZE;

        this.img = new Image();
        this.img.src = "img/ground-bg.png";
        this.img.frames = 1; 
        this.img.frameIndex = 0;
    }

    draw(){
        this.ctx.drawImage(
            this.img,
            0,
            this.img.frameIndex * this.img.height /this.img.frames,
            this.img.width,
            this.img.height / this.img.frames,
            this.x,
            this.y,
            this.w,
            this.h
          )
    }
}