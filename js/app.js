/*===============================================
* TreeHouse fullStack techDegree Project 4.
* OOP Game App - phraseHunter.
* by Diego Alvarez @doc on slack.
* April 2021.
================================================*/
//app.js

// global constan declarations and instanciate a new Game object.
const new_game = new Game();
const start_button = document.querySelector("#btn__reset");
const qwerty = document.querySelector("#qwerty");

// here we need to 'typecast' the nodeList returned by querySelectorAll()
// to an Array so we can use Array cool new methods.(like .filter())
const key_buttons = document.querySelectorAll(".key");
const arr_keys = Array.from( key_buttons );

start_button.addEventListener( "click", event => {
  new_game.startGame();
});

qwerty.addEventListener( "click", event => {
  if ( event.target.tagName == "BUTTON" ) {
    new_game.handleInteraction( event.target );
  }
});

/**
* Keydown event handler:
* Callback Function: keyboard-button decoding feature.
* @param {keydown-event} event - filters the array of buttons elements with the * event.key property, then checks if the key was already pressed evaluating its * disabled property. undefined is check to repair a minor console bug with no
* functionality repercusions.
*/
document.addEventListener("keydown", event => {
  button = arr_keys.filter( button => button.textContent === event.key );
  if ( !( button[0] === undefined ) ) {
    if ( !button[0].disabled ) {
      new_game.handleInteraction( button[0] );
    }
  }
});
