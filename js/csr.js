 let index = 0;

  function moveSlide(step) {
    const slider = document.getElementById("slider");
    const totalSlides = document.querySelectorAll("#slider > div").length;
    index += step;

    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;

    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  // Auto-slide every 3 seconds
  setInterval(() => {
    moveSlide(1);
  }, 3000);