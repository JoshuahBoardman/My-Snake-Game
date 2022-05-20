import { onSnake, getNewSegment } from "./snake.js";
import {randomGridPosition} from "./grid.js";

const score = document.getElementById("score-value");

const GROWTH_RATE = 1;
let food = randomFoodPosition();
let currentScore = 0;

function updateScore() {
    currentScore += 1;
    score.innerText = `${currentScore}`;
}


// checks to see if the random grid position is on the snake and if not it sets the next food locaton
function randomFoodPosition() {
    let newFoodPosition = null;
    while (newFoodPosition === null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}

// updates if the food is eaten along with the food position
export function updateFood() {
    if(onSnake(food)) {
        food = randomFoodPosition();
        updateScore();
        getNewSegment(GROWTH_RATE);
    }
};

// draws the food at the location its supposed to be at
export function drawFood(grid) {
    const drawFood = document.createElement("div");
    drawFood.style.gridRowStart = food.y;
    drawFood.style.gridColumnStart = food.x;
    drawFood.classList.add("food-wrapper");
    drawFood.innerHTML = `<div class="food"></div>`;
    grid.appendChild(drawFood);

};