var b;

function setup() {
	createCanvas(640, 480);
	b = new Boards();
}

function draw() {
	background(255, 251, 249);
	b.draw();
}

document.addEventListener("DOMContentLoaded", function() {
	
	function changeXPosition(event) {
		let xPosition = document.getElementById("xPosition").value;
		b.setXPosition(xPosition);
	}
	
	function changeYPosition(event) {
		let yPosition = document.getElementById("yPosition").value;
		b.setYPosition(yPosition);
	}
	
	function changeRectX(event) {
		let rectX = document.getElementById("rectX").value;
		b.setRectX(rectX);
	}
	
	function changeRectY(event) {
		let rectY = document.getElementById("rectY").value;
		b.setRectY(rectY);
	}
	
	function changeDepth(event) {
		let depth = document.getElementById("depth").value;
		b.setDepth(depth);
	}
	
	function changeColour(event) {
		let colour = document.getElementById("colour").value;
		b.setColour(colour);
	}
	
	var xp = document.getElementById("xPosition");
	xp.addEventListener("input", changeXPosition);
	
	var yp = document.getElementById("yPosition");
	yp.addEventListener("input", changeYPosition);
	
	var rx = document.getElementById("rectX");
	rx.addEventListener("input", changeRectX);
	
	var ry = document.getElementById("rectY");
	ry.addEventListener("input", changeRectY);
	
	var d = document.getElementById("depth");
	d.addEventListener("input", changeDepth);
	
	var c = document.getElementById("colour");
	c.addEventListener("change", changeColour);
	
	var bf = document.getElementById("boards_form");

	bf.addEventListener("submit", function (event){
		event.preventDefault();
	});
});