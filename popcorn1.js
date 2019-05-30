let s=600;
let B=[];
var C
var bounceloss = 1/2
function setup() {
  createCanvas(s, s);
  C = [255,50,50]
  for (let i=0; i < 10**2; i++) {
  	B.push(new Popcorn())
  }
}



function draw() {
  background(C);
	for (let p=0;p<B.length;p++){
	  if (random(-100,1) > 0 && B[p].popped == false) {
        B[p].pop()
        B[p].popped = true
      }
      B[p].makemove();
  	  B[p].detect();
      if (B[p].popped && B[p].gravaffected == false){B[p].blacken()}
      
  }
}