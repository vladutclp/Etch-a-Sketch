const container = document.querySelector(".container");

const reset = document.querySelector(".reset");
const MAX_SIZE = 64;
var div = [];

var n = 16;


/*
function checkMax(n){
	if(n > MAX_SIZE){
		gridSize = MAX_SIZE;
	}
	else{

	}
}
*/

var cellSize = 640/n;

function createDivs(gridSize){
		

		for(var i=0; i<gridSize*gridSize; i++){
			

			div[i] = document.createElement("div");
			
			container.appendChild(div[i]);
			div[i].style.height = `${cellSize}`;
			div[i].style.width = `${cellSize}`;
			div[i].className += "cell";
			div[i].addEventListener("mouseover", function(e){
			e.target.style.background = "black";
			});
		}

		


	
}


function createGrid(size){
	cellSize = 640/size;
	createDivs(size);
	
	console.log(cellSize);
	container.style.gridTemplateColumns = `repeat(${(size)}, ${cellSize}px)`;
	container.style.gridTemplateRows = `repeat(${(size)}, ${cellSize}px)`;

}



reset.addEventListener("click", function(e){
	var len = container.children.length;
	var childrens = container.children;

	for(var i=0; i<len; i++){
	
		childrens[i].style.background = "white";
	}

	
});

createGrid(n);

const resize = document.querySelector(".resize");


function removeChildrens(){
	while (container.hasChildNodes()){

    	container.removeChild(container.lastChild);
	}
}




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
