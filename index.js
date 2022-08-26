let player1Score = 0
let player2Score = 0
let player1Turn = true

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1ScoreBoard = document.getElementById("player1ScoreBoard")
const player2ScoreBoard = document.getElementById("player2ScoreBoard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function btnDisplay() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6 + 1)
    if (player1Turn) {
        player1Score += randomNumber
        player1ScoreBoard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2ScoreBoard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 has won! 🥳"
        btnDisplay()
    } else if (player2Score >= 20) {
        message.textContent = "Player 2 has won! 🤩"
        btnDisplay()
    }


    player1Turn = !player1Turn
})

function resetGame() {
    message.textContent = "Player 1 Turn"
    player1ScoreBoard.textContent = 0
    player2ScoreBoard.textContent = 0
    player1Dice.textContent = `-`
    player2Dice.textContent =`-`
    player1Score = 0
    player2Score = 0
    player1Turn = true
    rollBtn.style.display = "block"
    resetBtn.style.display = "none"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}
resetBtn.addEventListener("click", function() {
    resetGame()
})
