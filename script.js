const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function handlePrevBtn() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

function handleNextBtn() {
  currentIndex++;
  if (currentIndex === slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

prevBtn.addEventListener('click', handlePrevBtn);
nextBtn.addEventListener('click', handleNextBtn);

showSlide(currentIndex);