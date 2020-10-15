const reset = document.querySelector(".reset");
const status = document.querySelector(".status");
const gridCells = [...document.querySelectorAll(".grid-cell")];

let xIs = true;

const handleWin = (value)=>{
    if(value === 'x'){
        status.innerHTML = `X is won!`
    }
    else{
        status.innerHTML = `<span>O is won!</span>`
    }
}

const gameStatus = ()=>{
    const topLeft      = gridCells[0].classList[1];
    const topMiddle    = gridCells[1].classList[1];
    const topRight     = gridCells[2].classList[1];
    const middleLeft   = gridCells[3].classList[1];
    const middleMiddle = gridCells[4].classList[1];
    const middleRight  = gridCells[5].classList[1];
    const bottomLeft   = gridCells[6].classList[1];
    const bottomMiddle = gridCells[7].classList[1];
    const bottomRight  = gridCells[8].classList[1];

    if(topLeft && topLeft === topMiddle && topLeft=== topRight){
        handleWin(topLeft)
        gridCells[0].classList.add("won");
        gridCells[1].classList.add("won");
        gridCells[2].classList.add("won");
    }
    else if(middleLeft && middleLeft === middleMiddle && middleLeft=== middleRight){
        handleWin(middleLeft)
        gridCells[3].classList.add("won");
        gridCells[4].classList.add("won");
        gridCells[5].classList.add("won");
    }
    else if(bottomLeft && bottomLeft === bottomMiddle && bottomLeft=== bottomRight){
        handleWin(bottomLeft)
        gridCells[6].classList.add("won");
        gridCells[7].classList.add("won");
        gridCells[8].classList.add("won");
    }

    else if(topLeft && topLeft === middleLeft && topLeft === bottomLeft){
        handleWin(topLeft)
        gridCells[0].classList.add("won");
        gridCells[3].classList.add("won");
        gridCells[6].classList.add("won");
    }
    else if(topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle){
        handleWin(topMiddle)
        gridCells[1].classList.add("won");
        gridCells[4].classList.add("won");
        gridCells[7].classList.add("won");
    }
    else if(topRight && topRight === middleRight && topRight === bottomRight){
        handleWin(topRight)
        gridCells[2].classList.add("won");
        gridCells[5].classList.add("won");
        gridCells[8].classList.add("won");
    }
    else if(topLeft && topLeft === middleMiddle && topLeft === bottomRight){
        handleWin(topLeft)
        gridCells[0].classList.add("won");
        gridCells[4].classList.add("won");
        gridCells[8].classList.add("won");
    }
    else if(topRight && topRight === middleMiddle && topRight === bottomLeft){
        handleWin(topRight)
        gridCells[2].classList.add("won");
        gridCells[4].classList.add("won");
        gridCells[6].classList.add("won");
    }
    else if(topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight){
        status.innerHTML = `<span style="color: red">Draw Match!</span>`
    }
    else{
        xIs = !xIs;
        if(xIs){
            status.innerHTML = `X is next`
        }
        else{
            status.innerHTML = `<span>O is next</span>`
        }
    }
}

//Click on cell
gridCells.forEach(function(gridCell){
    gridCell.addEventListener("click",function(e){
        if(e.currentTarget.classList.contains("x") || e.currentTarget.classList.contains("o")){
            return;
        }
        if(xIs){
            e.currentTarget.classList.add("x")
            gameStatus();
        }
        else{
            e.currentTarget.classList.add("o")
            gameStatus();
        }
    })
})

//Reset Game
reset.addEventListener("click",()=>{
    xIs = true;
    status.innerHTML = `X is next`;
    gridCells.forEach(function(gridCell){
        gridCell.classList.remove("x")
        gridCell.classList.remove("o")
        gridCell.classList.remove("won")
    })
})