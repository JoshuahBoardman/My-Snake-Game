import { hideMenu } from "./menu.js";

let inputDirection = {x: 0, y: 0};
let previousInputDirection = {x: 0, y: 0};
let hasMoved = false;

// updates the previouse input direction and retunrs the input direction for use else where.
export function getInputDirection() {
    previousInputDirection = inputDirection;
    if (hasMoved) {
        hideMenu();
    }
    return inputDirection;
};

// updates the input direction based on user input
window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp":
            if ( previousInputDirection.y === 1) return;
            inputDirection = {x: 0, y: -1};
            hasMoved = true;
            break;
        case "ArrowDown":
            if ( previousInputDirection.y === -1) return;
            inputDirection = {x: 0, y: 1};
            hasMoved = true;
            break;
        case "ArrowRight":
            if ( previousInputDirection.x === -1) return;
            inputDirection = {x: 1, y: 0};
            hasMoved = true;
            break;
        case "ArrowLeft":
            if ( previousInputDirection.x === 1) return;
            inputDirection = {x: -1, y: 0};
            hasMoved = true;
    };
});