console.clear();

const cardAnswerButton = document.querySelectorAll('[data-js="buttonAnswer"]');
const cardAddBookmark = document.querySelectorAll('[data-js="bookmarked"]');
const cardAnswer = document.querySelectorAll('[data-js="answerText"]');

cardAnswerButton.forEach((answerButton, index) => {
  answerButton.addEventListener("click", () => {
    if (cardAnswerButton[index].dataset.status === "inactive") {
      cardAnswer[index].removeAttribute("hidden");
      cardAnswerButton[index].dataset.status = "active";
      cardAnswerButton[index].textContent = "Hide Answer";
      return;
    } else {
      cardAnswer[index].setAttribute("hidden", "");
      cardAnswerButton[index].dataset.status = "inactive";
      cardAnswerButton[index].textContent = "Show Answer";
      return;
    }
  });
});

cardAddBookmark.forEach((bookmarkButton, index) => {
  bookmarkButton.addEventListener("click", () => {
    if (cardAddBookmark[index].dataset.status === "inactive") {
      cardAddBookmark[index].innerHTML = `
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48" 
            height="48" 
            width="48"
        >
            <path 
            d="m35.8 17.75-5.3-5.3 2.1-2.15 3.2 3.2 7.4-7.45 2.15 2.15ZM10 42V8.75q0-1.2.9-2.1.9-.9 2.1-.9h14.5v3H13v28.7l11-4.65 11 4.65v-16.7h3V42l-14-6Zm3-33.25h14.5H24Z"/>
        </svg>
        `;
      cardAddBookmark[index].dataset.status = "active";
      return;
    } else {
      cardAddBookmark[index].innerHTML = `
        <svg
            class="qcard__svg"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48"
            height="48"
            width="48"
          >
            <path
              d="M10 42V8.75q0-1.2.9-2.1.9-.9 2.1-.9h16.8q-1.15 1.3-1.725 2.775Q27.5 10 27.5 11.75q0 3.35 2.15 5.85 2.15 2.5 5.35 3.05.85.1 1.5.1t1.5-.1V42l-14-6Zm25-24.25v-4.5h-4.5v-3H35v-4.5h3v4.5h4.5v3H38v4.5Z"
            />
          </svg>
        `;
      cardAddBookmark[index].dataset.status = "inactive";
    }
  });
});
