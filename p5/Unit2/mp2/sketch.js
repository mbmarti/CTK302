let state = 0;
let mic;
let vol = 0;

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
    text("state 0", 250, 250);
    break;

    case 1:
    background('green');
    text("either click or make noise", 250, 250);
    vol = mic.getLevel();
    if (vol >= 0.1) {
      state++;
    }
    break;

    case 2:
    background('blue');
    text("state 2", 250, 250);
    break;
  }
}

function mouseReleased() {
  state++;
  if (state > 2) {
    state = 0;
  }
}
