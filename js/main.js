import { SNAKE_SPEED, updateSnake, drawSnake, snakeOverlap, getSnakeHead} from "./snake.js";
import { updateFood, drawFood} from "./food.js";
import { outOfBoundsCheck } from "./grid.js";

const grid = document.getElementById("grid");

let previousTime = 0;
let timeSinceLastRender = 0;
let gameOver = false;


// updates the position and actions of all entities
function update() {
    updateSnake();
    updateFood();
    isGameOver();
};

// draws all updated entities
function draw() {
    grid.innerHTML = ""
    drawSnake(grid);
    drawFood(grid);
};

// this updates everything about the game based on the snake speed (in this case every .5 secs)
function gameLoop(timeStamp) {
    if (gameOver) {
        alert("game over");
        return
    }
    timeSinceLastRender = (timeStamp - previousTime) / 1000;
    window.requestAnimationFrame(gameLoop);
    if (timeSinceLastRender < 1 / SNAKE_SPEED) return 
    previousTime = timeStamp;

    update();
    draw();
};

function isGameOver() {
  gameOver = (snakeOverlap() || outOfBoundsCheck(getSnakeHead()));
};


window.requestAnimationFrame(gameLoop);