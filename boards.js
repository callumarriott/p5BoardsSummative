class Boards {
	constructor(xPosition, yPosition, rectX, rectY, depth, colour) {
		this.xPosition = xPosition * 2 || 640;
		this.yPosition = yPosition * 2 || 480;
		this.rectX = rectX || 100;
		this.rectY = rectY || 200;
		this.depth = depth || 4;
		this.colour = colour || 'black';
		rectMode(CENTER);
		stroke(255);
	}
	
	setXPosition(xPosition) {
		this.xPosition = xPosition;
	}
	
	setYPosition(yPosition) {
		this.yPosition = yPosition;
	}
	
	setRectX(rectX) {
		this.rectX = rectX;
	}
	
	setRectY(rectY) {
		this.rectY = rectY;
	}
	
	setDepth(depth) {
		this.depth = depth;
	}
	
	setColour(colour) {
		this.colour = colour;
	}
	
	draw() {
		strokeWeight(this.depth);
		fill(this.colour);
		translate(this.xPosition / 2, this.yPosition / 2);
		var num = 10;
		var intervalX = map(mouseX, 0, this.xPosition, 40, -40);
		var intervalY = map(mouseY, 0, this.xPosition, 20, -40);
		var tilt = 20 * sin(2 * atan((this.yPosition - 2 * mouseY) / (this.xPosition - 2 * mouseX)));
		for (var i = num - 1; i > 0; i--) {
			push();
			var rhytm = map(pow(abs(sin(frameCount * 0.03 - i * 0.3)), 50), 0, 1, 0, -50) * map(abs(mouseX - this.xPosition / 2), 0, this.xPosition / 2, 0, 1);
			translate(intervalX * (i - num / 2.0), intervalY * (i - num / 2.0) + rhytm);
			beginShape();
			vertex(-this.rectX / 2.0, -this.rectY / 2.0 + tilt);
			vertex(this.rectX / 2.0, -this.rectY / 2.0 - tilt);
			vertex(this.rectX / 2.0, this.rectY / 2.0 - tilt);
			vertex(-this.rectX / 2.0, this.rectY / 2.0 + tilt);
			endShape(CLOSE);
			pop();
		}
	}
}
