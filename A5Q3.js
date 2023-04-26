//particles = bubbles
//breeders = circles
//catchers = triangles

//establish array
let bubbles = [];
circleList = [];
triangleList = [];
function setup() {
  createCanvas(600, 540);
  colorMode(HSL);
  angleMode(DEGREES);

  //loop for bubbles
  for (let b = 0; b < 50; b++) {
    let x = random(width);
    let y = random(height);
    let hue = random(360);
    //change bubbles to scale between 6 and 10 for background
    let r = random(1, 10);
    bubbles[b] = new Bubble(x, y, hue, r);
  }
  //circles
  for(let i = 0; i < 5; i++){
    let _X = 25;
    let _Y = random(25, height - 25);
    let _Hue = floor(random(20, 340));
    let _Size = 1;
    let _Rotation = 280
    circleList[i] = new Circle(_X, _Y, _Hue, _Size, _Rotation);
  }
  //triangles
  for(let i = 0; i < 5; i++){
    let _X = 510;
    let _Y = random(25, height - 25);
    let _Hue = floor(random(20, 340));
    let _Size = 1.2;
    let _Rotation = 270
    triangleList[i] = new Triangle(_X, _Y, _Hue, _Size, _Rotation);
  }
}

function draw() {
  background("black");
//show bubbles
  for (let b = 0; b < bubbles.length; b++) {
    bubbles[b].show();
    bubbles[b].move();
  }
  //show circles
  for(let num = 0; num < circleList.length; num++){
    circleList[num].show();
    //circleList[num].move();
  }
  //show triangles
  for(let num = 0; num < triangleList.length; num++){
    triangleList[num].show();
    //triangleList[num].move();
  }
}
//use class to create bubbles
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
	constructor(x, y, hue, size, rotation) {
      this.x = x;
      this.y = y;
      this.hue = hue;
      this.size = size;
      this.rotation = rotation;
	}
	move() {
		
	}
	show() {
      push();
      noStroke();
      translate(this.x, this.y);
      rotate(this.rotation);
      scale(this.size);
      stroke(5);
      fill("yellow");
      ellipse(0, 10, 70, 70)
      pop();
	}
} 
class Triangle {
	constructor(x, y, hue, size, rotation) {
      this.x = x;
      this.y = y;
      this.hue = hue;
      this.size = size;
      this.rotation = rotation;
	}
	move() {
		
	}
	show() {
      push();
      noStroke();
      translate(this.x, this.y);
      rotate(this.rotation);
      scale(this.size);
      stroke(5);
      fill("red");
      triangle(30, 75, 58, 20, 86, 75);
      pop();
	}
} 
