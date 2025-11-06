console.log("Javascript from Tic Tac Toe")

let turn = "x" //x, o
let xResponseArray = []
let oResponseArray = []
var playerTurnLabel = document.getElementById("playerTurnLabel")

function boardClicked(id)
{
    console.log(id+" boardClicked")
    updateBoardLabel("boardLabel"+id, id)
}
function manageTurn()
{
    if(turn === "x")
    {
        turn = "o"
        playerTurnLabel.textContent = "O"
    }
    else if(turn === "o")
    {
        turn = "x"
        playerTurnLabel.textContent = "X"
    }
}
function updateBoardLabel(labelId, id)
{
    if(turn === "x")
    {
        if(!xResponseArray.includes(id) && !oResponseArray.includes(id))
        {
            document.getElementById(labelId).textContent = "X"
            manageTurn()
            xResponseArray.push(id)
        }
    }
    else if(turn === "o")
    {
        if(!xResponseArray.includes(id) && !oResponseArray.includes(id))
        {
            document.getElementById(labelId).textContent = "O"
            manageTurn()
            oResponseArray.push(id)
        }
    }
    console.log("xResponseArray: ", xResponseArray)
    console.log("oResponseArray: ", oResponseArray)
}