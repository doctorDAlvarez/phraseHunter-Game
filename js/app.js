/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const new_game = new Game();
const start_button = document.querySelector("#btn__reset");
const qwerty = document.querySelector("#qwerty");
const key_buttons = document.querySelectorAll(".key");
const arr_keys = Array.from(key_buttons);

start_button.addEventListener("click", event => {
  new_game.startGame();
});

qwerty.addEventListener("click", event => {
  if (event.target.tagName == "BUTTON") {
    new_game.handleInteraction(event.target);
  }
});

//
document.addEventListener("keydown", event => {
  button = arr_keys.filter(button => button.textContent === event.key);
  if (!(button[0] === undefined)) {
    if (!button[0].disabled) {
      new_game.handleInteraction(button[0]);
    }
  }
});