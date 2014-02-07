/*
     Name:Lyteia Kitchen
     Date:02/05/13
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */
window.onload = function() {

/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 6 different Canvases in index.html one for each problem.
// Link the main.js file
// Setup the call to that canvas and get it's 2d context



/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
				ctx.strokeStyle = "black";
				ctx.fillStyle = "blue";
				ctx.lineWidth = 5;
				ctx.fillRect(0,0,50,100);		
				ctx.strokeRect(0,0,50,100);			
		}	
	}//1st canvas ends here



/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

	var theCanvas2 = document.getElementById('Canvas2');
	var ctx2 = theCanvas2.getContext("2d");
	if(ctx2){
				ctx2.fillStyle = 'rgba(255,0,0,.5)';
				ctx2.lineWidth = 5;
				ctx2.strokeStyle = 'black';
				ctx2.beginPath();
				ctx2.arc(50,50,20,0, (Math.PI/180) * 360, false);
				ctx2.fill();
				ctx2.stroke();
			}

	


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

	var theCanvas3 = document.getElementById('Canvas3');
	var ctx3 = theCanvas3.getContext("2d");
	if(ctx3){
				ctx3.lineWidth = 5;
				ctx3.strokeStyle = 'orange';
				ctx3.fillStyle = 'red';
				
				ctx3.beginPath();
				ctx3.moveTo(100, 100);
				ctx3.lineTo(150, 30);
				ctx3.lineTo(175, 100);
				ctx3.lineTo(100, 55);
				ctx3.lineTo(200, 55);
				ctx3.lineTo(100, 100);
				ctx3.closePath();
				ctx3.stroke();
				ctx3.fill();

	}

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

	var theCanvas4 = document.getElementById('Canvas4');
	var ctx4 = theCanvas4.getContext("2d");
	if(ctx4){
				ctx4.strokeStyle = 'orange';
				ctx4.fillStyle = 'red';
				ctx4.beginPath();
				ctx4.moveTo(50, 100);
				ctx4.bezierCurveTo(50,50,150,50,150,100);
				ctx4.lineCap = 'round';
				ctx4.stroke();
				
				ctx4.lineWidth = 10;
				ctx4.moveTo(150, 100);
				ctx4.bezierCurveTo(150,90,125,90,125,100);
				ctx4.stroke();	
				
				ctx4.moveTo(125, 100);
				ctx4.bezierCurveTo(125,90,100,90,100,100);
				ctx4.stroke();	
				
				ctx4.moveTo(100, 100);
				ctx4.bezierCurveTo(100,90,75,90,75,100);
				ctx4.stroke();
				
				ctx4.moveTo(75, 100);
				ctx4.bezierCurveTo(75,90,50,90,50,100);
				ctx4.stroke();
				ctx4.fill();	
				
			}
			
		

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
	var theCanvas5 = document.getElementById('Canvas5');
	var ctx5 = theCanvas5.getContext('2d')
	if(ctx5) {
				var theText = 'Lyte';
				ctx5.font = '25pt cursive';
				ctx5.fillStyle = 'rgba(55,55,55,.2)';
				ctx5.fillText(theText, 20, 105);
				ctx5.fillStyle = 'red';
				ctx5.fillText(theText, 15, 100);
			}
		}





/*******************************************
PART 6

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
