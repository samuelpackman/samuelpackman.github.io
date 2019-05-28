var ballArray = []
var gravity = 9.8/30.0;
var speed = 0.0005

var sunX = 300
var sunY = 300
var sun1X = 300
var sun1Y = 300


class Ball {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.ySpeed = 0;
    this.xSpeed = 0;
    this.width = width;
    this.color = [255 - 2.55  * this.xSpeed, 1,255 - 2.55 *  this.ySpeed]
  }
  
  update(){
		var directionX = sunX + sun1X - 2* this.x
    var directionY = sunY + sun1Y -2 * this.y
    
    this.xSpeed += directionX*speed
    this.ySpeed += directionY *speed
    
    this.x += 40 * this.xSpeed/this.width
    this.y += 40 * this.ySpeed/this.width
    
    //console.log("speed: ", this.xSpeed)
		
  }
  
  draw(){
    this.color = [100 * this.xSpeed, 0, 100 * this.ySpeed]
    fill(this.color)
    ellipse(this.x, this.y, this.width, this.width)
  }
}

function setup() {
  createCanvas(600, 600);
	for(var i = 0;i<20;i++){
  	var newBall = new Ball(random(0, width), random(0, height), random(10, 100))
    ballArray.push(newBall)
  }
}

function draw() {
  background(0, 0, 0);
  
  fill("yellow")
  ellipse(sunX, sunY, 10, 10)
  ellipse(sun1X, sun1Y, 10, 10)
	
  for(var i = 0;i<ballArray.length;i++){
  	ballArray[i].update()
    ballArray[i].draw()
  }
  
}

function mouseClicked() {
sunX = mouseX
sunY = mouseY
}