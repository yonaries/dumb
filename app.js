//selectors
const yes = document.querySelector("#yesBtn");
const no = document.querySelector("#noBtn");
const question = document.querySelector(".question");
const buttons = document.querySelector(".buttons");

//on click of yes button
yes.addEventListener("click", function () {
  buttons.style.display = "none";

  question.innerHTML = "I KNEW IT 😉";

  console.log("yes");
});

//on click of no button
no.addEventListener("click", function () {
  var ranTop =
    Math.ceil(Math.random() * 50) * (Math.round(Math.random()) ? 1 : -1);
  var ranLeft =
    Math.ceil(Math.random() * 50) * (Math.round(Math.random()) ? 1 : -1);

  no.style.top = ranTop + "px";
  no.style.left = ranLeft + "px";

  console.log(ranNum);
  console.log("no");
});
