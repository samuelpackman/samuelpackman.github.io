s=800
function setup() {
  createCanvas(s,s);
  background(0);
}

class Star {
  constructor() {
    //Intitialise our Stars's coordites and velocitys
    this.temp = [Math.PI / 180 * random(1,360),random(0,40)]
    this.x = 200+this.temp[1]*cos(this.temp[0]);
    this.y = 200+this.temp[1]*sin(this.temp[0]);
    this.speed = random(1,5);
    this.radius = random(5,20);
    this.angle = Math.PI / 180 * random(1,360);
    this.colour = [random(1,255),random(1,255),random(1,255)]
  }

  move() {
		this.x += this.speed * cos(this.angle);
    this.y += this.speed * sin(this.angle);
    this.radius += this.speed/50;
    fill(this.colour);
    ellipse(this.x,this.y,this.radius,this.radius);
  }
}
function draw(){

  let star = new Star();
  star.x = mouseX
  star.y = mouseY

	for (i=0;i<100;i++) {
    star.move()
  }

}
