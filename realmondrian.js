//mondrian art project
function setup() {
  console.log("mondrian, piet")
  console.log("is obsolete")
  createCanvas(800,800);
}

function draw() {
  background(255);
	fill(0)
  function mondrian_rect_vert(x_0,y_0,length) {
    fill(0)
    rect(x_0,y_0,12,length)
  }
  function mondrian_rect_horiz(x_0,y_0,length) {
    fill(0)
    rect(x_0,y_0,length,12)
  }
  //lines across entire canvas
  mondrian_rect_vert(200,0,800)
  mondrian_rect_vert(500,0,800)
  mondrian_rect_vert(600,0,800)
  mondrian_rect_horiz(0,40,800)
  mondrian_rect_horiz(0,100,600)
  mondrian_rect_horiz(0,500,800)
  mondrian_rect_horiz(0,600,800)
	//lines across partial canvas
  mondrian_rect_horiz(200,400,300)
  mondrian_rect_horiz(600,730,200)
  mondrian_rect_vert(50,100,400)
  //rectangles with color
 	//red rectangles
  fill(240,0,0)
  rect(0,612,200,200)
  rect(612,512,188,88)
  //blue rectangles
  fill(0,0,240)
  rect(512,112,88,388)
  rect(0,52,200,48)
  //yellow rectangles
  fill(250,240,10)
  rect(612,742,188,58)
  rect(0,112,50,388)
}