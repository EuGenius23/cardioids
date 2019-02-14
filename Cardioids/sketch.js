var x = [];
var y = [];
var pointNUM = 45;  //The number of points in the circle
var table = 2; 			//The number of "dimensions" the cardioid will take
var lineCol; 				//The line color (just for fanciness)

function setup() {
	createCanvas(600, 600);
	lineCol = color(255, 0, 0);
	angleMode(DEGREES);
	for (i = 0; i < pointNUM; i++) {				 //Giving values to the arrays 
		x[i] = 50 * cos(i * 360 / pointNUM); 	 //as X and Y position relative
		y[i] = 50 * sin(i * 360 / pointNUM); 	 //to a circle
	}
}

function draw() {
	background(220);
	translate(width / 2, height / 2);
	scale(4.5);
	rotate(PI / 2);
	refresh();

	if(pointNUM>200){strokeWeight(0.1);}
	else{strokeWeight(0.5);}								 //Drawing the lines to create cool effect
	stroke(lineCol);

	for (i = 0; i < pointNUM; i++) {
		line(x[i], y[i], x[(i * table) % pointNUM], y[(i * table) % pointNUM]);
	}


	stroke(0); 															 //Drawing the points to visualize them
	strokeWeight(2);

	for (k = 0; k < pointNUM; k++) {
		point(x[k], y[k]);
	}
}

function refresh() {
	table = document.getElementById("Ntaula").value;
	pointNUM = document.getElementById("Npunt").value;
	lineCol = document.getElementById("col").value;

	for (l = 0; l < pointNUM; l++) { 					//Giving new values to the arrays 
		x[l] = 50 * cos(l * 360 / pointNUM); 		//as X and Y position
		y[l] = 50 * sin(l * 360 / pointNUM); 		//based on user input
	}

}