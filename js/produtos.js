let currentSlide = {
  'carousel-seca': 0,
  'carousel-umida': 0
};

function showSlide(carouselId, slideIndex) {
  const carousel = document.getElementById(carouselId);
  const totalSlides = carousel.children.length;
  if (slideIndex >= totalSlides) {
      currentSlide[carouselId] = 0;
  } else if (slideIndex < 0) {
      currentSlide[carouselId] = totalSlides - 1;
  } else {
      currentSlide[carouselId] = slideIndex;
  }
  const offset = -currentSlide[carouselId] * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide(carouselId) {
  showSlide(carouselId, currentSlide[carouselId] + 1);
}

function prevSlide(carouselId) {
  showSlide(carouselId, currentSlide[carouselId] - 1);
}
