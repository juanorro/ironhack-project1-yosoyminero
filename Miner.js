class Miner {
    constructor (ctx, x, y){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = SQUARE_SIZE;
        this.h = SQUARE_SIZE;
        this.color = "#50F10F";

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
        // this._animate()
        // this._applyActions();
        this.vx = this.x;
        this.vy = this.y;
        // this.x += this.vx;
        // this.y += this.vy;
        console.log('move');
      }



      _setListeners() {
        document.onkeydown = e => this._switchAction(e.keyCode, true);
        document.onkeyup = e => this._switchAction(e.keyCode, false);
      }

    //   _applyActions() {
    //     if (this.actions.up) {
    //       this.ay = -1;
    //     } else {
    //       this.ay = 0;
    //     }
        
    //     if (this.actions.right) {
    //       this.ax = 0;
    //     } else if (this.actions.left) {
    //       this.ax = 0;
    //     } else {
    //       this.ax = 0;
    //     }
    //   }

      _switchAction(key, apply) {
        switch (key) {
          case UP:
          if(apply === true) {
            // this.audio.play()
            //   } else {
            //     this.audio.pause()
          }
            this.actions.up = apply;
            break;
          case RIGHT:
            this.actions.right = apply;
            break;
          case LEFT:
            this.actions.left = apply;
            break; 
          case DOWN:
          if(apply === true) {
            // this.shootAudio.play()
            //   } else {
            //     this.shootAudio.pause()
            //   }
            this.actions.down = apply;
            break; 
        }
      }
    }
}