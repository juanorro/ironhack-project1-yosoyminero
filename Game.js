class Game {
    constructor(ctx){
        this.ctx = ctx; 
        this.bg = new Background(ctx)
    }

    start(){
        this._draw()
    }

    _draw(){
        this.bg.draw();
    }
}