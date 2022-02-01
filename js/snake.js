import { getInputDirection } from "./input.js";

const snakeBody = [
    {x: 8, y: 9}
];
export const SNAKE_SPEED = 5;
let newSegment = 0;

export function getSnakeHead() {
    return snakeBody[0];
};

// checks to see if the snake overlaps itself
export function snakeOverlap() {
    return onSnake(snakeBody[0], true);
};

// adds a new segment to the snakes body
function addNewSegment(segment) {
    if(newSegment > 0){
        snakeBody.push(segment);
        newSegment = 0;
    }
};

// updates the newsegment variable based on the food.js growth rate
export function getNewSegment(growthRate) {
    newSegment += growthRate;
};

// chacks to see if anything overlaps with the snake
export function onSnake(position, snakeHead = false) {
    return snakeBody.some((segment, index) => {
        if(snakeHead === true && index === 0) return false;
        return (segment.x === position.x && segment.y === position.y);
    })
};

// updates the snake position based on the game loop
export function updateSnake() {
    const inputDirecttion = getInputDirection();
    let newHead = {x: snakeBody[0].x + inputDirecttion.x, y:  snakeBody[0].y + inputDirecttion.y};
    let previouseSnakeTail = snakeBody.pop();
    addNewSegment(previouseSnakeTail);
    snakeBody.unshift(newHead);
};

// draws the snake at the location it is supposed to be at based on the game loop
export function drawSnake(grid) {
    snakeBody.forEach(segment => {
        const drawSegment = document.createElement("div");
        drawSegment.style.gridRowStart = segment.y;
        drawSegment.style.gridColumnStart = segment.x;
        drawSegment.classList.add("snake");
        grid.appendChild(drawSegment);
    });
};