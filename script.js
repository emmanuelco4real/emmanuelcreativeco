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

// Navigation functionality
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");
  sidebar.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close sidebar when clicking on overlay
document
  .querySelector(".sidebar-overlay")
  .addEventListener("click", hideSidebar);
