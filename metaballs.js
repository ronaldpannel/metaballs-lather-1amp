class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dirX = Math.random() * -0.05;
    this.dirY = Math.random() * 0.05 + 0.025;
    this.gravity = 0.05;
    this.r = Math.random() * 50 + 25;
    this.hue = 20;
    this.range = Math.random() * 20;
    this.color = "hsl(" + this.hue + ",50%, 50%)";
  }
  update() {
    if (this.y >= 75) {
      this.dirY += this.gravity;
    }
    this.x += this.dirX;
    this.y += this.dirY;
    console.log(this.y, this.dirY);
  }
  edges() {
    if (this.x >= canvas.width - this.r || this.x <= 0 + this.r) {
      this.dirX = this.gravity * -1;
    }
    if (this.y >= canvas.height) {
      this.y = -5;
      this.dirY = Math.random() * 0.05 + 0.025;
      this.x = Math.random() * canvas.width;
      this.gravity = 0.05;
      this.r = Math.random() * 50 + 25;
    }
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
}
