var b

function setup() {
	createCanvas(640, 480);
	b = new Boards();
}

function draw() {
	background(255, 251, 249);
	b.draw();
}