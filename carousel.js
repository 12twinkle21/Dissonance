let sliderLine = document.querySelector('.carousel-line');
let carouselImages = document.querySelectorAll('.carousel-item-img');
let widthOfImage;
let count = 0;
let arrowLeft = document.querySelector('.carousel-arrow-left');
let arrowRight = document.querySelector('.carousel-arrow-right');

arrowRight.classList.add('active-cursor');

function init() {

   for (let i = 0; i < carouselImages.length; i++) {
      widthOfImage = carouselImages[i].offsetWidth * 2 + 160;
   }
   
}

init();

arrowLeft.addEventListener('click', function (evt) {
   evt.preventDefault();
   if (count == 2) {
      rollCarouselLeft2(widthOfImage);
      arrowRight.src = 'img/arrow-right-active.png';
      arrowRight.classList.add('active-cursor');
   }
   if (count == 1) {
      rollCarouselLeft1(widthOfImage);
      arrowLeft.src = 'img/arrow-left-no-active.png';
      arrowLeft.classList.remove('active-cursor');
   }
   if (count > 0) {
      count--;
   }
})

arrowRight.addEventListener('click', function (evt) {
   evt.preventDefault();
   if (count == 0) {
      rollCarouselRight1(widthOfImage);
      arrowLeft.src = 'img/arrow-left-active.png';
      arrowLeft.classList.add('active-cursor');
   }
   if (count == 1) {
      rollCarouselRight2(widthOfImage);
      arrowRight.src = 'img/arrow-right-no-active.png';
      arrowRight.classList.remove('active-cursor');
   }
   if (count < 2) {
      count++;
   }
   
})

function rollCarouselRight1(value) {
      sliderLine.style.transform = 'translateX(' +(-value) + 'px )';
}

function rollCarouselRight2(value) {
   sliderLine.style.transform = 'translateX(' +(-value * 2) + 'px )';
}

function rollCarouselLeft1(value) {
   sliderLine.style.transform = 'translateX(' + (value - value) + 'px )';
}

function rollCarouselLeft2(value) {
   sliderLine.style.transform = 'translateX(' + (value - value * 2) + 'px )';
}

window.addEventListener('resize', function () {
   init();
   if (count == 1) {
      rollCarouselRight1(widthOfImage);
   }
   if (count == 2) {
      rollCarouselRight2(widthOfImage);
   }
})
