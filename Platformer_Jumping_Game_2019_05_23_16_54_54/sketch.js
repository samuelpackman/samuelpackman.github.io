var mainCharacter;
var gravity = 9.8/30.0;
var backgroundImage;
var mainCharacterImage;
var monsterImage
var groundOffset = 100
var monsterArray = []
var newMonster
var monster
var t = 0
var projectileArray = []
var new_projectile;
var game_over = 0;
var monster_lives;

function playerwins() {
  game_over = 1
}
function playerloses() {
  game_over = -1
}

function  checkalive() {
  if (mainCharacter.hp <= 0) {
  playerloses()
  }
  else {
  if (monsterArray[0].hp <= 0 && monsterArray[1].hp <= 0) {
    playerwins()
    }
  }
}



class projectile {
 constructor(x,y,v) {
  this.x = x
  this.y = y
  this.v = v
  this.age = 0
  }
  update() {
  this.x += this.v
  this.age += 1
  }

  draw() {
  fill(10,100,100)
  strokeWeight(0)
  ellipse(this.x,this.y,20,10)
  }

  detect() {
    if (this.age > 15) {
    if ((mainCharacter.x - this.x)**2 + (mainCharacter.y - this.y)**2 <       (mainCharacter.width + 2) **2) {
      mainCharacter.hp -= 20
      projectileArray.splice(projectileArray.indexOf(this),1)
    }
      for (monster of monsterArray) {
      if ((monster.x - this.x)**2 + (monster.y - this.y)**2 <                  (monster.width+ 2) **2) {
      monster.hp -= 10
      projectileArray.splice(projectileArray.indexOf(this),1)
        }
      }
    }
  }
}
class Character {
  constructor(x, y, width,num) {
    this.x = x;
    this.y = y;
    this.ySpeed = 0;
    this.xSpeed = 0;
    this.width = width;
    this.color = "blue"
    this.isMonster = false
    this.hp = 100
    this.num = num
    this.lastfire = 0
  }

  update(){
	if(this.y+this.width*0.5 >= (height-groundOffset) && this.ySpeed > 0)
    {
      this.ySpeed = this.ySpeed*(-0.4)
      this.y = height-this.width*0.5-groundOffset
    }
   this.ySpeed += gravity;
   this.y += this.ySpeed;

   this.xSpeed *= 0.8
   this.x += this.xSpeed;
  }

  draw(){
    if(this.isMonster){
      image(monsterImage, this.x, this.y, this.width, this.width)
    } else {
      image(mainCharacterImage, this.x, this.y, this.width, this.width)
    }
  }

  fire() {
    if (this.x > mainCharacter.x) {
      new_projectile = new projectile(this.x+10,this.y+20,-10)
      projectileArray.push(new_projectile)
    }
    if (this.x < mainCharacter.x) {
      new_projectile = new projectile(this.x+10,this.y+20,10)
      projectileArray.push(new_projectile)
    }
  }


  attackmonsters() {
    if (t - this.lastfire  >= 100) {
     this.lastfire = t
    for (monster of monsterArray) {
      if ((monster.x - this.x)**2 + (monster.y - this.y)**2 < (monster.width+ 2) **2/2) {
      monster.hp -= 20
        }
      }
    }
  }
}

function setup() {
  createCanvas(800, 400);
  mainCharacter = new Character(200, 200, 60,0)
  backgroundImage = loadImage("Images/download.png")
  mainCharacterImage = loadImage("Images/images.png")
  monsterImage = loadImage("Images/SpriteEntity.png")

  for (i=0;i<2;i++){
  newMonster = new Character(600 + 50 * i , 100, 60,i)
  newMonster.isMonster = true
  monsterArray.push(newMonster)
  }
}


function draw() {
  checkalive()
  if (game_over == 0) {
  t ++
  background(0, 200, 150);
  image(backgroundImage, 0, 0, width, height)
  strokeWeight(15)
  line(0,height - groundOffset + 30,width,height - groundOffset  + 30)
  textSize(15)
  text("You have " + mainCharacter.hp + " hp.", 50,50)
  for (monster of monsterArray) {
    if (monster.hp > 0) {
  text("Enemy" + monster.num +  " has " + monster.hp + " hp",width - 200,50 + 25 * monster.num)
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    //move left
    mainCharacter.xSpeed -= 1.0
  }

  if(keyIsDown(RIGHT_ARROW)){
    //move right
    mainCharacter.xSpeed += 1.0
  }

  if(keyIsDown(UP_ARROW) && mainCharacter.y+mainCharacter.width*0.5 + 2 >= (height-groundOffset)) {
    mainCharacter.ySpeed-=10
  }

  mainCharacter.update()
  mainCharacter.draw()
  mainCharacter.attackmonsters()

  for (monster of monsterArray) {
  if (monster.hp > 0) {
  monster.update()
  monster.draw()
  if (monster.x > mainCharacter.x) {
        if (t - monster.lastfire >= 100) {
          monster.fire()
          monster.lastfire = t
    }
  else {
    if (monster.x < width - 200 + 75*monster.num) {
    monster.x += 1
      }
    }
  }
      if (monster.x < mainCharacter.x) {
        if (t - monster.lastfire >= 100) {
          monster.fire()
          monster.lastfire = t
        }
        else {
          if (monster.x > 275 - 75 * monster.num) {
          monster.x -= 1
          }
        }
      }
    }
  }
  for (projectile1 of projectileArray) {
  projectile1.update()
  projectile1.draw()
  projectile1.detect()
  }
}
  if (game_over == 1) {
    fill(0)
    textSize(30)
   background(0, 200, 150);
  image(backgroundImage, 0, 0, width, height)
    text("You Won the Game!",width/2-150,height/2+25)
  }
  if (game_over == -1) {
    fill(0)
    textSize(30)
   background(0, 200, 150);
  image(backgroundImage, 0, 0, width, height)
    text("You Lost the Game!",width/2-150,height/2+25)
  }
}
