let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(32);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  switch (state) {
    case 0:
    background('red');
    text("What's the best thing\nabout Switzerland?", 250, 250, 350, 400);
    timer++;
    if (timer > 5*60) {
      state = 1;
      timer = 0;
    }
    break;

    case 1:
    background('blue');
    text("I don't know, but the\nflag's a huge plus", 250, 250, 350, 400);
    break;
  }
}
