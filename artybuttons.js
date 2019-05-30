var s = 800
function setup() {
  createCanvas(s,s);
}

function draw() {
  button = createButton('this is art');
	button.position(s/2,s/2);
	button.mousePressed(greet);
  
}

class Button {
  constructor() {
    this.x = random(s)
    this.y = random(s)
    this.button = createButton('this is art')
    this.button.position(this.x,this.y)
    this.button.mousePressed(greet)
  }
}

Buttons = []
function greet() {
  background(random(255),random(255),random(255));
  Buttons.push(new Button())
  Buttons.push(new Button())
}