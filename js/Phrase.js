/*===============================================
* TreeHouse fullStack techDegree Project 4.
* OOP Game App - phraseHunter.
* by Diego Alvarez @doc on slack.
* April 2021.
================================================*/
//Phrase.js

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

/**
* Display phrase on game board.
*/
  addPhraseToDisplay() {
    const phrase_div = document.querySelector("#phrase");
    let phrase_arr = this.phrase.split("");
    phrase_arr.forEach(char => {
      if (char === " ") {
        phrase_div.firstElementChild.insertAdjacentHTML("beforeend", `
            <li class="space"> </li>
          `);
      } else {
        phrase_div.firstElementChild.insertAdjacentHTML("beforeend", `
           <li class="hide letter ${char}">${char}</li>
         `);
      }
    });
  }

  /**
  * Function: Checks if passed letter is in phrase
  * @param {string} letter - Letter to check
  */
  checkLetter(letter) {
    if (this.phrase.search(letter) === -1) {
      return false;
    } else {
      return true;
    }
  }

  /**
  * Function: display matched letter to the placeholder on HTML.
  * @param {string} letter - Letter matched in phrase to display.
  */
  showMatchedLetter(letter) {
    const letter_elem = document.querySelectorAll(`.${letter}`);
    letter_elem.forEach(elem => {
      elem.classList.remove("hide");
      elem.classList.add("show");
    });
  }
}
