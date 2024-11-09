// Select all FAQ question buttons
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("open");

    // Toggle the answer visibility
    if (answer.classList.contains("open")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }

    // Optionally close other answers when one is opened
    faqQuestions.forEach((otherQuestion) => {
      if (otherQuestion !== question) {
        otherQuestion.nextElementSibling.classList.remove("open");
        otherQuestion.nextElementSibling.style.maxHeight = null;
      }
    });
  });
});
