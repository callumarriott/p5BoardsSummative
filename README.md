# Documentation
## Boards.js
* Constructor(): 
	* xPosition: The x-coordinate of the middle rectangle of the sketch. 
	* yPosition: The y-coordinate of the middle rectangle of the sketch. 
	* rectX: The width of the rectangles. 
	* rectY: The height of the rectangles. 
	* depth: The thickness of the borders of the rectangles. 
	* colour: The colour of each of the rectangles. 
* setXPosition(xPosition): Takes a given x-coordinate and moves the sketch across the x axis accordingly. 
* getXPosition(): Gets the x-coordinate of the sketch. 
* setYPosition(yPosition): Takes a given y-coordinate and moves the sketch across the y axis accordingly. 
* getYPosition(): Gets the y-coordinate of the sketch. 
* setRectX(rectX): Takes a given width and extends the width of the rectangles accordingly. 
* getRectX(): Gets the width of the rectangles in the sketch. 
* setRectY(rectY): Takes a given height and extends the height of the rectangles accordingly. 
* getRectY(): Gets the height of the rectangles in the sketch. 
* setDepth(depth): Takes a given thickness and changes the thickness of the border of the rectangles accordingly. 
* getDepth(): Gets the thickness of the border of the rectangles in the sketch. 
* setColour(colour): Takes a given colours hexadecimal value and changes the colour of the rectangles accordingly. 
* getColour(): Gets the colour of the boards hexadecimal value. 
* draw(): 
	* num: The number of rectangles in the sketch. 
	* intervalX: Chnages the height of the animation of the rectangles based on the x-coordinate (xPosition) of the mouse (mouseX). 
	* intervalY: Changes the height of the animation of the rectangles based on the y-coordinate (yPosition) of the mouse (mouseY). 
	* tilt: Calculates the coordinates of the corners of the rectangles based on the yPosition, xPosition, mouseX and mouseY. 
	* rythm: Calculates the position of each rectangle based on the frameCount, mouseX and the xPosition. 