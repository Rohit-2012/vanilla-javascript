const choices = document.querySelectorAll('.choice')
const score = document.getElementById('score')
const result = document.getElementById('result')
const restart = document.getElementById('restart')
const modal = document.querySelector('.modal')
const scoreBoard = {
    player: 0,
    computer: 0
}

function play(e) {
    restart.style.display = 'inline-block'
    const playerChoice = e.target.id
    const computerChoice = getComputerChoice()
    const winner = getWinner(playerChoice, computerChoice)
   showWinner(winner, computerChoice)
}

function getComputerChoice() {
    const rand = Math.floor(Math.random() * choices.length)
    return choices[rand].id
}

function getWinner(player, computer) {
    if (player === computer) {
        return 'draw'
    } else if (player === 'rock') {
        if (computer === 'paper') {
            return 'computer'
        } else {
            return 'player'
        }
    } else if (player === 'paper') {
        if (computer === 'scissors') {
            return 'computer'
        } else {
            return 'player'
        }
    } else if (player === 'scissors') {
        if (computer === 'rock') {
            return 'computer'
        } else {
            return 'player'
        }
    }
}

function showWinner(winner, computerChoice) {
    if (winner === 'player') {
        scoreBoard.player++
        result.innerHTML = `
        <h1 class='text-win'>You Won</h1>
        <i class ="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
    } else if (winner === 'computer') {
        scoreBoard.computer++
        result.innerHTML = `
        <h1 class='text-lose'>You Lose</h1>
        <i class ="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
    } else {
        result.innerHTML = `
        <h1>It's a Draw</h1>
        <i class ="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
    }

    score.innerHTML = `
    <p>Player: ${scoreBoard.player}</p>
    <p>Computer: ${scoreBoard.computer}</p>
    `

    modal.style.display = 'block'
}

function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}

function restartGame() {
    scoreBoard.player = 0
    scoreBoard.computer = 0
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `
}
choices.forEach(choice => choice.addEventListener('click', play))

window.addEventListener('click', clearModal)

restart.addEventListener('click', restartGame)