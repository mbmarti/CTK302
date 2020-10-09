let myState = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch(myState) {
    case 0:
    background('white');
    break;

    case 1:
    background('grey');
    break;

    case 2:
    background('pink');
    break;
  }

  fill('brown');
  rect(10, 10, 50, 25);

}

function mouseReleased() {
  if ((mouseX > 10) && (mouseX < 60) && (mouseY > 10) && (mouseY < 35)) {
    myState++;
    if (myState > 2) {
      myState = 0;
    }
  }
}
