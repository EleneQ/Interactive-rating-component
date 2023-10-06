let rating = "";
const ratingButtons = document.querySelectorAll(".rate-btn");
const submitBtn = document.querySelector(".submit-btn");
const thankYouState = document.getElementById("thank-you-state");
const ratingState = document.getElementById("rating-state");

ratingButtons.forEach((button) => {
  button.addEventListener("click", function () {
    ratingButtons.forEach((button) =>
      button.classList.remove("rate-btn-clicked")
    );

    rating = button.innerHTML;
    button.classList.add("rate-btn-clicked");
  });
});

submitBtn.addEventListener("click", function () {
  if (rating === "") {
    alert("Please rate us");
  } else {
    showThankYouState();
  }
});

function showThankYouState() {
  ratingState.style.display = "none";
  thankYouState.style.display = "block";

  document.querySelector(".rating-result span").innerHTML = rating;
}
