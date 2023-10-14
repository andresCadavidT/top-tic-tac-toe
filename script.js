const createPlayer = function(symbol){
    const playerName = symbol;
    return {playerName}
};

const boardGame = (function(){
    const player1 = createPlayer("X");
    const player2 = createPlayer("O");
    let playerTurn = "X"
    const setPlayerTurn = playerTurn == "X" ? "O" : "X";
    const boardCells = [
        null,null,null,
        null,null,null,
        null,null,null
    ]
    const buttonStart = document.querySelector(".start")
    const cellsDOM = document.querySelectorAll(".box-cell")

    const runPlayerTurn = function(numCell, cell){
        if (playerTurn == "X") {
            pickCell(numCell, cell)
            checkVictory()
        } else if (playerTurn == "O"){
            pickCell(numCell, cell)
            playerTurn = "X"
            checkVictory()
        }
        return playerTurn
    }
    const pickCell = function(numCell, cell){
        switch (boardCells[numCell]) {
            case null:
                boardCells[numCell] = playerTurn
                cell.textContent = playerTurn
                playerTurn = setPlayerTurn
                break;
            case "X": case "O":
                boardCells[numCell] = boardCells[numCell]
                alert("please select another cell")
                cellTextContent = playerTurn
                playerTurn = playerTurn
                break;
        } 
    }
    const checkVictory = function(){
        if (
            (boardCells[0] == boardCells[1]
            && boardCells[1] == boardCells[2]
            && boardCells[2] == ("X" || "Y")
            ))
        {return endGame()}
        if (
            (boardCells[3] == boardCells[4]
            && boardCells[4] == boardCells[5]
            && boardCells[5] == ("X" || "Y")
            ))
        {return endGame()}
        if (
            (boardCells[6] == boardCells[7]
            && boardCells[7] == boardCells[8]
            && boardCells[8] == ("X" || "Y")
            ))
        {return endGame()}
        if (
            (boardCells[0] == boardCells[3]
            && boardCells[3] == boardCells[6]
            && boardCells[6] == ("X" || "Y")
            ))
        {return endGame()}
        if (
            (boardCells[1] == boardCells[4]
            && boardCells[4] == boardCells[7]
            && boardCells[7] == ("X" || "Y")
            ))
        {return endGame()}
        if (
            (boardCells[2] == boardCells[5]
            && boardCells[5] == boardCells[8]
            && boardCells[8] == ("X" || "Y")
            ))
        {return endGame()}
        if (
            (boardCells[6] == boardCells[4]
            && boardCells[4] == boardCells[2]
            && boardCells[2] == ("X" || "Y")
            ))
        {return endGame()}
        if (
            (boardCells[0] == boardCells[4]
            && boardCells[4] == boardCells[8]
            && boardCells[8] == ("X" || "Y")
            ))
        {return endGame()}
        else {
            console.log("Not a winner yet")
        }    
    }

    const endGame = function(){
        console.log("endGame")
        playerTurn = null
    }

    const startListeners = (function(){
            cellsDOM.forEach((cell)=>{
                cell.addEventListener("click", ()=>{
                    const cellId = cell.id
                    runPlayerTurn(cellId, cell)
                    console.log(boardCells)
                })
            })
    })()
    console.log(boardCells)
})()



