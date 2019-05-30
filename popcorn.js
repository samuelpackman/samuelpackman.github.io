class Popcorn {
  constructor(i) {
    this.r=10
    this.x = random(50,s-50)
    this.y = s-this.r
    this.sx = random(-10,10)
    this.sy = random(-10,10)
    this.colour=[210,150,50]
    this.gravaffected  = true
    this.popped = false
  }
  makemove(){
  fill(this.colour);
  ellipse(this.x,this.y,2*this.r,2*this.r)
  this.x+=this.sx
  this.y+=this.sy
  if (this.gravaffected)
    {this.sy+=0.5}
  if (this.gravaffected == false)
    {this.sx *= 3/2 * bounceloss}
  if (this.sy<5 && this.y > 0 && this.y>s-this.r) {
    this.sy=0
    this.y = s-this.r
    this.gravaffected = false
  }
  }
  
  detect(){
  if (this.x>s-this.r && this.y > this.r) {
    this.sx=-this.sx
    this.x = 2*s-2*this.r - this.x
    this.sx*=bounceloss
    this.sy*=bounceloss
  } 
  if (this.x<this.r && this.y > this.r) {
  	this.sx=-this.sx
    this.x = 2*this.r - this.x
    this.sx*=bounceloss
    this.sy*=bounceloss
  }
  if (this.y>s-this.r) {
    this.sy=-this.sy
    this.y = 2*s-2*this.r - this.y
    this.sx*=bounceloss
    this.sy*=bounceloss
  }

  }
  
  
  pop() {
    this.sx = random (-100,100)
    this.sy = random(50,300) 
    this.r *= 2
  }
  
  blacken() {
    this.colour[0]-=random(0,1)
    this.colour[1]-=random(0,1)
    this.colour[2]-=random(0,1)
  }
}