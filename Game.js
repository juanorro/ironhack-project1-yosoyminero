class Game {
    constructor(ctx){
        this.ctx = ctx; 
        this.intervalId = null;
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

        this.miner = MAPS[1].miner.map(min => {
            return new Miner(this.ctx, min.x * SQUARE_SIZE, min.y * SQUARE_SIZE)
        });


    }

    start(){
        setInterval(() => {
            this._draw();
            this._move();
            this._clear();
        }, FPS);
    }

    _draw(){
        this.bg.draw();
        // debugger
        this.grounds.forEach(ground => ground.draw());
        this.rocks.forEach(rock => rock.draw());
        this.diamonds.forEach(diamond => diamond.draw());
        this.miner.forEach(min => min.draw());
    }

    _move() {
        this.miner.forEach(min => min.move());
      }

    _clear() {
        this.ctx.clearRect(this.miner(this.ctx.x, this.ctx.y, this.ctx.w, this.ctx.h))
        }
}

//si la x del jugador + w === x del obstaculo
//cuando ponga null que no pinte
//hacerlo solo con hits y 