let state = 0;
let sound1, sound2, sound3;

function preload() {
  sound1 = loadSound("assets/DarkAmbient.mp3");
  sound2 = loadSound("assets/Distroy.mp3");
  sound3 = loadSound("assets/Moonbriar.mp3");

  sound1.loop();
  sound1.pause();

  sound2.loop();
  sound2.pause();

  sound3.loop();
  sound3.pause();
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch(state) {
    case 0:
    sound1.play();
    state = 1;
    break;

    case 1:
    text("Mitch Martin - Dark Ambient", 100, 100);
    break;

    case 2:
    sound2.play();
    state = 3;
    break;

    case 3:
    text("Mitch Martin - Distroy", 100, 100);
    break;

    case 4:
    sound3.play();
    state = 5;
    break;

    case 5:
    text("Mitch Martin - Moonbriar", 100, 100);
    break;
  }
}

function mouseReleased() {
  state++;
  if (state > 5) {
    state = 0;
  }

  sound1.pause();
  sound2.pause();
  sound3.pause();
}
