var words = ["random","strings","of","useless","characters","are","useful","for","making","unintelligible","ridiculous","sentences"]
var size = 600
function setup() {
  createCanvas(size,size);
  textSize(26)
}

function wordtext() {
  for (i=0; i<5; i++){
  let randint = floor(random(0,words.length))
  text(words[randint],random(30,size-60),random(30,size-60))
  }
  }
function randomword() {
  
  let randcolor = [random(0,255),random(0,255),random(0,255)]
  let oppcolor = [255-randcolor[0],255-randcolor[1],255-randcolor[2]]
  background(randcolor)
  fill(oppcolor)
  setTimeout(wordtext, 500 )
  
  
  
}
setInterval(randomword, 1250 )