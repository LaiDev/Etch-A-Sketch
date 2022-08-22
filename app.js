
let canvas = document.querySelector(".canvas");
let gridSize = 10;

// createGrid() sets the grid size to be the size inputed by the user. It then calls the createGridSquares() function to populate the created grid

function createGrid()
{
    canvas.style.gridTemplateColumns = (`repeat(${gridSize}, 1fr`);
    canvas.style.gridTemplateRows = (`repeat(${gridSize}, 1fr`);

    createGridSquares();
}

createGrid();

// createGridSquares multiples the gridSize by itself to calculate the total amount of squares needed for the grid. Once its calculated, the divs are created and added to the DOM

let cellColor = "black";


function createGridSquares()
{
    let totalSquares = gridSize * gridSize;
    
    for(let gridItems = 0; gridItems < totalSquares; gridItems++)
    {
        let div = document.createElement("div");
        div.classList.add("gridItem")

        canvas.append(div);

        div.onmouseenter = () => {
            div.style.backgroundColor = `${cellColor}`
        }

    }

}


//Gets all divs with the class of color. When a div is clicked it makes the cell color equal to the color of the div.

let colorSquare = document.querySelectorAll(".color");

function changeBrushColor() {
    colorSquare.forEach(color => {
        color.onclick = () => {
            cellColor = color.value;
        }
    })
}


changeBrushColor();

//Gets all gridItem and loop through them. For each gridItem that is found, its background color will become light gray when the claer button is clicked

let myGridItems = document.querySelectorAll(".gridItem")

let clearBtn = document.querySelector(".clear-btn")

clearBtn.addEventListener("click", clearGrid)

function clearGrid()
{
    myGridItems.forEach(gridItem => {
        gridItem.style.backgroundColor = "lightGray"
    })
}


