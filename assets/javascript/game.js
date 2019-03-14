// Global variables

// creat an array for words
let words = ["white", "black", "blue", "orange", "red", "pink","brown", "gold", "silver",""]
// Pick a random word
let randomNum = Math.floor(Math.random() * words.length);
let selectedLetter = words[randomNum];

// chose where the answers go
let rightWord = [];
let wrongWord = [];
let underScore = [];
// will use dom manipulation here
let docUnderScore = document.getElementsByClassName("underscore");
let docRightGuess = document.getElementsByClassName("rightGuess");
let docWrongGuess = document.getElementsByClassName("wrongGuess");

// check!
// console.log(selectedLetter);

// create underscores according to length of words
let createUnderscore = () => {
// create a for loop
for(let i = 0; i < selectedLetter.length; i++);{
    underScore.push(" ");
}
return underScore;
}
// get user guess
    document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    // create if statements
    if(selectedLetter.indexOf(keyword) > -1){
       rightWord.push(keyword);
    // match right letters with underscore
       underScore[selectedLetter.indexOf(keyword)] = keyword;
       docUnderScore[0].innerHTML = underScore.join(" ");
       docRightGuess[0].innerHTML = rightWord;
    if(underScore.join(" ") === selectedLetter) {
        alert("Great! You won!");
    }
}
     else {
         wrongWord.push(keyword);
         docWrongGuess[0].innerHTML = wrongWord;
     }
});
{
    // underScore[0].innerHTML = createUnderScore().join(" ");
}
