/*===============================================
* TreeHouse fullStack techDegree Project 4.
* OOP Game App - phraseHunter.
* by Diego Alvarez @doc on slack.
* April 2021.
================================================*/
//Game.js

// declaring the Game class.
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      "JavaScript Rocks",
      "Do Not Repeat Yourself",
      "Python or JavaScript",
      "Slack channel Team",
      "Stucked in unit four"
    ].map(phrase => new Phrase(phrase));
    this.activePhrase = null;
  }

  /**
  * Function: Start game by reseting the previous one, cleaning the overlay
  * page, and selecting the random phrase.
  */
  startGame() {
    this.resetGame();
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
  * Function: selects a random phrase from phrases property.
  * @return {Object} - Phrase object to be used.
  */
  getRandomPhrase() {
    const rand_index = Math.floor( Math.random() * this.phrases.length );
    return this.phrases[rand_index];
  }


  /**
  * Principal Function: handles onscreen keyboard button clicks, and keyboard
  * events.
  * @param {HTMLButtonElement} interaction - The clicked button or the button
  * reference passed by the keydown event handler in the app.js file (line 28).
  */
  handleInteraction( interaction ) {
    interaction.disabled = true;
    if ( this.activePhrase.checkLetter( interaction.textContent ) ) {
      interaction.classList.add( "chosen" );
      this.activePhrase.showMatchedLetter( interaction.textContent );
      if ( this.checkForWin() ) {
        this.gameOver();
      }
    } else {
      interaction.classList.add( "wrong" );
      this.removeLife();
    }
  }

  /**
  * Function: updates <missed> property and heart image file.
  */
  removeLife() {
    const score = document.querySelectorAll(".tries");
    if (this.missed < 5) {
      score[this.missed].firstElementChild.src = "images/lostHeart.png";
      this.missed += 1;
      if (this.missed === 5) {
        this.gameOver();
      }
    }
  }

  /**
  * Function: checks if the user guessed all the letters.
  * The logic was reversed, checking for none .hide class letters.
  * @return {Boolean} - true for win state, false for lose state.
  */
  checkForWin() {
    const hide_letters = document.querySelectorAll(".hide");
    if (hide_letters.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
  * Function: finish the game. and display the result state and message.
  */
  gameOver() {
    document.getElementById("overlay").style.display = "flex";
    if (this.checkForWin()) {
      document.getElementById("overlay").className = "win";
      document.querySelector("#game-over-message").textContent =
        "It´s a WINNER, Great job!";
    } else {
      document.getElementById("overlay").className = "lose";
      document.querySelector("#game-over-message").textContent =
        "Oops! give it another try";
    }
  }

  /**
  * Function: reverse all the changes in classes and properties.
  * Reseting the game so it can start a new one.
  */
  resetGame() {
    const placeHolders = document.querySelector("ul");
    const keys = document.querySelectorAll(".chosen ,.wrong, .key");
    const score = document.querySelectorAll(".tries");
    this.missed = 0;
    placeHolders.innerHTML = "";
    score.forEach(
      elem => (elem.firstElementChild.src = "images/liveHeart.png")
    );
    keys.forEach(key => {
      key.disabled = false;
      key.className = "key";
    });
  }
}
