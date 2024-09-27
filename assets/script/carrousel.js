(function () {
    "use strict";
    const slideTimeout = 5000;
    // Fonction générique pour gérer un carrousel
    function initCarousel(carousel) {
      let currentSlide = 0;
      let intervalId;
      
      function slideTo(index) {
        currentSlide = index;
        carousel.slides.forEach((slide, i) => {
          slide.style.display = i === currentSlide ? 'block' : 'none';
        });
        // Mettre à jour les points
        const dotsContainer = carousel.container.querySelector('.dots');
        dotsContainer.innerHTML = '';
        carousel.slides.forEach((_, i) => {
          const dot = document.createElement('div');
          dot.classList.add('dot');
          if (i === currentSlide) {
            dot.classList.add('active');
          }
          dot.addEventListener('click', () => {
            slideTo(i);
          });
          dotsContainer.appendChild(dot);
        });
      }
  
      function showSlide() {
        currentSlide = (currentSlide + 1) % carousel.slides.length;
        slideTo(currentSlide);
      }
  
      carousel.prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + carousel.slides.length) % carousel.slides.length;
        slideTo(currentSlide);
      });
  
      carousel.nextBtn.addEventListener('click', () => {
        showSlide();
      });
  
      slideTo(0);
  
      intervalId = setInterval(showSlide, slideTimeout);
  
      carousel.container.addEventListener('mouseover', () => {
        clearInterval(intervalId);
      });
  
      carousel.container.addEventListener('mouseout', () => {
        intervalId = setInterval(showSlide, slideTimeout);
      });
    }
  
    // Initialisation des carrousels
    const carousels = [
      {
        container: document.querySelector('.sliderContainer1'),
        prevBtn: document.querySelector('#prev1'),
        nextBtn: document.querySelector('#next1'),
        slides: Array.from(document.querySelectorAll('.slide1'))
      }
    ];
  
    // Initialisation de chaque carrousel
    carousels.forEach(carousel => {
      initCarousel(carousel);
    });
  
  })();