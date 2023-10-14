const createPlayer = function(symbol){
    const playerName = symbol;
    return {playerName}
};

const boardGame = (function(){
    const player1 = createPlayer("X");
    const player2 = createPlayer("O");
    let playerTurn = "X"
    const boardCells = [
        null,null,null,
        null,null,null,
        null,null,null
    ]
    const runPlayerTurn = function(){
        if (playerTurn == "X") {
            pickCell(prompt("give me a cell"))
            playerTurn = "O"
            checkVictory()
        }
        if (playerTurn == "O"){
            pickCell(prompt("give me a cell"))
            playerTurn = "X"
            checkVictory()
        }
        return playerTurn
    }
    const pickCell = function(numCell){
        switch (boardCells[numCell]) {
            case null:
                boardCells[numCell] = playerTurn
                break;
            case "X": case "O":
                boardCells[numCell] = boardCells[numCell]
                alert("Select a valid cell")
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
            runPlayerTurn()
        }    
    }

    const endGame = function(){
        console.log("endGame")
        playerTurn = null
    }

    runPlayerTurn()
})()



