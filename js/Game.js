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
     key_button.disabled = true;
     if ( this.activePhrase.checkLetter( key_button.textContent ) ) {
        key_button.classList.add("chosen");
        this.activePhrase.showMatchedLetter( key_button.textContent );
        if ( this.checkForWin() ) {
          this.gameOver();
        }
     } else {
        key_button.classList.add("wrong");
        this.removeLife();
      }
   }

   removeLife() {
     const score = document.querySelectorAll(".tries");
     score[this.missed].firstElementChild.src = "images/lostHeart.png";
     this.missed += 1;
     if (this.missed === 5) {
       this.gameOver();
     }

   }

   checkForWin() {
     const hide_letters = document.querySelectorAll(".hide");
     if ( hide_letters.length === 0 ) {
       return true;
     } else {
       return false;
     }
   }

   gameOver() {
     //displays original overlay.
     document.getElementById("overlay").style.display = "flex";
     if ( this.checkForWin() ) {
        document.getElementById("overlay").className = "win";
        document.querySelector("#game-over-message").textContent = "Congratulations Programmer!";
        this.resetGame();
     } else {
       document.getElementById("overlay").className = "lose";
       document.querySelector("#game-over-message").textContent = "Oops try harder!";
       this.resetGame();
       }
   }

   resetGame() {
     const placeHolders = document.querySelector("ul");
     const score = document.querySelectorAll(".tries");
     const keys = document.querySelectorAll(".chosen ,.wrong, .key");
     this.missed = 0;
     placeHolders.innerHTML = "";
     score.forEach( elem => elem.firstElementChild.src = "images/liveHeart.png");
     keys.forEach( key => {
          key.disabled = false;
          key.className = "key";
     });

   }

}
