const track = document.querySelector(".services__track");
const dots = document.querySelectorAll(".services__dot");

let currentIndex = 0;

function updateSlider(index) {
  track.style.transform = `translateX(-${index * 330}px)`; // 314 + 16 margin
  dots.forEach((dot) => dot.classList.remove("services__dot--active"));
  dots[index].classList.add("services__dot--active");
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.dataset.index, 10);
    currentIndex = index;
    updateSlider(index);
  });
});
