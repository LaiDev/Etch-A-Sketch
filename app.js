
let canvas = document.querySelector(".canvas");
let colorSquare = document.querySelectorAll(".color");


let gridSize = 10;
let cellColor = "black";

// createGrid() sets the grid size to be the size inputed by the user. It then calls the createGridSquares() function to populate the created grid

function createGrid()
{
    canvas.style.gridTemplateColumns = (`repeat(${gridSize}, 1fr`);
    canvas.style.gridTemplateRows = (`repeat(${gridSize}, 1fr`);

    createGridSquares();
}

// createGridSquares multiples the gridSize by itself to calculate the total amount of squares needed for the grid. Once its calculated, the divs are created and added to the DOM

function createGridSquares()
{
    let totalSquares = gridSize * gridSize;
    
    for(let gridItems = 0; gridItems < totalSquares; gridItems++)
    {
        let div = document.createElement("div");
        div.classList.add("grid-item")

        canvas.append(div);

        div.onmouseenter = () => {
            div.style.backgroundColor = `${cellColor}`
        }

    }

}


function changeBrushColor() {
    colorSquare.forEach(color => {
        color.onclick = () => {
            cellColor = color.value;
        }
    })
}



createGrid();
changeBrushColor();
