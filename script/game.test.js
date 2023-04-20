const expectExport = require("expect");
const{game} = require("./game")

beforeAll(() => {
    let fs = require("fs"); //libaray default standard node 
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expectExport("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expectExport("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expectExport("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expectExport("choices" in game).toBe(true);
    });
    test("choices contains correct ids", () => {
        expectExport(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    })
});

// New Game Function Testing
describe("newGame works correctly", () => { //Describing
    beforeAll(() => { // beforeAll is a function provided by the Jest testing framework that allows you to define a block of code to run once before all of the tests in a test suite are run.
        game.score = 42; //set score to be reset in test
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game score to zero", () => { //description
        expect(game.score).toEqual(0); //state what the result should be
    });
    test("should display 0 for the element with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
    test("should clear the player moves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("should clear the computer sequence array", () => {
        expect(game.currentGame.length).toBe(0);
    });
});