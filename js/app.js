/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const new_game = new Game();
const start_button = document.querySelector("#btn__reset");
const qwerty = document.querySelector("#qwerty");

start_button.addEventListener("click", event => {
  new_game.startGame();
});

qwerty.addEventListener("click", event => {
  if (event.target.tagName == "BUTTON") {
    new_game.handleInteraction( event.target );
  }
});
