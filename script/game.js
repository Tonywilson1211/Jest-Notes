let game = {
    currentGame: [],
    playerMoves: [],
    score: 0,
    turnNumber: 0,
    lastButton: "",
    turnInProgress: false,
    choices: ["button1", "button2", "button3", "button4"]
};

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;

    for (let circle of document.getElementsByClassName("circle")) { //for loop iterates through circle class
        if (circle.getAttribute("data-listener") !== "true") { // if attribute is false then set event listener
            circle.addEventListener("click", (e) => { //click even, pass in event object 'e' - needed it for click target id as there are different targets
                let move = e.target.getAttribute("id"); // store event target (player move) in move variable
                lightsOn(move); // call lights on with move which illuminates the correct circle
                game.playerMoves.push(move); // push move into game.
                playerTurn(); //call player turn function 
            });
            circle.setAttribute("data-listener", "true"); // set data attribute to true
        }
    }
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    showTurns();
}

function showTurns() {
    game.turnInProgress = true;
    game.turnNumber = 0;
    let turns = setInterval(function () {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
            game.turnInProgress = false;
        }
    }, 800);
}

function playerTurn() {
    let i = game.playerMoves.length - 1;
    if (game.currentGame[i] === game.playerMoves[i]) {
        if (game.currentGame.length === game.playerMoves.length) {
            game.score++;
            showScore();
            addTurn();
        }
    } else {
        alert("Wrong move!");
        newGame();
    }
}

function lightsOn(circ) {//circ because the games has circles
    document.getElementById(circ).classList.add(circ + "light"); //get element with id passed in
    setTimeout(function () {
        document.getElementById(circ).classList.remove(circ + "light");
    }, 400); //set timer for light in circle
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns };