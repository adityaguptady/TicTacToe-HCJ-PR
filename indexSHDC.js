console.log("Hello Tic Tac Toe Application!")
var turn = "x" // x, o

let responseXArray = []
/*
[2, 1, 4] compare with / search in winArray => false
[2, 1, 4, 3] compare with / search in winArray => true
let winArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]
*/
let responseOArray = []

let winArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]
const trophy = document.getElementById("trophy");
const trophyContainer = document.getElementById("trophy-container")
const oScore = document.getElementById("oScore")
var oScoreCounter = 0
const drawScore = document.getElementById("drawScore")
var drawScoreCounter = 0
const xScore = document.getElementById("xScore")
var xScoreCounter = 0

function startNewGame()
{
    stopConfetti()
    hideTrophy()
    responseXArray = []
    responseOArray = []
    document.getElementById("boardLabel1").textContent = ""
    document.getElementById("boardLabel2").textContent = ""
    document.getElementById("boardLabel3").textContent = ""
    document.getElementById("boardLabel4").textContent = ""
    document.getElementById("boardLabel5").textContent = ""
    document.getElementById("boardLabel6").textContent = ""
    document.getElementById("boardLabel7").textContent = ""
    document.getElementById("boardLabel8").textContent = ""
    document.getElementById("boardLabel9").textContent = ""
    turn = "x"
}

function resetScores()
{
    stopConfetti()
    hideTrophy()
    responseXArray = []
    responseOArray = []
    oScoreCounter = 0
    xScoreCounter = 0
    xScore.textContent = xScoreCounter
    oScore.textContent = oScoreCounter
    document.getElementById("boardLabel1").textContent = ""
    document.getElementById("boardLabel2").textContent = ""
    document.getElementById("boardLabel3").textContent = ""
    document.getElementById("boardLabel4").textContent = ""
    document.getElementById("boardLabel5").textContent = ""
    document.getElementById("boardLabel6").textContent = ""
    document.getElementById("boardLabel7").textContent = ""
    document.getElementById("boardLabel8").textContent = ""
    document.getElementById("boardLabel9").textContent = ""
    turn = "x"
}

function boxClicked(id)
{
    console.log(id+" Box clicked!!!")
    if(responseXArray.includes(id) || responseOArray.includes(id))
    {
        alert("Already filled!!")
    }
    else
    {
        switch(id)
        {
            case 1:
            {
                if(turn === "x")
                {
                    document.getElementById("boardLabel1").textContent = "X"
                    responseXArray.push(1)
                    switchTurn()
                }
                else if(turn === "o")
                {
                    document.getElementById("boardLabel1").textContent = "O"
                    responseOArray.push(1)
                    switchTurn()
                }
                break;
            }
            case 2:
            {
                if(turn === "x")
                {
                    document.getElementById("boardLabel2").textContent = "X"
                    responseXArray.push(2)
                    switchTurn()
                }
                else if(turn === "o")
                {
                    document.getElementById("boardLabel2").textContent = "O"
                    responseOArray.push(2)
                    switchTurn()
                }
                    
                break;
            }
            case 3:
            {
                if(turn === "x")
                {
                    document.getElementById("boardLabel3").textContent = "X"
                    responseXArray.push(3)
                    switchTurn()
                }
                else if(turn === "o")
                {
                    document.getElementById("boardLabel3").textContent = "O"
                    responseOArray.push(3)
                    switchTurn()
                }
                    
                break;
            }
            case 4:
            {
                if(turn === "x")
                {
                    document.getElementById("boardLabel4").textContent = "X"
                    responseXArray.push(4)
                    switchTurn()
                }
                else if(turn === "o")
                {
                    document.getElementById("boardLabel4").textContent = "O"
                    responseOArray.push(4)
                    switchTurn()
                }
                break;
            }
            case 5:
            {
                if(turn === "x")
                {
                    document.getElementById("boardLabel5").textContent = "X"
                    responseXArray.push(5)
                    switchTurn()
                }
                else if(turn === "o")
                {
                    document.getElementById("boardLabel5").textContent = "O"
                    responseOArray.push(5)
                    switchTurn()
                }
                break;
            }
            case 6:
            {
                if(turn === "x")
                {
                    document.getElementById("boardLabel6").textContent = "X"
                    responseXArray.push(6)
                    switchTurn()
                }
                else if(turn === "o")
                {
                    document.getElementById("boardLabel6").textContent = "O"
                    responseOArray.push(6)
                    switchTurn()
                }
                break;
            }
            case 7:
            {
                if(turn === "x")
                {
                    document.getElementById("boardLabel7").textContent = "X"
                    responseXArray.push(7)
                    switchTurn()
                }
                else if(turn === "o")
                {
                    document.getElementById("boardLabel7").textContent = "O"
                    responseOArray.push(7)
                    switchTurn()
                }
                break;
            }
            case 8:
            {
                if(turn === "x")
                {
                    document.getElementById("boardLabel8").textContent = "X"
                    responseXArray.push(8)
                    switchTurn()
                }
                else if(turn === "o")
                {
                    document.getElementById("boardLabel8").textContent = "O"
                    responseOArray.push(8)
                    switchTurn()
                }
                break;
            }
            case 9:
            {
                if(turn === "x")
                {
                    document.getElementById("boardLabel9").textContent = "X"
                    responseXArray.push(9)
                    switchTurn()
                }
                else if(turn === "o")
                {
                    document.getElementById("boardLabel9").textContent = "O"
                    responseOArray.push(9)
                    switchTurn()
                }
                break;
            }
        }
        if(turn === "o")
        {
            if(responseXArray.length > 2)
            {
                let result = checkWin(responseXArray)
                console.log(result)
                if(result)
                {
                    xScore.textContent = ++xScoreCounter
                    showTrophy()
                    startConfetti()
                }
            }
        }
        if(turn === "x")
        {
            if(responseOArray.length > 2)
            {
                let result = checkWin(responseOArray)
                console.log(result)
                if(result)
                {
                    oScore.textContent = ++oScoreCounter
                    showTrophy()
                    startConfetti()
                }
            }
        }
    }
    
    // console.log("responseXArray: ", responseXArray)
    // console.log("responseOArray: ", responseOArray)
}

function switchTurn()
{
    if(turn === "x")
        turn = "o"
    else 
        turn = "x"
}

function checkWin(playerMoves) 
{
    return winArray.some(winCombo =>
        winCombo.every(num => playerMoves.includes(num))
    );
}

/*
1 2 3 
4 5 6 
7 8 9

winArray
[1 2 3]
[4 5 6]
[7 8 9]
[1 4 7]
[2 5 8]
[3 6 9]
[1 5 9]
[3 5 7]

*/
function showTrophy() 
{
    trophyContainer.style.display = "flex"
    console.log("trophyContainer", trophyContainer)
    trophy.style.opacity = 1;
    trophy.style.transform = "translate(-50%, -50%) scale(1)";
    trophy.classList.add("show-trophy");
}

function hideTrophy() 
{
    trophy.classList.remove("show-trophy");
    trophy.style.opacity = 0;
    trophy.style.transform = "translate(-50%, -50%) scale(0)";
    trophyContainer.style.display = "none"
    console.log("trophyContainer", trophyContainer)
}

function startConfetti(player) 
{
    stopConfetti();
    confetti({
            particleCount: 50,
            spread: 80,
            origin: { y: 0.6 },
            colors: player === "X" ? ['#0047ab','#00bfff'] : ['#ff4757','#ffa502']
        });
    confettiInterval = setInterval(() => 
    {
        confetti({
            particleCount: 50,
            spread: 80,
            origin: { y: 0.6 },
            colors: player === "X" ? ['#0047ab','#00bfff'] : ['#ff4757','#ffa502']
        });
    }, 4000);
}


let confettiInterval = null;
function stopConfetti() 
{
    if (confettiInterval) 
    {
        clearInterval(confettiInterval);
        confettiInterval = null;
    }
}