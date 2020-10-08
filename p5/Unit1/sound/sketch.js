var s;

function preload() {
  soundFormats("mp3");
  s = loadSound("assets/DarkAmbient.mp3");
}

function setup() {
  createCanvas(800, 800);
  s.loop();
}

function draw() {
  background(100);
}

function mouseReleased() {
  if (s.isPlaying()) {
    s.pause();
  }
  else {
    s.loop();
  }
}

function touchStarted() {
  getAudioContext().resume();
}
