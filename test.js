"use strict";

// Creating Hangman with O.O.P.

// inspiration: https://codereview.stackexchange.com/questions/254048/create-a-simple-hangman-game-using-oop-and-javascript

/*
const form = document.getElementById("form_lang");
const changeBtn = document.getElementById("change_lang");
const startBtn = document.getElementById("start_btn");
*/

function randomWord() {
  const wordlist = [
    "acoustics",
    "scratch",
    "military",
    "order",
    "payment",
    "fasten",
    "distribution",
    "mother",
    "evanescent",
    "stiff",
    "dinosaurs",
    "honorable",
    "person",
    "exuberant",
    "cool",
    "moor",
    "shrill",
    "wreck",
    "hollow",
    "route",
    "reward",
    "tax",
    "degree",
    "splendid",
    "first",
    "realize",
    "butter",
    "tame",
    "legal",
    "defeated",
    "zany",
    "whimsical",
    "warn",
    "welcome",
    "boorish",
    "example",
    "coherent",
    "refuse",
    "drum",
    "cautious",
  ];
  let randomNum = Math.floor(Math.random() * wordlist.length);
  let randomWord = wordlist[randomNum];
  return randomWord;
}

class Game {
  constructor(player, word, guesses) {
    this.player = player;
    this.word = word;
    this.guesses = guesses;
  }

  letterCheck(a) {
    let word1 = this.word;
    let wordLetters = word1.split("");
    let letterGuess = a;

    wordLetters.forEach((letter) => {
      if (letterGuess === letter) {
        console.log(letterGuess, "is included");
      }
    });

    return wordLetters;
  }

  getName() {
    return this.player;
  }
  getWord() {
    return this.word;
  }
}

(function init() {
  let word = randomWord();
  let game = new Game("Julia", word);
  console.log(game.getName(), game.getWord(), game.letterCheck("a"));
})();
