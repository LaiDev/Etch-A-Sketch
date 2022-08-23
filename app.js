let canvas = document.querySelector(".canvas");


// createGrid() sets the grid size to be the size inputed by the user. It then calls the createGridSquares() function to populate the created grid. By default the gridSize is set to 10

function createGrid(gridSize)
{
    canvas.style.gridTemplateColumns = (`repeat(${gridSize}, 1fr`);
    canvas.style.gridTemplateRows = (`repeat(${gridSize}, 1fr`);

    createGridSquares(gridSize);
}

createGrid(10);

// createGridSquares multiples the gridSize by itself to calculate the total amount of squares needed for the grid. Once its calculated, the divs are created and added to the DOM

let cellColor = "black";


function createGridSquares(gridSize)
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



let clearBtn = document.querySelector(".clear-btn")

clearBtn.addEventListener("click", clearGrid)

function clearGrid()
{
    let myGridItems = document.querySelectorAll(".gridItem")

    myGridItems.forEach(gridItem => {
        gridItem.style.backgroundColor = "lightGray"
    })
}


//updateGrid is called when the user clicks and releases the slider. The function then gets the value from the slider, destroys the current grid, and creates a new grid with the slider value


let slider = document.querySelector("#slider");

slider.addEventListener("input", updateGrid)

function updateGrid()
{
    let newGridValue = slider.value;
    
    let currentGridItems = document.querySelectorAll(".gridItem");


    for(gridItem of currentGridItems)
    {
        gridItem.remove();
    }

    createGrid(newGridValue);

    //Updates the Grid Size Text

    let valueText = document.querySelectorAll("#value");

    valueText.forEach(value => {
        value.innerHTML = `${newGridValue}`
    })
    
}



