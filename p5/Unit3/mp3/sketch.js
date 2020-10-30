let cars = [];
let f1, f2, f3;
let fonts = [];
let fall;
let playerSprite;
let e1, e2, e3;
let enemy = [];
let c1, c2, c3;
let corpses = [];
let maxCars = 5;
let frogPos;
let state = 0;
let timer = 0;
let countdown = 15;
let corpseCounter = 0;

function setup() {
  createCanvas(600, 600);
  frogPos = createVector(width / 2, height - 80);
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  f1 = loadFont("assets/spaceage.ttf");
  f2 = loadFont("assets/KGChasingCars.ttf");
  f3 = loadFont("assets/rock.ttf");
  fall = loadImage("assets/grassland.png");
  playerSprite = loadImage("assets/digdug.png");
  e1 = loadImage("assets/enemy1.png");
  e2 = loadImage("assets/enemy2.png");
  e3 = loadImage("assets/enemy3.png");
  c1 = loadImage("assets/corpse1.png");
  c2 = loadImage("assets/corpse2.png");
  c3 = loadImage("assets/corpse3.png");
  fonts = [f1, f2, f3];
  enemy = [e1, e2, e3];

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function draw() {
  switch(state) {
    case 0:
    background('grey');

    textSize(24);
    fill(color('black'));
    textFont(fonts[0]);
    text("Welcome to my game!", width / 2, height / 2);

    textSize(18);
    textFont(fonts[2]);
    text("Select difficulty:", width / 2, (height / 3) * 2);

    fill(color('white'));
    rect(width / 3, (height / 4) * 3, 50, 50);
    rect(width / 2, (height / 4) * 3, 50, 50);
    rect((width / 3) * 2, (height / 4) * 3, 50, 50);

    fill(color('black'));
    text("Regular", width / 3, (height / 6) * 5);
    text("Hard", width / 2, (height / 6) * 5);
    text("Impossible", (width / 3) * 2, (height / 6) * 5);
    break;

    case 1:
    game();
    textSize(72);
    fill(color('white'));
    textFont(fonts[0]);
    text("" + countdown, width - 100, 100);

    timer++;
    if (timer > 1 * 60) {
      countdown = 14;
    }
    if (timer > 2*60) {
      countdown = 13;
    }
    if (timer > 3*60) {
      countdown = 12;
    }
    if (timer > 4*60) {
      countdown = 11;
    }
    if (timer > 5*60) {
      countdown = 10;
    }
    if (timer > 6*60) {
      countdown = 9;
    }
    if (timer > 7*60) {
      countdown = 8;
    }
    if (timer > 8*60) {
      countdown = 7;
    }
    if (timer > 9*60) {
      countdown = 6;
    }
    if (timer > 10*60) {
      countdown = 5;
    }
    if (timer > 11*60) {
      countdown = 4;
    }
    if (timer > 12*60) {
      countdown = 3;
    }
    if (timer > 13*60) {
      countdown = 2;
    }
    if (timer > 14*60) {
      countdown = 1;
    }
    if (timer > 15*60) {
      countdown = 0;
    }
    if (timer > 16*60) {
      state = 3;
    }
    break;

    case 2:
    background('red');

    textSize(48);
    fill(color('white'));
    textFont(fonts[1]);
    text("YAY YOU WON!!", width / 2, height / 2);

    textSize(24);
    textFont(fonts[2]);
    text("Click anywhere to reset", width / 2, (height / 4) * 3);
    break;

    case 3:
    background('purple');

    textSize(48);
    fill(color('white'));
    textFont(fonts[1]);
    text("BOO YOU LOST!!", width / 2, height / 2);

    textSize(24);
    textFont(fonts[2]);
    text("Click anywhere to reset", width / 2, (height / 4) * 3);
    break;
  }
}

function game() {
  background(100);
  image(fall, width / 2, height / 2, width, height);

  for (let i = 0; i < corpses.length; i++) {
    corpses[i].display();
  }

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 25) {
      if (cars[i].e == e1) {
        corpses.push(new Corpse1());
        corpses[corpseCounter].pos = cars[i].pos;
        corpseCounter++;
      }
      if (cars[i].e == e2) {
        corpses.push(new Corpse2());
        corpses[corpseCounter].pos = cars[i].pos;
        corpseCounter++;
      }
      if (cars[i].e == e3) {
        corpses.push(new Corpse3());
        corpses[corpseCounter].pos = cars[i].pos;
        corpseCounter++;
      }
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    state = 2;
  }

  image(playerSprite, frogPos.x, frogPos.y, 66.5, 63);
  checkForKeys();
}

function resetTheGame() {
  cars = [];

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  timer = 0;
  countdown = 15;
  corpses = [];
  corpseCounter = 0;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

  if (frogPos.x > width) frogPos.x = 0;
  if (frogPos.x < 0) frogPos.x = width;
  if (frogPos.y > height) frogPos.y = 0;
  if (frogPos.y < 0) frogPos.y = height;
}

function mouseReleased() {
  switch(state) {
    case 0:
    if ((mouseX > (width / 3) - 25) && (mouseX < (width / 3) + 25) &&
    (mouseY > ((height / 4) * 3) - 25) && (mouseY < ((height / 4) * 3) + 25)) {
      maxCars = 5;
      resetTheGame();
      state = 1;
    }
    if ((mouseX > (width / 2) - 25) && (mouseX < (width / 2) + 25) &&
    (mouseY > ((height / 4) * 3) - 25) && (mouseY < ((height / 4) * 3) + 25)) {
      maxCars = 10;
      resetTheGame();
      state = 1;
    }
    if ((mouseX > ((width / 3) * 2) - 25) && (mouseX < ((width / 3) * 2) + 25)
    && (mouseY > ((height / 4) * 3) - 25) && (mouseY < ((height / 4) * 3) +
    25)) {
      maxCars = 20;
      resetTheGame();
      state = 1;
    }
    break;

    case 2:
    state = 0;
    break;

    case 3:
    state = 0;
    break;
  }
}

class Car {
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-3, 3), random(-3, 3));
    this.e = enemy[floor(random(3))];
  }

  display() {
    image(this.e, this.pos.x, this.pos.y, 148, 125);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

class Corpse1 {
  constructor() {
    this.pos = createVector(100, 100);
  }

  display() {
    image(c1, this.pos.x, this.pos.y, 79, 51);
  }
}

class Corpse2 {
  constructor() {
    this.pos = createVector(100, 100);
  }

  display() {
    image(c2, this.pos.x, this.pos.y, 58, 22);
  }
}

class Corpse3 {
  constructor() {
    this.pos = createVector(100, 100);
  }

  display() {
    image(c3, this.pos.x, this.pos.y, 64, 32);
  }
}
