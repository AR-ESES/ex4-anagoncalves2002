let espLarg = 15;
let espAltura = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(160);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(160);
}

function draw() {
  
	for (let i = 1; i < espLarg; i++) {
	  for (let j = 1; j < espAltura; j++) {
		push();
		translate(i * width / espLarg, j * height / espAltura)
		translate(-55,-45)
		scale(0.08);
		noStroke();


	noFill();
	stroke(30,255);
	circle(width / 2, height / 2, height / 2 );
	circle(width / 2 - height /3/4, height /2 - height/18, height/12 );
	circle(width / 2 + height /3/4, height /2 - height/18, height/12 );
	line(850, 500, 700, 500);
	ellipse(760, 670, 210, 242);
	ellipse(920, 580, 170, 52);
	ellipse(600, 580, 170, 52);
	 
	  pop();
    }
  }
}