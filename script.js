const activityNode = document.querySelector(".js-response__subtitle");
const goButtonQuestionNode = document.querySelector(".js-question__button");
const goButtonResponseNode = document.querySelector(".js-response__button");

const sectionQuestionNode = document.querySelector(".question");
const sectionResponseNode = document.querySelector(".response");
const sectionNode = document.querySelector(".section");

function getActivity() {
  fetch("http://www.boredapi.com/api/activity/")
    .then((response) => response.json())
    .then((data) => {
      activityNode.innerHTML = data.activity;
    });
}

goButtonQuestionNode.addEventListener("click", function () {
  sectionQuestionNode.classList.add("js-section_disabled");
  sectionResponseNode.classList.remove("js-section_disabled");
  getActivity();
  goButtonResponseNode.addEventListener("click", getActivity);
});
