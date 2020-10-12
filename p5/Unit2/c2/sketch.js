var mic;
var vol;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  vol = (mic.getLevel()).toFixed(2);

  switch(state) {
    case 0:
    background('red');
    text("shhh!!!", 250, 250);
    if (vol > 0.10) {
      case = 1;
    }
    break;

    case 1:
    background('green');
    text("QUIET DOWN!", 250, 250);
    timer++;
    if (timer > 3*60) {
      case = 0;
      timer = 0;
    }
    break;
  }
}
