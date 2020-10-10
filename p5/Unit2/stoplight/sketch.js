let state = 0;
let timer = 0;
let x = 0;
let velocity = 0;

function setup() {
  createCanvas(800, 800);
  ellipseMode(CENTER);
}

function draw() {
  background(100);

  fill('yellow');
  rect(300, 100, 200, 600);

  fill('blue');
  rect(x, 740, 60, 20);
  x = x + velocity;
  if (x > width) {
    x = 0;
  }

  switch(state) {
    case 0:
    fill('red');
    ellipse(width/2, height/2 - 200, 150, 150);
    fill('grey');
    ellipse(width/2, height/2, 150, 150);
    ellipse(width/2, height/2 + 200, 150, 150);

    velocity = 0;

    break;

    case 1:
    fill('grey');
    ellipse(width/2, height/2 - 200, 150, 150);
    ellipse(width/2, height/2, 150, 150);
    fill('green');
    ellipse(width/2, height/2 + 200, 150, 150);

    velocity = 4;

    break;

    case 2:
    fill('grey');
    ellipse(width/2, height/2 - 200, 150, 150);
    fill('yellow');
    ellipse(width/2, height/2, 150, 150);
    fill('grey');
    ellipse(width/2, height/2 + 200, 150, 150);

    velocity = 2;

    break;
  }

  timer++;
  if (timer > 0) {
    state = 1;
  }
  if (timer > 4*60) {
    state = 2;
  }
  if (timer > 6*60) {
    state = 0;
  }
  if (timer > 599) {
    state = 1;
    timer = 0;
  }

}

function mouseReleased() {
  state++;
  if (state > 2) {
    state = 0;
  }
}
