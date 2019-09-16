const container = document.querySelector(".container");
const resize = document.querySelector(".resize");
const reset = document.querySelector(".reset");
const rainbow = document.querySelector(".rainbow");
const black = document.querySelector(".black");
const grayScale = document.querySelector(".grayscale");
const MAX_SIZE = 64;	//maximum grid row and column size
const GRID_DIMENSION = 640; //grid will be 640x640px
var div = []; //array to store the cells of the grid
var cellSize;	//size of a single cell from the grid

var rainbowFlag = 0, grayScaleFlag = 0, blackFlag = 1;
var grayTint = 100;

/*
*	This function creates the divs which will be the cells of the grid.
*
*
*/
function createDivs(gridSize){
		
		cellSize = GRID_DIMENSION/gridSize;

		for(var i=0; i<gridSize*gridSize; i++){
			
			div[i] = document.createElement("div");
			container.appendChild(div[i]);
			div[i].style.height = `${cellSize}`;
			div[i].style.width = `${cellSize}`;
			div[i].className += "cell";
			div[i].addEventListener("mouseover", function(e){
			//If the rainbow button was pressed use random colors, else use black	
				if(rainbowFlag == 1) {
					var randomColor = generateRandomColor();
					e.target.style.background = randomColor;

				}
				if(blackFlag == 1){	
					e.target.style.background = "black";

				}
			
			});
		}

		


	
}





/*
*	This function arranges the divs so it looks like a grid.
*
*
*/
function createGrid(size){

	cellSize = GRID_DIMENSION/size;
	createDivs(size);
	
	container.style.gridTemplateColumns = `repeat(${(size)}, ${cellSize}px)`;
	container.style.gridTemplateRows = `repeat(${(size)}, ${cellSize}px)`;

}

/*
*	This function resets the colors of the grid
*
*
*/
reset.addEventListener("click", function(){
	changeColor("white");
});


function changeColor(color){
	var len = container.children.length;
	var childrens = container.children;

	for(var i=0; i<len; i++){
	
		childrens[i].style.background = `${color}`;
	}
}



/*
*	This function initializes the page with a 16x16 grid.
*
*
*/
function init(){

	createGrid(16);
}





/*
*	This function deletes all the cells from the "container" div.
*
*
*/
function removeChildrens(){
	while (container.hasChildNodes()){

    	container.removeChild(container.lastChild);
	}
}


/*
*	This function changes the dimensions of the grid
*
*/

function changeSize(){

	removeChildrens();

	
	var size = prompt("Enter new size(Max 64)");
	if(size <= 0)
		size = prompt("Size must be greater than 0");

	if(size > MAX_SIZE){
		size = MAX_SIZE;
		createGrid(size);
	}
	else{
		createGrid(size);
	}
}






/*
*	This function generates a random color
*
*/
function generateRandomColor(){
	var color = "#";
	var letters = "0123456789ABCDEF";

	for(var i=0; i<6; i++){
		color += letters[Math.floor(Math.random()*16)]
	}

	return color;
}



/*
*	This event toggles the rainbowFlag variable used to check wheater the random button was pressed or not
*
*/
rainbow.addEventListener("click", function(){
	rainbowFlag = 1;
	blackFlag = 0;
	grayScaleFlag = 0;
});


black.addEventListener("click", function(){
	blackFlag = 1;
	rainbowFlag = 0;
	grayScaleFlag = 0;
});


resize.addEventListener("click", changeSize);

init();
