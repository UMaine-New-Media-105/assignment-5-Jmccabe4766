// Particles = stars
// Breeders = planets
// Catchers = black holes

function setup() {
  createCanvas(600, 500);
  colorMode(HSL);
  angleMode(DEGREES);
  bubbleList = [];
  circleList = [];
  triangleList = [];
  spriteWidth = 50;
  spawnDelay = 90;
  framesDelayed = 0;

  //bubbles/particles
  for (let i = 0; i < 100; i++) {
    let _X = random(width);
    let _Y = random(height);
    let _Hue = random(360);
    let _Size = random(0.5, 1.5);
    bubbleList[i] = new Bubble(_X, _Y, _Hue, _Size);
  }

  //circles
  for (let i = 0; i < 6; i++) {
    let _X = 25;
    let _Y = random(25, height - 25);
    let _Hue = floor(random(20, 340));
    let _Rotation = random(-50, 50);
    circleList[i] = new Circle(_X, _Y, _Hue, _Rotation);
  }

  //triangles
  for (let i = 0; i < 2; i++) {
    let _X = width - 30;
    let _Y = random(25, height - 25);
    triangleList[i] = new Triangle(_X, _Y);
  }
}

function draw() {
  background("darkblue");
  framesDelayed++;
  for (let num = 0; num < bubbleList.length; num++) {
    bubbleList[num].show();
    bubbleList[num].move();
  }

  for (let num = 0; num < circleList.length; num++) {
    currentCircle = circleList[num];
    currentCircle.show();
    currentCircle.move();
    //check for collisions
    if (framesDelayed > spawnDelay) {
      for (let checked = 0; checked < circleList.length; checked++) {
        let proposedCollision = circleList[checked];
        let isDiff = circleList[num] !== checked;
        if (isDiff && isTouching(currentCircle, proposedCollision)) {
          let _X = currentCircle.x;
          let _Y = currentCircle.y;
          let _Hue = floor(random(20, 340));
          let _Size = 1;
          let _Rotation = random(-50, 50);
          circleList.push(new Circle(_X, _Y, _Hue, _Rotation));
          framesDelayed = 0; 
          break;
        }
      }
    }
  }

  for (let num = 0; num < triangleList.length; num++) {
    triangleList[num].show();
    triangleList[num].move();
  }
}

function isTouching(sprite1, sprite2){
  let spriteDist = dist(sprite1.x, sprite1.y, sprite2.x, sprite2.y);
  if(spriteDist < spriteWidth){
    return true;
  } else {
    return false;
  }
}

class Bubble {
  constructor(x, y, hue, r) {
    this.x = x;
    this.y = y;
    this.hue = hue;
    this.r = r;
  }
  move() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }
  show() {
    push();
    //change stroke to random using HSL and hue
    stroke(this.hue, 100, 50);
    strokeWeight(2.5);
    fill("hotpink");
    ellipse(this.x, this.y, this.r * 2);
    pop();
  }
}

class Circle {
  constructor(x, y, hue, rotation) {
    this.x = x;
    this.y = y;
    this.hue = hue;
    this.rotation = rotation;
    this.addX = random(1, 5);
  }
  move() {
    this.x = this.x + this.addX;
    if (this.x < 25 || this.x > width - 25){
      this.y = random(height);
      this.addX = -this.addX;
    }
  }
  show() {
    push();
      noStroke();
      translate(this.x, this.y);
      rotate(this.rotation);
      scale(1);
      stroke(5);
      fill("yellow");
      ellipse(0, 10, 70, 70)
      pop();
  }
}

class Triangle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.rotationTriangle = 0;
    this.addX = random(-5, -1);
  }
  move() {
    this.x = this.x + this.addX;
    if (this.x < -30 || this.x > width - 25){
      this.y = random(height);
      this.addX = -this.addX;
    }
  }
  show() {

      push();
      noStroke();
      translate(this.x, this.y);
      rotate(this.rotationTriangle);
      //scale(this.size);
      stroke(5);
      fill("red");
      triangle(30, 75, 58, 20, 86, 75);
      pop();
  }
}
