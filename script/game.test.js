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
