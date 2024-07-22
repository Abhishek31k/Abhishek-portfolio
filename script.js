function myFunction(icon) {
  icon.classList.toggle("change");
  var nav = document.getElementById("menu-list");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}
function bodyclose() {
  var x = document.getElementById("menu-list");
  if (x.style.display == "flex") {
    var y = document.getElementById("vzulr");

    y.classList.toggle("change");

    x.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".text");
  const phrases = ["I am developer", "I am a designer", "Coder", "Gamer"];

  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenPhrases = 2000;
  let phraseIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < phrases[phraseIndex].length) {
      textElement.textContent += phrases[phraseIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenPhrases);
    }
  }

  function erase() {
    if (charIndex > 0) {
      textElement.textContent = phrases[phraseIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, typingSpeed);
    }
  }

  setTimeout(type, delayBetweenPhrases);
});
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".testimonial-slide");
  const indicators = document.querySelectorAll(".indicator");
  let currentIndex = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      indicators[i].classList.toggle("active", i === index);
    });
  }
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
  showSlide(currentIndex);
});
