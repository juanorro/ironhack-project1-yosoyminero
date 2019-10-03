class Background {
    constructor (ctx) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.w = this.ctx.canvas.width;
        this.h = this.ctx.canvas.height;
    }

    draw(){
        console.log('draw');
    }
}



// {
//     "1": {
//       "grounds": [
//         { "x": 1, "y":1 },
//         { "x": 2, "y":3 },
//         { "x": 1, "y":1 },
//         { "x": 1, "y":1 },
//         { "x": 1, "y":1 }
//       ]
//     },
//     "2": {
//       "grounds"
//     }
//   }