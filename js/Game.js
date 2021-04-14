/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = ["JavaScript Rocks",
                     "Do Not Repeat Yourself",
                     "Python or JavaScript",
                     "Animal Planet",
                     "Stucked in unit four"]
                     .map( phrase => new Phrase(phrase));
     this.activePhrase = null;
   }

   startGame() {
     document.getElementById("overlay").style.display = "none";
     this.activePhrase = this.getRandomPhrase();
     this.activePhrase.addPhraseToDisplay();
   }

   getRandomPhrase() {
      const rand_index = Math.floor(Math.random() * this.phrases.length);
      return this.phrases[rand_index];
    }

   handleInteraction( key_button ) {
     // gets keyboard event (guess) check if match any letter.
     key_button.disabled = true;
     if ( this.activePhrase.checkLetter( key_button.textContent ) ) {
        key_button.classList.add("chosen");
        this.activePhrase.showMatchedLetter( key_button.textContent );
        if (this.checkForWin()) {
          this.gameOver();
        }
     } else {
        key_button.classList.add("wrong");
        this.removeLife();
      }
   }

   removeLife() {
     const score = document.querySelector("ol");
     score.children[this.missed].firstElementChild.src =
     "images/lostHeart.png";
     this.missed += 1;
     if (this.missed === 5) {
       this.gameOver();
     }

   }

   checkForWin() {
     //check if all the letters of activePhrase has been revealed.

   }

   gameOver() {
     //displays original overlay.
     // update h1 element with a friendly message plus replace start css class with win or lose class.
   }


 }
