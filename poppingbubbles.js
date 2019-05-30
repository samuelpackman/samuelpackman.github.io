let s=600;
let B=[];
var C
function setup() {
  createCanvas(s, s);
  C = [random(255),random(255),random(255)]
  antiC = [255 - C[0],255 - C[1],255 - C[2]]
  B.push(new Bubble(s/2,s/2));
}

class Bubble {
	constructor(x,y) {
  this.x = x;
  this.y = y;
  this.sx = random(-4,4)
  this.sy = random(-4,4)
  this.r=25
  this.colour=[random(255),random(255),random(255)]
    }  
  make() {
  fill(this.colour);
  ellipse(this.x,this.y,2*this.r,2*this.r)
  this.x+=this.sx
  this.y+=this.sy
  }
  detect(){
  if (this.x>s-this.r) {
    this.sx=-this.sx
    this.x = 2*s-2*this.r - this.x
  } 
  if (this.x<this.r) {
  	this.sx=-this.sx
    this.x = 2*this.r - this.x
  }
  if (this.y>s-this.r) {
    this.sy=-this.sy
    this.y = 2*s-2*this.r - this.y
  }
    if (this.y<this.r) {
  	this.sy=-this.sy
    this.y = 2*this.r - this.y
  }
  }
}

function draw() {
  background(C);
	for (p=0;p<B.length;p++){
		B[p].make();
  	B[p].detect();
  }
  fill(antiC)
  rect(40,22,205,40)
  fill(0,0,0)
  textSize(20)
  text("There are " + str(B.length) + " bubbles.", 50,50)
}

function mouseClicked() {
  print("123")
  let bubble_found = false
  let speed
  let spliced_bubbles = []
  for (let b of B) {
    speed = ((b.sx)**2 + (b.sy)**2)
    speed = max(30,speed/2)
    if ((((mouseX - b.x)**2 + (mouseY - b.y)**2) < ( b.r)**2) && bubble_found == false) { //remove bubble
    spliced_bubbles.push(b)
    print(spliced_bubbles)
    bubble_found = true
    }
  }
  if (bubble_found == false) { // create new bubble
      B.push(new Bubble(mouseX,mouseY))
  }
  for (var b of spliced_bubbles) {
    print("123")
   B.splice(B.indexOf(b) , 1)
  }
}