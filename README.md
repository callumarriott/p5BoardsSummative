# Documentation
## boards.js
* **Constructor()**: 
	* **xPosition**: The x-coordinate of the middle rectangle of the sketch. 
	* **yPosition**: The y-coordinate of the middle rectangle of the sketch. 
	* **rectX**: The width of the rectangles. 
	* **rectY**: The height of the rectangles. 
	* **depth**: The thickness of the borders of the rectangles. 
	* **colour**: The colour of the rectangles. 
* **setXPosition(xPosition)**: Takes a given 'xPosition' and moves the sketch across the x axis accordingly. 
* **getXPosition()**: Gets the value of 'xPosition'.  
* **setYPosition(yPosition)**: Takes a given 'yPosition' and moves the sketch across the y axis accordingly. 
* **getYPosition()**: Gets the value of 'yPosition'. 
* **setRectX(rectX)**: Takes a given 'rectX' and extends the width of the rectangles accordingly. 
* **getRectX()**: Gets the value of 'rectX'. 
* **setRectY(rectY)**: Takes a given 'rectY' and extends the height of the rectangles accordingly. 
* **getRectY()**: Gets the value of 'rectY'. 
* **setDepth(depth)**: Takes a given 'depth' and changes the thickness of the border of the rectangles accordingly. 
* **getDepth()**: Gets the value of 'depth'.  
* **setColour(colour)**: Takes a given 'colour' (which is a hexadecimal value) and changes the colour of the rectangles accordingly. 
* **getColour()**: Gets the value of 'colour'. 
* **draw()**: 
	* **num**: The number of rectangles in the sketch. 
	* **intervalX**: Changes the height of the animation of the rectangles based on 'mouseX'. 
	* **intervalY**: Changes the height of the animation of the rectangles based on 'mouseY'. 
	* **tilt**: Calculates the coordinates of the corners of the rectangles based on the 'yPosition', 'xPosition', 'mouseX', and 'mouseY'. 
	* **rythm**: Calculates the position of each rectangle based on 'frameCount', 'mouseX', and 'xPosition'. 
## index.js
* **b**: The initalisation of the variable that will contain the class. 
* **setup()**: Initialises the boards class in the variable b and creates the canvas. 
* **draw()**: Continuously calls the draw() function from the boards class and creates the background colour. 
* **changeXPosition()**: Takes a given value and passes it to the function 'setXPosition()'. 
* **changeYPosition()**: Takes a given value and passes it to the function 'setYPosition()'. 
* **changeRectX()**: Takes a given value and passes it to the function 'setRectX()'. 
* **changeRectY()**: Takes a given value and passes it to the function 'setRectY()'. 
* **changeDepth()**: Takes a given value and passes it to the function 'setDepth()'. 
* **changeColour()**: Takes a given hexadecimal value and passes it to the function 'setColour()'. 
* **xp**: Holds the value stored in the form to be used by the function 'changeXPosition()'. 
* **yp**: Holds the value stored in the form to be used by the function 'changeYPosition()'. 
* **rx**: Holds the value stored in the form to be used by the function 'changeRectX()'. 
* **ry**: Holds the value stored in the form to be used by the function 'changeRectY()'. 
* **d**: Holds the value stored in the form to be used by the function 'changeDepth()'. 
* **c**: Holds the value stored in the form to be used by the function 'changeColour()'. 
* **bf**: Prevents the sketch from using the default values for each of the variables. 