function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
const video = document.querySelector(".p1");

video.addEventListener("mouseenter", () => {
  video.play();
});

video.addEventListener("mouseleave", () => {
  video.pause();
  video.currentTime = 0; // optional: resets video to start
});
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.disabled = true;
  submitBtn.innerText = "Sending...";

  const formData = new FormData(form);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      form.style.display = "none";
      document.getElementById("thank-you-message").style.display = "block";
    })
    .catch((error) => {
      alert("There was a problem submitting your form. Please try again.");
      submitBtn.disabled = false;
      submitBtn.innerText = "Send Message";
    });
}
