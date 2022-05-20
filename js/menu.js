const menu = document.getElementById("game-menu");

export function hideMenu() {
    menu.innerHTML = "";
}

export function showGameOverMenu() {
    menu.innerHTML = `
    <h2 class="game-over-menu-header">Game Over</h2>
    <a href="/" class="game-over-button">Play Again</a>
    `
}