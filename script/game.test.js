/**
 * @jest-environment jsdom
 */

 const { game, newGame, showScore, addTurn, lightsOn, showTurns } = require("./game"); //import the game module from game.js

 beforeAll(() => { //sets values before the game begins. this means the tests have values to remove to prove functionality.
     let fs = require("fs"); // fs is a built in Node.js module for working with the file system
     let fileContents = fs.readFileSync("index.html", "utf-8"); //The readFileSync method is used to read the contents of the file synchronously and store the result in the fileContents variable.
     document.open(); //document. allows for manipulation of the html file
     document.write(fileContents);
     document.close();
 });
 
 describe("game object contains correct keys", () => { //description
     test("score key exists", () => { //test criteria
         expect("score" in game).toBe(true); // expect function called with argument of "score" is in game variable (game.js)
     });
     test("currentGame key exists", () => {
         expect("currentGame" in game).toBe(true); //tobe function checks the result against the arugment. 
     });
     test("playerMoves key exists", () => {
         expect("playerMoves" in game).toBe(true); // quite simply, all this test is doing is checking the expect arguement is present in the game variable. 
     });
     test("choices key exists", () => {
         expect("choices" in game).toBe(true);
     });
     test("choices contain correct ids", () => {
         expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
     });
     test("turnNumber key exists", () => {
         expect("turnNumber" in game).toBe(true);
     });
 });
 
 describe("newGame works correctly", () => {
     beforeAll(() => { //sets values before the game begins. this means the tests have values to remove to prove functionality.
         game.score = 42;
         game.playerMoves = ["button1", "button2"];
         game.currentGame = ["button1", "button2"];
         document.getElementById("score").innerText = "42";
         newGame();
     });
     test("should set game score to zero", () => {
         expect(game.score).toEqual(0);
     });
     test("should display 0 for the element with id of score", () => {
         expect(document.getElementById("score").innerText).toEqual(0); // retrieves score id and checks the value (innerHTML) is equal to 0.
     });
     test("should clear the player moves array", () => {
         expect(game.playerMoves.length).toBe(0); // retrieves length of playerMoves array in game variable and checks it is equal to 0 i.e is empty.
     });
     test("should add one move to the computer's game array", () => {
         expect(game.currentGame.length).toBe(1);
     });
     test("expect data-listener to be true", () => {
         newGame();
         const elements = document.getElementsByClassName("circle");
         for (let element of elements) {
             expect(element.getAttribute("data-listener")).toEqual("true");
         }
     });
 });
 
 describe("gameplay works correctly", () => {
     beforeEach(() => { 
         game.score = 0;
         game.currentGame = [];
         game.playerMoves = [];
         addTurn();
     });
     afterEach(() => {
         game.score = 0;
         game.currentGame = [];
         game.playerMoves = [];
     });
     test("addTurn adds a new turn to the game", () => {
         addTurn();
         expect(game.currentGame.length).toBe(2);
     });
     test("should add correct class to light up the buttons", () => {
         let button = document.getElementById(game.currentGame[0]);
         lightsOn(game.currentGame[0]);
         expect(button.classList).toContain(game.currentGame[0] + "light");
     });
     test("showTurns should update game.turnNumber", () => {
         game.turnNumber = 42;
         showTurns();
         expect(game.turnNumber).toBe(0);
     });
 });