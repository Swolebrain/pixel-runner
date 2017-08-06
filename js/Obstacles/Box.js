class Box{
  constructor(height, width, spd, x, y){
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.spd = spd;
  }
  update(){
    this.x = this.x - this.spd;
  }
  render(ctx){
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

module.exports = Box;
