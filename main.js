"use strict";

/* -------------- random word function --------------  */

const RandomWord = () => {
  const randomWord = (list) => {
    let randomNum = Math.floor(Math.random() * list.length);
    let randWord = list[randomNum];
    //console.log(randomNum, randWord);
    return randWord;
  };

  const hideChoice = () => {
    const form = document.getElementById("form_lang");
    const changeBtn = document.getElementById("change_lang");
    const startBtn = document.getElementById("start_btn");

    form.classList.add("hidden");
    changeBtn.classList.remove("hidden");
    startBtn.classList.remove("hidden");

    changeChoice();
  };

  const changeChoice = () => {
    const form = document.getElementById("form_lang");
    const changeBtn = document.getElementById("change_lang");
    const startBtn = document.getElementById("start_btn");

    changeBtn.addEventListener("click", () => {
      form.classList.remove("hidden");
      changeBtn.classList.add("hidden");
      startBtn.classList.add("hidden");
    });
  };

  const getRandomWord = () => {
    const btnEng = document.getElementById("btn_eng");
    const btnGer = document.getElementById("btn_ger");
    const listEng = [
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
    const listGer = [
      "Stift",
      "Auto",
      "Hund",
      "Katze",
      "Maus",
      "Schrank",
      "Tiger",
      "Lied",
      "Apfel",
      "Ball",
      "Hutstaender",
      "Beispiel",
      "Mango",
      "Wort",
      "Spiegel",
      "Fremdsprache",
      "Gemuese",
      "Lampe",
      "Keks",
      "Test",
      "Bogen",
      "Topf",
      "Spinnennetz",
      "Zug",
      "Oel",
      "Ort",
      "Quiz",
      "Zentrum",
      "Volleyball",
      "Kindergarten",
      "Garderobe",
      "Rindfleischetikettierungsueberwachung",
      "Schifffahrtsgesellschaft",
      "Grundstuecksverkehrsgenehmigungszustaendigkeit",
      "Umweltschutzorganisationen",
      "Chrysantheme",
    ];
    const words = [];
    let counter = 0;

    btnEng.addEventListener("click", () => {
      words.push(randomWord(listEng));
      let word = words[counter];
      console.log(word);
      counter++;
      hideChoice();
    });

    btnGer.addEventListener("click", () => {
      words.push(randomWord(listGer));
      let word = words[counter];
      console.log(word);
      counter++;
      hideChoice();
    });

    return words[counter];
  };

  const word = getRandomWord();

  return { word };
};

/* -------------- game function --------------

class Game {
  constructor(letter, guesses) {
    this.letter = letter;
    this.guesses = guesses;
  }
}
*/
/* -------------- smaller functions -------------- */
function tba() {
  const input = document.getElementById("letter_input");
  input.classList.remove("hidden");
}

/* -------------- init function --------------*/
(function init() {
  const startBtn = document.getElementById("start_btn");
  startBtn.addEventListener("click", tba);
  console.log(RandomWord());
})();
