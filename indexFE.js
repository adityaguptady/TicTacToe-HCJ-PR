console.log("Javascript from Tic Tac Toe")

let turn = "x" //x, o
let xResponseArray = []
let oResponseArray = []
const winArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]
var win = 0
var xScore = document.getElementById("xScore")
var xScoreCount = 0
var oScore = document.getElementById("oScore")
var oScoreCount = 0
var drawScore = document.getElementById("drawScore")
var drawScoreCount = 0
/*
1 2 3
4 5 6
7 8 9

row, column, diagonal

1 2 3
4 5 6
7 8 9
1 4 7
2 5 8
3 6 9
1 5 9
3 5 7
*/
var playerTurnLabel = document.getElementById("playerTurnLabel")

function boardClicked(id)
{
    // console.log(id+" boardClicked")
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
            if(xResponseArray.length > 2)
            {
                if(winCheck(xResponseArray))
                {
                    xScore.textContent = ++xScoreCount
                    win = 1
                    console.log("X Won")
                }
            }
        }
    }
    else if(turn === "o")
    {
        if(!xResponseArray.includes(id) && !oResponseArray.includes(id))
        {
            document.getElementById(labelId).textContent = "O"
            manageTurn()
            oResponseArray.push(id)
            if(oResponseArray.length > 2)
            {
                if(winCheck(oResponseArray))
                {
                    oScore.textContent = ++oScoreCount
                    win = 1
                    console.log("O Won")
                }
            }
        }
    }
    // console.log("xResponseArray: ", xResponseArray)
    // console.log("oResponseArray: ", oResponseArray)
    if(xResponseArray.length + oResponseArray.length >= 9 && win == 0)
    {
        drawScore.textContent = ++drawScoreCount
        console.log("Draw!!!!")
    }
}

/*
    [1, 2, 3], > 
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7] */
// function winCheck(responseArray) // [4, 1, 3, 2]=>true // [4, 1, 2] => false
// {
//     let checkWinFlag = 0
//     for(let count = 0; count< responseArray.length; count++)
//     {//4
//         checkWinFlag = 0
//         for(let count1 = 0; count1< winArray.length; count1++)//8
//         {//[1, 2, 3]    //[4, 5, 6],    
//             if(winArray[count1].includes(responseArray[count]))
//             {
//                 checkWinFlag++ //1
//                 if(checkWinFlag >2)
//                     return true
//                 break
//             }
//             if(checkWinFlag<3)
//                 checkWinFlag = 0
//         }
//     }
//     if(checkWinFlag < 3)
//         return false
// }
// let result = winCheck([4, 1, 3, 2])
// console.log("result: [4, 1, 3, 2]: ", result)
// winCheck([4, 1, 2])
// console.log("result: [4, 1, 2]: ", result)
function winCheck(responseArray)
{
    //[1, 2, 3], [1,3,2], [2,1,3], 231, 321, 312
    //winCombo = [1,3,2]
    return winArray.some(winCombo =>
        winCombo.every(num => responseArray.includes(num))
    );
    // checks in any of the array element is meeting 
    // the function returned output
}

function newGame()
{
    for(let count = 1; count< 10; count++)
    {
        document.getElementById("boardLabel"+count).textContent = ""
    }
    xResponseArray = []
    oResponseArray = []
    turn = "x"
    playerTurnLabel.textContent = "X"
    win = 0
}

function resetScores()
{
    newGame()
    oScoreCount = 0
    xScoreCount = 0
    drawScoreCount = 0
    xScore.textContent = xScoreCount
    oScore.textContent = oScoreCount
    drawScore.textContent = drawScoreCount
}