window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  preloader.style.visibility = "hidden";
});
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

const video = document.querySelector(".p1");

// Make sure video is muted and looping
video.muted = true;
video.loop = true;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  },
  {
    threshold: 0.5, // Adjust as needed
  }
);

observer.observe(video);

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
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // Close all
      faqItems.forEach((i) => {
        i.classList.remove("open");
        const iAnswer = i.querySelector(".faq-answer");
        if (iAnswer) iAnswer.classList.remove("open");
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add("open");
        answer.classList.add("open");
      }
    });
  });
});
