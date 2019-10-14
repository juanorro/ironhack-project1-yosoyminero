class Background {
    constructor (ctx) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.w = this.ctx.canvas.width;
        this.h = this.ctx.canvas.height;

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