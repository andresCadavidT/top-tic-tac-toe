const boardGame = (function(){
    const boardCells = [
        null,null,"X",
        null,null,null,
        null,null,null
    ]
    return {boardCells}
})()

const createPlayer = function(symbol){
    const playerName = symbol;
    const cell = boardGame.boardCells
    const pickCell = function(numCell){
        switch (cell[numCell]) {
            case null:
                cell[numCell] = playerName
                break;
            case "X": case "O":
                cell[numCell] = cell[numCell]
                alert("Select a valid cell")
                // ALGO QUE REPITA EL TURNO DEL JUGADOR ACUAL
                break;
        }   
    }
    return {playerName, pickCell}
}

const victory = function(){
    console.log(boardGame.boardCells)
    if (
        boardGame.boardCells[0] == "X"
        && boardGame.boardCells[1] == "X"
        && boardGame.boardCells[2] == "X"
        ){
            console.log("WINNER PLAYER1")
        }
        else {}
}

const inicio = (function(){
    const player1 = createPlayer("X");
    const player2 = createPlayer("O");
    player1.pickCell(2) 
    // funcion que verifique si hay victoria o no. 
    victory()
    // Si no, ejecuta "player2.elegirCasilla("numero")"
    // player2.pickCell(3)
    //si, si, ejecuta WIN()

    return(player1, player2)
})()