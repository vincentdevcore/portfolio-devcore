const hero = document.querySelector(".hero");
const reveal = document.querySelector(".hero-reveal");

let lastX = 0;
let lastY = 0;

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const velocityX = x - lastX;
  const velocityY = y - lastY;

  const speed = Math.min(Math.sqrt(velocityX ** 2 + velocityY ** 2), 35);

  const width = 110 + speed;
  const height = 90 - speed * 0.2;

  reveal.style.clipPath = `ellipse(${width}px ${height}px at ${x}px ${y}px)`;

  lastX = x;
  lastY = y;
});

hero.addEventListener("mouseleave", () => {
  reveal.style.clipPath = `circle(0px at center)`;
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.1,
  },
);

reveals.forEach((reveal) => {
  observer.observe(reveal);
});

const images = document.querySelectorAll(".fullscreen-image");

const modal = document.querySelector(".image-modal");

const modalImage = document.querySelector(".modal-image");

const closeModal = document.querySelector(".close-modal");

images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("active");

    modalImage.src = img.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("active");
  }
});
const video = document.getElementById("videoHellComing");

video.addEventListener("ended", () => {
  video.style.transition = "filter 0.35s ease";

  video.style.filter = "blur(2px) brightness(0.95)";

  setTimeout(() => {
    video.currentTime = 0;
    video.play();

    video.style.filter = "blur(0px) brightness(1)";
  }, 120);
});

video.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});
