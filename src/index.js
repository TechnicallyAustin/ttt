const gameboard = () => {
    const board = () => {}; // set the game board to an array.
    const renderBoard = () => {}; // creates DOM Elements for the board
    const events = () => {}; // creates event listeners for each DOM element
};
const player = (name, marker) => {
    //const name = () => {} // creates a form that requests the user name
    //const marker = () => {} // assigns an X or O marker to the player
    const add = () => {} // fills in the selected array Dom element with player.marker
};
const game = (() => {
    const start = () => {
        const button = document.querySelector(".start-button");
        console.log(button)
        button.addEventListener("click", () => {
            console.log("click")
            // creates Name Form
            // assigns player name and Marker based on Form
            // Populates the Dom with the Gameboard
            // creates Events to play the game.

            // ... continued game logic
        });
    };// creates a start button that will call the Player name function -- starts the game
    const winCombos = () => {}; // assigns win combinations for the game to evaluate a winner
    const rounds = () => {}; // assigns a total number of rounds the game should iterate for.
    const winner = () => {}; // given win combinations and the total number of rounds, evaluates a winner
    const end = () => {}; // 
    const displayWinner = () => {}; // updates the game display with the winner of the game.
    
    return {start}
})();


game.start()