class Rocks {
    constructor(ctx, x, y, game){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = SQUARE_SIZE;
        this.h = SQUARE_SIZE;
        this.r = SQUARE_SIZE/2;
        this.color = "#000";
        this.shouldDelete = false;
        this.game = game;
        this.g = 0.5;
        this.img = new Image();
        this.img.src = "img/rocks.png";
        this.img.frames = 1; 
        this.img.frameIndex = 0;
    }
    draw() {
        // this.ctx.beginPath();
        // this.ctx.arc(this.x + this.r, this.y + this.r, this.r, 0, 2 * Math.PI);
        // this.ctx.fillStyle = this.color;
        // this.ctx.fill();
        // this.ctx.closePath();

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
    
    // collide(miner) {
    //     if(miner.y + miner.h === this.y + this.h + this.w) {
    //         return console.log('right');
    //     } else if (miner.x + miner.w === this.x + this.w) {
    //         return console.log('down');
    //     } else if (miner.y + miner.w + miner.h === this.y + this.h) {
    //         return console.log('left');
    //     } else if (miner.x + miner.y + miner.w === this.x + this.w) {
    //         return console.log('up');
    //     }
    // }
    move(direction) {
        const nextPosition = {
            x: this.x,
            y: this.y
        };

        switch (direction) {
            // case 'up':
            //     nextPosition.y -= this.h;
            //     break;
            // case 'down':
            //     nextPosition.y += this.h;
            //     break;
            case 'left':
                nextPosition.x -= this.w;
                break;
            case 'right':
                nextPosition.x += this.w;
                break;
        }

        if (this.canMove(nextPosition)) {
            this.x = nextPosition.x;
            this.y = nextPosition.y;
            return true;
        } {
            return false;
        }
    }

    canMove(nextPosition){
        return !this.game.rocks
            .concat(this.game.grounds)
            .concat(this.game.diamonds)
            .some(elem => {
                return elem.x === nextPosition.x && elem.y === nextPosition.y;
            });
    }

    // gravity(nextPosition) {
    //     switch (direction) {
    //         case 'down':
    //             !this.game.rocks.concat(this.game.grounds).concat(this.game.diamonds).some(return elem.y === )
    //             nextPosition.y += this.g;
    //             break;
    //     }
    // }
}

// la colisión, el minero nunca puede pasar por encima de la roca. 
// movimiento de la roca, chequear que no hay grounds alrededor del mismo. 
// velocidad de la roca, si no hay ground en -y
// quedarse en el siguiente ground. 