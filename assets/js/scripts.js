let subHeadingEl = document.querySelector("h2");
let formEl = document.querySelector("form");

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  let ageEl = parseInt(document.getElementById("age").value, 10);
  if (isNaN(ageEl)) {
    subHeadingEl.textContent = "fill in your age!";
    subHeadingEl.style.color = "red";
    formEl.textContent = "";
  } else if (ageEl < 12 || ageEl > 50) {
    subHeadingEl.textContent = "Can't Come!!!";
    subHeadingEl.style.color = "red";
    formEl.textContent = "";
  } else {
    let nameEl = document.getElementById("name").value;
    subHeadingEl.textContent = `${nameEl}`;
    formEl.textContent = "";
  }
});
