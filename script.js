const container = document.querySelector(".container");
const resize = document.querySelector(".resize");
const reset = document.querySelector(".reset");
const rainbow = document.querySelector(".rainbow");
const MAX_SIZE = 64;	//maximum grid row and column size
const GRID_DIMENSION = 640; //grid will be 640x640px
var div = []; //array to store the cells of the grid
var cellSize;	//size of a single cell from the grid

var rainbowFlag = 0;
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

			if(rainbowFlag){
				var randomColor = generateRandomColor();
				e.target.style.background = randomColor;
			}else{
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


resize.addEventListener("click", changeSize);


init();

var a;

function generateRandomColor(){
	var color = "#";
	var letters = "0123456789ABCDEF";

	for(var i=0; i<6; i++){
		color += letters[Math.floor(Math.random()*16)]
	}

	return color;
}

rainbow.addEventListener("click", function(){
	if(rainbowFlag)
		rainbowFlag = 0;
	else
		rainbowFlag = 1;
})