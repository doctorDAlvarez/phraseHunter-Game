/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }


   addPhraseToDisplay() {
     const phrase_div = document.querySelector("#phrase");
     let phrase_arr = this.phrase.split("");
     phrase_arr.forEach( char => {
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


   checkLetter( letter ) {
     if ( this.phrase.search(letter) === -1 ) {
       return false;
     } else {
       return true;
     }
   }


   showMatchedLetter( letter ) {
      const letter_elem = document.querySelectorAll(`.${letter}`);
      letter_elem.forEach( elem => {
        elem.classList.remove("hide");
        elem.classList.add("show");
      });
   }
}
