let s=1000;
let r=20;
let P0;
let P1;
let B=[];
let t=0;
let started=false;

function makebuttons(){
  SuperButton1 = createButton('Play Game')
  SuperButton1.position(s/2-s/10, s/2-s/5)
  SuperButton1.size(s/5,s/10)
  SuperButton1.mousePressed(partialmakebuttons)
  SuperButton2 = createButton('Also Play Game')
  SuperButton2.position(s/2-s/10, s/2+s/10)
  SuperButton2.size(s/5,s/10)
  SuperButton2.mousePressed(partialmakebuttons)
}
function partialmakebuttons(){
  started=false
  SuperButton1.position(-50, -50)
  SuperButton1.size(0,0)
  SuperButton2.position(-50, -50)
  SuperButton2.size(0,0)
  button1 = createButton('Game Mode 1')
  button1.position(20, 20)
  button1.size(s/2-20,s/2-70)
  button1.mousePressed(start1)
  button2 = createButton('Game Mode 2')
  button2.position(s/2+20, s/2+50)
  button2.size(s/2-20,s/2-70)
  button2.mousePressed(start2)
  button3= createButton('Game Mode 3')
  button3.position(20, s/2+50)
  button3.size(s/2-20,s/2-70)
  button3.mousePressed(start3)
}
function setup() {
  createCanvas(s,s);
  background(random(255),random(255),random(255));
  makebuttons()
}

function start1(){

Winner=-1
P0=new player(0,0)
P1=new player(1,0)
textSize(20)
B=[]
started=true
button1.size(0,0)
button1.position(-100, -100)
button2.size(0,0)
button2.position(-100, -100)
button3.size(0,0)
button3.position(-100, -100)
}
function start2(){

Winner=-1
P0=new player(0,1)
P1=new player(1,1)
textSize(20)
B=[]
started=true
button1.size(0,0)
button1.position(-100, -100)
button2.size(0,0)
button2.position(-100, -100)
button3.size(0,0)
button3.position(-100, -100)
}
function start3(){

Winner=-1
P0=new player(0,2)
P1=new player(1,2)
textSize(20)
B=[]
started=true
button1.size(0,0)
button1.position(-100, -100)
button2.size(0,0)
button2.position(-100, -100)
button3.size(0,0)
button3.position(-100, -100)
}

class player{
constructor(n,k){
this.player=n
this.k=k
this.hp=100
this.r=20
this.theta=PI*n-PI/2
this.v=0
this.x=(1-n)*s-2*(-1)**n*r
this.y=(1-n)*s-2*(-1)**n*r
this.colour=[random(255),random(255),random(255)]
this.d=1/50
this.lastfire = 0
this.Vmax=800
this.rate=2
this.acc=0
if (this.k==2){
this.hp=300
}
}
move(){


if (this.player==0){
if (keyIsDown(UP_ARROW)){
if (this.k==0){
this.v+=1
}
if (this.k==1){
this.acc+=1
}
}
if (keyIsDown(DOWN_ARROW)){
if (this.k==0){
this.v-=1
}
if (this.k==1){
this.acc-=1
}
}
if (keyIsDown(RIGHT_ARROW)){
this.theta+=PI/100
}

if (keyIsDown(LEFT_ARROW)){
this.theta-=PI/100
}

if (keyIsDown(49) && (t - this.lastfire > this.rate)){
this.lastfire = t
B.push(new projectile(this.x+1.1*this.r*cos(this.theta),this.y+1.1*this.r*sin(this.theta),this.theta,this.colour,0))
}
}

if (this.player==1){
if (keyIsDown(87)){
if (this.k==0){
this.v+=1
}
if (this.k==1){
this.acc+=1
}
}
if (keyIsDown(83)){
if (this.k==0){
this.v-=1
}
if (this.k==1){
this.acc-=1
}
}
if (keyIsDown(68)){
this.theta+=PI/100
}

if (keyIsDown(65)){
this.theta-=PI/100
}
  
if (keyIsDown(84) && (t - this.lastfire > this.rate)){
this.lastfire = t
B.push(new projectile(this.x+1.1*this.r*cos(this.theta),this.y+1.1*this.r*sin(this.theta),this.theta,this.colour,1))
}
}
this.v+=this.acc
this.x+=this.d*this.v*cos(this.theta)
this.y+=this.d*this.v*sin(this.theta)
if (this.k==2){
this.v=5*(300-this.hp)+10
}
if (this.x>s){
this.x=this.x-s
}
if (this.x<0){
this.x=this.x+s
}
if (this.y>s){
this.y=this.y-s
}
if (this.y<0){
this.y=this.y+s
}
if (this.v>this.Vmax){
this.v=this.Vmax
}
if (this.v<-this.Vmax){
this.v=-this.Vmax
}
if (this.acc>this.Accmax){
this.acc=this.Accmax
}
if (this.acc<-this.Accmax){
this.acc=-this.Accax
}
strokeWeight(0)
fill(this.colour)
ellipse(this.x,this.y,2*this.r,2*this.r)
strokeWeight(10)
point(this.x+this.r*cos(this.theta)/2,this.y+this.r*sin(this.theta)/2)
}
}

class projectile{
constructor(x,y,theta,colour,n){
this.r=7
this.player=n
this.theta=theta
this.v=20
this.x=x
this.y=y
this.colour=[colour[0]+random(-100,100),colour[1]+random(-100,100),colour[2]+random(-100,100)]
this.dmg=10
}
move(Q0,Q1){

this.x+=this.v*cos(this.theta)
this.y+=this.v*sin(this.theta)
if (this.x>s){
B.splice(B.indexOf(this),1)
}
if (this.x<0){
B.splice(B.indexOf(this),1)
}
if (this.y>s){
B.splice(B.indexOf(this),1)
}
if (this.y<0){
B.splice(B.indexOf(this),1)
}
if (this.player==0){
if ((this.x-Q1.x)**2+(this.y-Q1.y)**2<(this.r+Q1.r)**2){
B.splice(B.indexOf(this),1)
Q1.hp-=this.dmg
}
}
if (this.player==1){
if ((this.x-Q0.x)**2+(this.y-Q0.y)**2<(this.r+Q0.r)**2){
B.splice(B.indexOf(this),1)
Q0.hp-=this.dmg
}
}
strokeWeight(0)
fill(this.colour)
ellipse(this.x,this.y,2*this.r,2*this.r)


}
}
function draw() {
if (started){
  background(220);
  t+=1
  if (Winner==-1){
  P0.move()
  P1.move()
  for (let b of B){
  b.move(P0,P1)
  }
  textSize(15)
  fill(50)
  text("Player 1 has "+str(P1.hp)+" hp",s/2-65,s/2-20)
  text("Player 0 has "+str(P0.hp)+" hp",s/2-65,s/2+20)
  if (P0.hp<=0){
  Winner=1
  }
  if (P1.hp<=0){
  Winner=0
  }
  }
  else{
  started=false
  background(random(255),random(255),random(255));
  makebuttons()
  fill(0)
  if (Winner==1){
  textSize(50)
  text("Player 1 won!",s/2-145,s/2+20)
  }

  if (Winner==0){
  textSize(50)
  text("Player 0 won!",s/2-145,s/2+20)
  }
  }
}
}