var s = 800
var shapes = []
function setup() {
  createCanvas(s,s)
  backgroundcolor = [random(255),random(255),random(255)]
  background(200)
}

function draw() {
  background(backgroundcolor)
  for (i = 0; i < shapes.length; i ++ ){
  shapes[i].display()
  }
}

function mouseClicked() {
  backgroundcolor = [random(255),random(255),random(255)]
  shapes.push(new Shape())
}

class Shape{
  constructor() {
    this.x = random(30,s-30)
    this.y = random(30,s-30)
    this.dim1 = random(10,100)
    this.dim2 = random(10,100)
    this.shape = floor(random(2))
    this.color = [random(255),random(255),random(255)]
  }
  
  display() {
    fill(this.color)
    if (this.shape == 0) { //rectangle
      rect(this.x - this.dim1/2,this.y - this.dim2/2,this.dim1,this.dim2)
    }
        if (this.shape == 1) { //ellipse
      ellipse(this.x - this.dim1/2,this.y - this.dim2/2,this.dim1,this.dim2)
    }
  }
}


