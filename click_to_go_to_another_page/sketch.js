let currentPage = 1,
  numberOfPages = 2,
  mouseIsClicked = false,
  buttonText = 'next page';

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  textAlign(CENTER);
  textSize(30);
  noStroke();
  fill(33);
}

function draw() {
  background(220);

  switch (currentPage) {
    case 1:
      drawPage(currentPage);
      buttonText = 'next page';
      break;

    case 2:
      drawPage(currentPage);
      buttonText = 'prev page';
      break;
  }

  customButton(width / 2, height * 0.8, 40);

  mouseIsClicked = false;
}

function customButton(x, y, r) {
  push();
  fill(100, 130, 200);
  ellipse(x, y, r);
  fill(33);
  textSize(10);
  text(buttonText, x, y);
  pop();

  if (dist(mouseX, mouseY, x, y) < r / 2 && mouseIsClicked) {
    if (currentPage >= numberOfPages) {
      currentPage = 1;
    } else {
      currentPage++;
    }
  }
}


function drawPage(page) {
  switch (page) {
    case 1:
      push();
      rect(width / 2, height / 2, 100, 100);

      text('Page 1', width / 2, height * 0.2);
      pop();
      break;

    case 2:
      push();
      ellipse(width / 2, height / 2, 100);

      text('Page 2', width / 2, height * 0.2);
      pop();
      break;
  }
}

function mouseClicked() {
  mouseIsClicked = true;
}