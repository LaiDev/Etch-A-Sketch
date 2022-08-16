
let container = document.querySelector(".container")



for(let i = 0; i < 256; i++)
{
    let div = document.createElement("div");
    div.classList.add("grid-item")
    div.style.backgroundColor = "lightgray"
    div.style.height = "100px";
    div.style.width = "100px";
    
    container.append(div);
}

