var ChooseWord = require('./words');


var UpdateLetters = function (letter) {
    var chosenWord = new ChooseWord();    
    // Loop through the letters of the "solution".
    for (var j = 0; j < this.chosenWord.lettersOfWord.length; j++) {
        // If the guessed letter is in the solution, and we haven't guessed it already..
        if ((letter === this.chosenWord.lettersOfWord[j]) && (this.chosenWord.matchLetters.indexOf(letter) === -1)) {
            // Push the newly guessed letter into the matchedLetters array.
            this.chosenWord.matchLetters.push(letter);
        }
    }
};




module.exports = UpdateLetters;

