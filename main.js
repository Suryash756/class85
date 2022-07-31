//Create a reference for canvas 
canvas=document.getElementById("canvas_1");
ctx=canvas.getContext("2d");

//Give specific height and width to the car image
img_width = 75;
img_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
carx=5;
cary=225;
function add() {
	//upload car, and background images on the canvas.
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	img_imgTag.src = background_image;   // load image

	img_imgTag1 = new Image(); //defining a variable with a new image
	img_imgTag1.onload = uploadgreencar; // setting a function, onloading this variable
	img_imgTag1.src = greencar_image;   // load image
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(img_imgTag,0,0,canvas.width,canvas.height);
	

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(img_imgTag1, carx, cary, img_width, img_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
