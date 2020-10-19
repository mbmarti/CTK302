let cars = [];
let img;

function setup() {
  createCanvas(500, 500);

  img = loadImage('assets/Summoner_MechWarrior.jpg');

  noStroke();

}

function draw() {
  background('white');

  image(img, 200, 0, img.width / 2, img.height / 2);

  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].a < 0) {
      cars.splice(i, 1);
    }

  }

}

class Car {
  constructor() {
    this.pos = createVector(220, 148);
    this.vel = createVector(random(-11.25, -10.75), random(-5.25, -4.75));

    this.r = 0;
    this.g = 255;
    this.b = 255;
    this.a = random(204, 255);

    this.s = 10;

  }

  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, this.s);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 8.5;
    this.s = this.s + 1;
  }

}
