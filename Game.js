class Game {
    constructor(ctx){
        this.ctx = ctx; 
        this.bg = new Background(ctx);
        this.grounds = MAPS[1].grounds.map(ground => {
            return new Ground(this.ctx, ground.x * SQUARE_SIZE, ground.y * SQUARE_SIZE)
        });
        this.rocks = MAPS[1].rocks.map(rock => {
            return new Rocks(this.ctx, rock.x * SQUARE_SIZE, rock.y * SQUARE_SIZE)
        });
        this.diamonds = MAPS[1].diamonds.map(diamond => {
            return new Diamonds(this.ctx, diamond.x * SQUARE_SIZE, diamond.y * SQUARE_SIZE)
        });
    }

    start(){
        setInterval(() => {
            this._draw()
        }, 1000 / 60);
    }

    _draw(){
        this.bg.draw();
        // debugger
        this.grounds.forEach(ground => ground.draw());
        this.rocks.forEach(rock => rock.draw());
        this.diamonds.forEach(diamond => diamond.draw());
    }
}