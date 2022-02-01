let inputDirection = {x: 0, y: 0};
let previousInputDirection = {x: 0, y: 0};

// updates the previouse input direction and retunrs the input direction for use else where.
export function getInputDirection() {
    previousInputDirection = inputDirection;
    return inputDirection;
};

// updates the input direction based on user input
window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp":
            if ( previousInputDirection.y === 1) return;
            inputDirection = {x: 0, y: -1};
            break;
        case "ArrowDown":
            if ( previousInputDirection.y === -1) return;
            inputDirection = {x: 0, y: 1};
            break;
        case "ArrowRight":
            if ( previousInputDirection.x === -1) return;
            inputDirection = {x: 1, y: 0};
            break;
        case "ArrowLeft":
            if ( previousInputDirection.x === 1) return;
            inputDirection = {x: -1, y: 0};
    };
});