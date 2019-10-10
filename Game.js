class Game {
    constructor(ctx) {
        this.ctx = ctx; 
        this.intervalId = null;
        this.bg = new Background(ctx);
        this.grounds = MAPS[1].grounds.map(ground => {
            return new Ground(this.ctx, ground.x * SQUARE_SIZE, ground.y * SQUARE_SIZE)
        });
        this.rocks = MAPS[1].rocks.map(rock => {
            return new Rocks(this.ctx, rock.x * SQUARE_SIZE, rock.y * SQUARE_SIZE, this)
        });
        this.diamonds = MAPS[1].diamonds.map(diamond => {
            return new Diamonds(this.ctx, diamond.x * SQUARE_SIZE, diamond.y * SQUARE_SIZE)
        });

        this.miner = MAPS[1].miner.map(min => {
            return new Miner(this.ctx, min.x * SQUARE_SIZE, min.y * SQUARE_SIZE, this.rocks)
        });
    }

    start() {
        setInterval(() => {
            this._clear();
            this._draw();
            this._move();
            this._checkCollisions()
        }, FPS);
    }

    _draw() {
        this.bg.draw();
        // debugger
        this.grounds.forEach(ground => ground.draw());
        this.rocks.forEach(rock => rock.draw());
        this.diamonds.forEach(diamond => diamond.draw());
        this.miner.forEach(min => min.draw());
    }

    _move() {
        this.miner.forEach(min => min.move());
        // this.rocks.forEach(rock => rock.moveRocks());
      }

    _clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    _checkCollisions() {
        this.diamonds.forEach(diamond => {
            this.miner.forEach(miner => {
                if (diamond.collide(miner)) {
                    diamond.shouldDelete = true;
                }
            });
        });

        this.diamonds = this.diamonds.filter(d => !d.shouldDelete);

        this.grounds.forEach(ground => {
            this.miner.forEach(miner => {
                if(ground.collide(miner)) {
                    ground.shouldDelete = true;
                }
            });
        });

        this.grounds = this.grounds.filter (g => !g.shouldDelete);

        // this.rocks.forEach(rock => {
        //     this.grounds.forEach(ground => {
        //         if(ground.collide(rock)) {
        //             rock.moveRocks();
        //         }
        //     });
        // });

        // this.rocks = this.rocks.moveRocks();
    }
}

//si la x del jugador + w === x del obstaculo
//hacerlo solo con hits y 