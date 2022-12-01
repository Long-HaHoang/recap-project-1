console.clear();

const form = document.querySelector('[data-js="form"]');
const questInput = document.querySelector('[data-js="question"]');
const questArea = document.querySelector('[data-js="questArea"]');
const answerInput = document.querySelector('[data-js="answer"]');
const answerArea = document.querySelector('[data-js="answerArea"]');
const mainConent = document.querySelector('[data-js="mainContent"]');
const tagButton = document.querySelectorAll('[data-js="cardForm__tagButton"]');

let stateIndex = false;

questArea.textContent = questInput.maxLength + " characters left";
answerArea.textContent = questInput.maxLength + " characters left";

questInput.addEventListener("input", () => {
  const leftOnes = questInput.maxLength - questInput.value.length;
  questArea.textContent = `${leftOnes} characters left`;
});

answerInput.addEventListener("input", () => {
  const leftOnes = answerInput.maxLength - answerInput.value.length;
  answerArea.textContent = `${leftOnes} characters left`;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addCard(questInput.value, answerInput.value);
  clearForm();
});

function addCard(question, answer) {
  const newSection = document.createElement("section");
  newSection.classList.add("qcard");

  const newHeader = document.createElement("h2");
  newHeader.classList.add("qcard__quest");
  newHeader.textContent = question;

  const newBookmark = document.createElement("button");
  newBookmark.setAttribute("type", "button");
  newBookmark.classList.add("qcard__bookmark--add");

  const newBookmarkSVG = document.createElement("svg");
  newBookmarkSVG.classList.add("qcard__svg");
  newBookmarkSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  newBookmarkSVG.setAttribute("preserveAspectRatio", "xMidYMid meet");
  newBookmarkSVG.setAttribute("viewBox", "0 0 48 48");
  newBookmarkSVG.setAttribute("height", "48");
  newBookmarkSVG.setAttribute("width", "48");

  const newBookmarkPath = document.createElement("path");
  newBookmarkPath.setAttribute(
    "d",
    "M10 42V8.75q0-1.2.9-2.1.9-.9 2.1-.9h16.8q-1.15 1.3-1.725 2.775Q27.5 10 27.5 11.75q0 3.35 2.15 5.85 2.15 2.5 5.35 3.05.85.1 1.5.1t1.5-.1V42l-14-6Zm25-24.25v-4.5h-4.5v-3H35v-4.5h3v4.5h4.5v3H38v4.5Z"
  );

  const newButtonContainer = document.createElement("div");
  newButtonContainer.classList.add("qcard__button--container");

  const newButtonAnswer = document.createElement("button");
  newButtonAnswer.setAttribute("type", "button");
  newButtonAnswer.classList.add("qcard__button--answer");
  newButtonAnswer.textContent = "Show Answer";

  const newAnswer = document.createElement("p");
  newAnswer.classList.add("qcard__answer");
  newAnswer.textContent = answer;

  const newList = document.createElement("ul");

  const newListItem1 = document.createElement("li");
  newListItem1.classList.add("qcard__li--html");
  newListItem1.textContent = "#html";

  const newListItem2 = document.createElement("li");
  newListItem2.classList.add("qcard__li--css");
  newListItem2.textContent = "#flexbox";

  const newListItem3 = document.createElement("li");
  newListItem3.classList.add("qcard__li--css");
  newListItem3.textContent = "#css";

  mainConent.append(newSection);

  newSection.append(
    newHeader,
    newBookmark,
    newButtonContainer,
    newAnswer,
    newList
  );

  newBookmark.append(newBookmarkSVG);
  newBookmarkSVG.append(newBookmarkPath);

  newButtonContainer.append(newButtonAnswer);

  newList.append(newListItem1, newListItem2, newListItem3);
}

function clearForm() {
  form.reset();
  questArea.textContent = questInput.maxLength + " characters left";
  answerArea.textContent = answerInput.maxLength + " characters left";
  questInput.focus();
  clearButton();
}

function clearButton() {
  tagButton.forEach((event) => {
    event.style.removeProperty("color");
    event.style.removeProperty("background-color");
  });
}
// TODO: only works with one button
// function setButton(event) {
//   if (stateIndex === false) {
//     switch (event.classList[0]) {
//       case "cardForm__tagHTML":
//         event.style.setProperty("background-color", "var(--html)");
//         event.style.setProperty("color", "var(--plt1)");
//         stateIndex = true;
//         break;
//       case "cardForm__tagCSS":
//         event.style.setProperty("background-color", "var(--css)");
//         event.style.setProperty("color", "var(--plt1)");
//         stateIndex = true;
//         break;
//     }
//   } else {
//     switch (event.classList[0]) {
//       case "cardForm__tagHTML":
//         event.style.removeProperty("background-color");
//         event.style.removeProperty("color");
//         stateIndex = false;
//         break;
//       case "cardForm__tagCSS":
//         event.style.removeProperty("background-color");
//         event.style.removeProperty("color");
//         stateIndex = false;
//         break;
//     }
//   }
// }

tagButton.forEach((event) => {
  event.addEventListener("click", () => {});
});

console.log(tagButton[2].dataset.state);
