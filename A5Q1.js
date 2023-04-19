let bubble1;
let bubble2;
let bubble3;
let bubble4;
let bubble5;
function setup() {
  createCanvas(960, 540);
  bubble1 = new Bubble(125, 200, 20);
  bubble2 = new Bubble(225, 175, 40);
  bubble3 = new Bubble(300, 120, 10);
  bubble4 = new Bubble(400, 100, 30);
  bubble5 = new Bubble(450, 320, 60);
}

function draw() {
  background("slategrey");
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
  bubble4.move();
  bubble4.show();
  bubble5.move();
  bubble5.show();
}
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
    push();
    stroke("black");
    strokeWeight(4);
    fill("crimson");
    ellipse(this.x, this.y, this.r * 2);
    pop();
  }
}
