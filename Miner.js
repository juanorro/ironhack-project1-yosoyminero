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
        this.vx = this.x;
        this.vy = this.y;
        console.log('move');
      }



      _setListeners() {
        document.onkeydown = e => this._switchAction(e.keyCode, true);
        document.onkeyup = e => this._switchAction(e.keyCode, false);
      }

    _switchAction(key, apply) {
        console.log(apply)
        if(apply === true){
          switch (key) {
            case UP:
              this.y -= this.h
              this.actions.up = apply;
              break;
            
            case RIGHT:
              this.x += this.w
              this.actions.right = apply;
              break;
            
            case LEFT:
              this.x -= this.w
              this.actions.left = apply;
              break; 
            
            case DOWN:
              this.actions.down = apply;
              this.y += this.h
              break; 
            }
          }
        }
}