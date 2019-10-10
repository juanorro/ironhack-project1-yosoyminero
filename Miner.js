class Miner {
    constructor (ctx, x, y, rocks){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = SQUARE_SIZE;
        this.h = SQUARE_SIZE;
        this.color = "#50F10F";

        this.rocks = rocks;

        this.x = 0;
        this.y = 0;
        this.vx = 1;
        this.vy = 1;
        // this.ay = 0;
        // this.ax = 0;

        this.actions = {
            right: false,
            left: false,
            up: false,
            down: false,
          };

        this.currentDirection = '';
        this._setListeners();
    }
    draw() {
        this.ctx.fillStyle = this.color,
        this.ctx.fillRect(
            this.x, 
            this.y,
            this.w,
            this.h
            )
    }

    move() {
        this.vx = this.x;
        this.vy = this.y;
        // console.log('move');
      }



      _setListeners() {
        document.onkeydown = e => this._switchAction(e.keyCode, true);
        document.onkeyup = e => this._switchAction(e.keyCode, false);
      }

    _switchAction(key, apply) {
        // console.log(apply)
        const nextPosition = {
            x: this.x,
            y: this.y
        }
        if(apply === true){
          switch (key) {
            case UP:
              nextPosition.y -= this.h
            //   this.y -= this.h
              this.actions.up = apply;
              this.currentDirection = 'up';
              break;
            
            case RIGHT:
              nextPosition.x += this.w;
            //   this.x += this.w
              this.actions.right = apply;
              this.currentDirection = 'right';
              break;
            
            case LEFT:
              nextPosition.x -= this.w
            //   this.x -= this.w
              this.actions.left = apply;
              this.currentDirection = 'left';
              break; 
            
            case DOWN:
              nextPosition.y += this.h;
            //   this.y += this.h;
              this.actions.down = apply;
              this.currentDirection = 'down';
              break; 
            }
            if (this._canMove(nextPosition)) {
                this.x = nextPosition.x;
                this.y = nextPosition.y;
            } else {
                console.log(this.currentDirection);
            }
          }
        }

      _canMove(nextPosition) {
        const collidingRock = this.rocks.find(rock => {
            return rock.x === nextPosition.x && rock.y === nextPosition.y;
        });

        if (collidingRock) {
            return collidingRock.move(this.currentDirection);
        } else {
            return true;
        }
    }

    // voy a mover al minero
    // se en que dirección se va a mover y su proxima posicion
    // tenemos las rocas
    // antes de mover al minero, llamo a el metodo collide pasandole las rocas y la proxima posición
    // compruebo si hay alguna roca (metodo Array.find) con la que colisionaría mi proxima posición
    // en caso se de que si:

    // 1: que la roca tenga una tierra o una piedra en la posición a la que sería empujada (por lo tanto ni el minero ni la piedra se mueven)
    // 2: que no tenga nada y se mueven ambos
}