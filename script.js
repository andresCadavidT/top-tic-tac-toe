const createPlayer = function(symbol){
    const playerName = symbol;
    return {playerName}
};

const boardGame = (function(){
    const player1 = createPlayer("X");
    const player2 = createPlayer("O");
    let playerTurn = "X"
    const setPlayerTurn = function(){
        playerTurn = playerTurn == "X" ? "O" : "X";
    } 
    const boardCells = [
        null,null,null,
        null,null,null,
        null,null,null
    ]
    const buttonStart = document.querySelector(".start")
    const cellsDOM = document.querySelectorAll(".box-cell")
    const boardOnDOM = document.querySelector(".box-board-game")
    const resultDOM = document.querySelector(".result")

    const runPlayerTurn = function(numCell, cell){
        if (playerTurn == "X") {
            pickCell(numCell, cell)
            checkVictory()
            console.log(playerTurn)
        } else if (playerTurn == "O"){
            pickCell(numCell, cell)
            checkVictory()
            console.log(playerTurn)
        }
    }
    const pickCell = function(numCell, cell){
        switch (boardCells[numCell]) {
            case null:
                boardCells[numCell] = playerTurn
                cell.textContent = playerTurn
                break;
            case "X": case "O":
                boardCells[numCell] = boardCells[numCell]
                alert("please select another cell")
                cellTextContent = playerTurn
                setPlayerTurn()
                break;
        } 
    }
    const checkVictory = function(){
        if (
            (boardCells[0] == boardCells[1]
            && boardCells[1] == boardCells[2]
            && ((boardCells[2] == "X") || (boardCells[2] == "O"))
            ))
        {return endGame()}
        if (
            (boardCells[3] == boardCells[4]
            && boardCells[4] == boardCells[5]
            && ((boardCells[5] == "X") || (boardCells[5] == "O"))
            ))
        {return endGame()}
        if (
            (boardCells[6] == boardCells[7]
            && boardCells[7] == boardCells[8]
            && ((boardCells[8] == "X") || (boardCells[8] == "O"))
            ))
        {return endGame()}
        if (
            (boardCells[0] == boardCells[3]
            && boardCells[3] == boardCells[6]
            && ((boardCells[6] == "X") || (boardCells[6] == "O"))
            ))
        {return endGame()}
        if (
            (boardCells[1] == boardCells[4]
            && boardCells[4] == boardCells[7]
            && ((boardCells[7] == "X") || (boardCells[7] == "O"))
            ))
        {return endGame()}
        if (
            (boardCells[2] == boardCells[5]
            && boardCells[5] == boardCells[8]
            && ((boardCells[8] == "X") || (boardCells[8] == "O"))
            ))
        {return endGame()}
        if (
            (boardCells[6] == boardCells[4]
            && boardCells[4] == boardCells[2]
            && ((boardCells[2] == "X") || (boardCells[2] == "O"))
            ))
        {return endGame()}
        if (
            (boardCells[0] == boardCells[4]
            && boardCells[4] == boardCells[8]
            && ((boardCells[8] == "X") || (boardCells[8] == "O"))
            ))
        {return endGame()}
        else {
            console.log("Not a winner yet")
            setPlayerTurn()
        }    
    }

    const endGame = function(){
        console.log("endGame")
        resultDOM.textContent = "The Winner Is: " + playerTurn
        playerTurn = null
    }

    const startListeners = (function(){
            buttonStart.addEventListener("click",()=>{
                boardOnDOM.style.display = "grid";
                cellsDOM.forEach((cell)=>{
                    cell.addEventListener("click", ()=>{
                        const cellId = cell.id
                        runPlayerTurn(cellId, cell)
                        console.log(boardCells)
                    })
                })
            })
    })()
    console.log(boardCells)
})()



