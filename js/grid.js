const BOARD_WIDTH = 15;

// creates a random grid position to do things with
export function randomGridPosition() {
    let newFoodPosition = {x: 0, y: 0};
    newFoodPosition.x = Math.floor(Math.random() * BOARD_WIDTH) + 1;
    newFoodPosition.y = Math.floor(Math.random() * BOARD_WIDTH) + 1;
    return newFoodPosition;
};

// checks to see if a position is outside of the displayed gird
export function outOfBoundsCheck(position) {
    return position.y < 1 || position.y > BOARD_WIDTH ||
     position.x < 1 || position.x > BOARD_WIDTH;
};