function setup() {
  createCanvas(720, 720);
}

function draw() {
  background(102);

  push();
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / 200.0);
  star(250, 50, 15*sin(0.5), exp(5), Math.PI,[10,43,100]);
  star(25, 50, 76, 432, 90,[100,240,30]);
  pop();

}

function star(x, y, radius1, radius2, npoints,color) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  fill(color)
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
