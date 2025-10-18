const track = document.querySelector(".services__track");
const dots = document.querySelectorAll(".services__dot");

let currentIndex = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;

function updateSlider(index) {
  // ограничим индекс диапазоном
  if (index < 0) index = 0;
  if (index > dots.length - 1) index = dots.length - 1;

  track.style.transform = `translateX(-${index * 330}px)`; // 314px + 16px отступ
  dots.forEach((dot) => dot.classList.remove("services__dot--active"));
  dots[index].classList.add("services__dot--active");

  currentIndex = index;
}

// Клик по точкам
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.dataset.index, 10);
    updateSlider(index);
  });
});

// Свайп (touch-события)
track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

track.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  currentX = e.touches[0].clientX;
});

track.addEventListener("touchend", () => {
  if (!isDragging) return;
  const diff = startX - currentX;

  if (diff > 50) {
    // свайп влево
    updateSlider(currentIndex + 1);
  } else if (diff < -50) {
    // свайп вправо
    updateSlider(currentIndex - 1);
  }

  isDragging = false;
});
