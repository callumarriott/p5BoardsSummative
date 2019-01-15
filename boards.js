class Boards {
	constructor(xPosition, yPosition, rectX, rectY, depth, colour) {
		this.width = xPosition * 2 || 640;
		this.height = yPosition * 2 || 480;
		this.rectX = rectX || 100;
		this.rectY = rectY || 200;
		strokeWeight(depth || 4);
		fill(colour || 'black');
		rectMode(CENTER);
		stroke(255, 251, 249);
	}
	
	draw() {
		translate(this.width / 2, this.height / 2);
		var num = 10;
		var intervalX = map(mouseX, 0, this.width, 40, -40);
		var intervalY = map(mouseY, 0, this.width, 20, -40);
		var tilt = 20 * sin(2 * atan((this.height - 2 * mouseY) / (this.width - 2 * mouseX)));
		for (var i = num - 1; i > 0; i--) {
			push();
			var rhytm = map(pow(abs(sin(frameCount * 0.03 - i * 0.3)), 50), 0, 1, 0, -50) * map(abs(mouseX - this.width / 2), 0, this.width / 2, 0, 1);
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
