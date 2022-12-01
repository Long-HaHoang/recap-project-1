console.clear();

const form = document.querySelector('[data-js="form"]');
const questInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');
const mainConent = document.querySelector('[data-js="mainContent"]');

// questInput.addEventListener("input", () => {

//     console.log(questInput.value);
// })

// answerInput.addEventListener("input", () => {
//     console.log(answerInput.value);
// })

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

function addCard(question) {
  console.log("Hello, World!");
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

  const newBookmarkPath = document.createElement("path");

  const newButtonContainer = document.createElement("div");

  const newButtonAnswer = document.createElement("button");

  const newAnswer = document.createElement("p");

  const newList = document.createElement("ul");

  const newListItem = document.createElement("li");
}
