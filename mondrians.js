
/*Samuel Packman
5/8/19
The Class You are Taking:  "Online Games and Interactivity"	
This auto-generates a mondrian */
let s=800
let g = []
let w = 15
let Lz = 8
function setup() {
  "setup happens just once!"
  print("The mouse is at " + mouseX + " x, and at " +mouseY + " y.")
  createCanvas(s,s);
  background(220);
  for (i=0;i<Lz;i++) {
    let K = new thing();
  	g.push(K);
  }
  for (i=0; i<Lz; i++) {
    let U = new thing();
    U.dir = Math.sign(i-1.5)
    if (i%2 == 1) {
      U.x = s
    }
    if (i%2 == 0) {
      U.x = 0
    }
    g.push(U)
  }
  
  for (i=0; i<(Lz+4); i++) {
  	for (j=0; j<(Lz+4); j++) {
  		for (k=0; k<(Lz+4); k++) {
      	for (r=0; r<(Lz+4); r++) {
          if (i != j && j!=r && r!=k && g[i].dir == -1 && g[j].dir == -1 && g[r].dir == 1 && g[k].dir == 1) {
            if (Math.sign(random(-Math.pow(Lz,3),1)) == 1) {
              k = Math.floor(random(0,1)*3);
              clolour = [0,0,0];
              clolour[k] += 255;
              if (k==1) {
                clolour[0] += 255
              }
              fill(clolour)
            	rect(g[i].x,g[r].x,g[j].x-g[i].x,g[k].x-g[r].x)
            }
          }
  			}
  		}
  	} 
  }
  for (p=0;p<Lz;p++) {
    g[p].make()
  }
}

class thing {
  constructor() {
    this.dir = Math.sign(random(-1,1))
    this.x = random(0,s)
    this.colour = [0,0,0]
    this.width = 15
  }
	make() {
    if (this.dir == 1){
      stroke(this.colour);
      fill(this.colour);
      rect(0,this.x,s,this.width)
    }
    
    if (this.dir == -1){
      stroke(this.colour);
      fill(this.colour);
      rect(this.x,0,this.width,s)
    }
  }
}

function mouseClicked() {
print("The mouse was pressed")
}
function draw() {
  print("Draw repeats over and over again")
}