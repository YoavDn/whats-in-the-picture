"use strict";

const elBtnPlay = document.querySelector(".btn-play");
const elBtns = document.querySelectorAll(".btn-options");
const elImg = document.querySelector("img");
const elConteiner = document.querySelector(".container");
const elVictoryMsg = document.querySelector(".victory-msg");

var gCurrQuestIdx;

var gQuests = [
  {
    id: "/img/space-astronaut.jpeg",
    opts: [
      "A painting of a fox sitting in a field",
      "An astronaut riding a horse",
      "An astronaut working on new AI research",
    ],
    correctOptIndex: 1,
  },
  {
    id: "/img/bowl-of-soup.jpeg",
    opts: [
      "A bowl of soup drawn on a cave wall",
      "A bowl of soup that looks like a monster",
      "An astronaut working on new AI research",
    ],
    correctOptIndex: 0,
  },
  {
    id: "/img/teddy-bears.jpeg",
    opts: [
      "Teddy bears shopping for groceries",
      "An astronaut working on new AI research",
      "Teddy bears working on new AI research underwater with 1990s technology",
    ],
    correctOptIndex: 2,
  },
];

function init() {
  elBtnPlay.innerText = "Play";

  gCurrQuestIdx = 0;
  elConteiner.classList.remove("hidden");
  elVictoryMsg.classList.add("hidden");
  renderQuest();
}

function renderQuest() {
  if (gCurrQuestIdx === gQuests.length) {
    victoryMsg();
    return;
  }

  elImg.src = gQuests[gCurrQuestIdx].id;
  for (var i = 0; i < elBtns.length; i++) {
    elBtns[i].innerText = gQuests[gCurrQuestIdx].opts[i];
  }
}

function checkAnswer(elBtn) {
  var rigthAnswerIdx = gQuests[gCurrQuestIdx].correctOptIndex;

  if (+elBtn.id === rigthAnswerIdx) {
    gCurrQuestIdx++;
    restoreBtnsColor();
    renderQuest();
  } else {
    elBtn.classList.add("wrongAnswer");
  }
}

function restoreBtnsColor() {
  for (var i = 0; i < elBtns.length; i++) {
    elBtns[i].classList.remove("wrongAnswer");
  }
}

function victoryMsg() {
  elConteiner.classList.add("hidden");
  elVictoryMsg.classList.remove("hidden");
  elBtnPlay.innerText = "Play again";
}

// const gQuestsOptions = [
//   "A bowl of soup that looks like a monster",
//   "An astronaut playing basketball with cats in space",
//   "A painting of a fox sitting in a field",
//   "Teddy bears mixing sparkling chemicals as mad scientists",
//   "An astronaut working on new AI research",
//   "Teddy bears shopping for groceries",
// ];

// const rightOptions = [
//   "Teddy bears working on new AI research underwater with 1990s technology",
//   "An astronaut riding a horse",
//   "A bowl of soup drawn on a cave wall",
// ];

// function getRandomOptions(index) {
//   var shuffledArr = [rightOptions[index]];
//   var randomQ = shuffle(gQuestsOptions).pop;
//   shuffledArr.push(randomQ);
//   shuffledArr.push(randomQ);
//   shuffle(shuffledArr);

//   return shuffledArr;
// }

// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// var gQuests = [
//   {
//     id: "/img/space-astronaut.jpeg",
//     opts: getRandomOptions(1),
//     correctOptIndex: opts.indexOf(rightOptions(1)),
//   },
//   {
//     id: "/img/bowl-of-soup.jpeg",
//     opts: getRandomOptions(2),
//     correctOptIndex: opts.indexOf(rightOptions(2)),
//   },
//   {
//     id: "/img/teddy-bears.jpeg",
//     opts: getRandomOptions(0),
//     correctOptIndex: opts.indexOf(rightOptions(0)),
//   },
// ];
