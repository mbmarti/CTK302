let state = 0;
let mic;
let vol = 0;
let timer = 0;
let countdown = 5;

function setup() {
  createCanvas(500, 500);
  mic = new p5.AudioIn();
  textSize(24);

  mic.start();
}

function draw() {
  switch (state) {
    case 0:
    background('red');
    text("yell at this guy", 250, 250);
    vol = mic.getLevel();
    if (vol >= 0.2) {
      state++
    }
    break;

    case 1:
    background('green');
    text("uh oh, you've been detected! shhhhh\n" + countdown, 250, 250);
    vol = mic.getLevel();
    if (vol >= 0.1) {
      state++;
    }
    timer++;
    if (timer > 1*60) {
      countdown = 4;
    }
    if (timer > 2*60) {
      countdown = 3;
    }
    if (timer > 3*60) {
      countdown = 2;
    }
    if (timer > 4*60) {
      countdown = 1;
    }
    if (timer > 5*60) {
      state = 0;
      timer = 0;
      countdown = 5;
    }
    break;

    case 2:
    background('blue');
    text("oh wow you got caught, click to reload", 250, 250);
    break;
  }
}

function mouseReleased() {
  state++;
  if (state > 2) {
    state = 0;
  }
}
