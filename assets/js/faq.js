// FAQ section
const faqQuestions = document.querySelectorAll(".faq-container .question");

faqQuestions.forEach((faqQuestion) => {
  faqQuestion.addEventListener("click", () => {
    faqQuestions.forEach((otherQuestion) => {
      if (otherQuestion !== faqQuestion && otherQuestion.classList.contains("active")) {
        const otherAnswer = otherQuestion.nextElementSibling;
        otherAnswer.classList.remove("active");
        otherQuestion.classList.remove("active");
      }
    });

    const answer = faqQuestion.nextElementSibling;
    answer.classList.toggle("active");
    faqQuestion.classList.toggle("active");
  });
});