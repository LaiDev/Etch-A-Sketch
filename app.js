
let container = document.querySelector(".container");
let gridItem;
let gridSize = 50;


// createGrid() sets the grid size to be the size inputed by the user. It then calls the createGridSquares() function to populate the created grid

function createGrid()
{
    container.style.gridTemplateColumns = (`repeat(${gridSize}, 1fr`);
    container.style.gridTemplateRows = (`repeat(${gridSize}, 1fr`);

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

        container.append(div);

        div.onmouseenter = () => {
            div.style.backgroundColor = "black";
        }
    }

}


createGrid();

