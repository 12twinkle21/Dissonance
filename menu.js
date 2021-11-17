//CityMenuMax

let cityMaxBtn = document.querySelector('.city-item-max');
let cityMaxMenu = document.querySelector('.city-menu-max');
let cityMaxArrow = document.querySelector('.city-arrow-max')

cityMaxBtn.addEventListener('click', function (evt) {
   evt.preventDefault();
   if (cityMaxMenu.classList.contains('no-active-menu')) {
      cityMaxMenu.classList.remove('no-active-menu')
   } else {
      cityMaxMenu.classList.add('no-active-menu');
   }
})


cityMaxArrow.addEventListener('click', function (evt) {
   evt.preventDefault();
   if (cityMaxMenu.classList.contains('no-active-menu')) {
      cityMaxMenu.classList.remove('no-active-menu')
   } else {
      cityMaxMenu.classList.add('no-active-menu');
   }
})


//CityMenuMin

let cityMinBtn = document.querySelector('.city-item-min');
let cityMinMenu = document.querySelector('.city-menu-min');
let cityMinArrow = document.querySelector('.city-arrow-min')

cityMinBtn.addEventListener('click', function (evt) {
   evt.preventDefault();
   if (cityMinMenu.classList.contains('no-active-menu')) {
      cityMinMenu.classList.remove('no-active-menu')
   } else {
      cityMinMenu.classList.add('no-active-menu');
   }
});


cityMinArrow.addEventListener('click', function (evt) {
  evt.preventDefault();
   if (cityMinMenu.classList.contains('no-active-menu')) {
      cityMinMenu.classList.remove('no-active-menu')
   } else {
      cityMinMenu.classList.add('no-active-menu');
   }
})

// CityBtnMax

let cityMaxMenuBtns = document.querySelectorAll('.menu-item-1');

for (let i = 0; i < cityMaxMenuBtns.length; i++){

   cityMaxMenuBtns[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      cityMaxBtn.innerHTML = cityMaxMenuBtns[i].innerHTML;
      cityMaxMenu.classList.add('no-active-menu');
   })
}

//CityBtnMin

let cityMinMenuBtns = document.querySelectorAll('.menu-item-2');

for (let i = 0; i < cityMaxMenuBtns.length; i++){

   cityMinMenuBtns[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      cityMinBtn.innerHTML = cityMaxMenuBtns[i].innerHTML;
      cityMinMenu.classList.add('no-active-menu');
   })
}

//BurgerMenu

let navBurger = document.querySelector('.nav-burger');
let burgerMenu = document.querySelector('.burger-menu');
let body = document.querySelector('body')

navBurger.addEventListener('click', function (evt) {
   evt.stopPropagation();
   if (burgerMenu.classList.contains('no-active-menu')) {
      burgerMenu.classList.add('active-menu');
      burgerMenu.classList.remove('no-active-menu'); 
   }
   else {
      burgerMenu.classList.add('no-active-menu');
      burgerMenu.classList.remove('active-menu');
   }
})

body.addEventListener('click', function () {
   if (burgerMenu.classList.contains('active-menu')) {
      burgerMenu.classList.remove('active-menu');
      burgerMenu.classList.add('no-active-menu')
   }
})

//Search

let searchBtn = document.querySelector('.magnifier');
let searchMenu = document.querySelector('.search-container');
let searchMenuBtn = document.querySelector('.search-btn-item')
searchBtn.addEventListener('click', function (evt) {
   evt.stopPropagation();
   evt.preventDefault();
   if (searchMenu.classList.contains('no-active-search')) {
      searchMenu.classList.add('active-search');
      searchMenu.classList.remove('no-active-search'); 
   }
   else {
      searchMenu.classList.add('no-active-search');
      searchMenu.classList.remove('active-search');
   }
})


searchMenuBtn.addEventListener('click', function (evt) {
   evt.stopPropagation();
   if (searchMenu.classList.contains('active-search')) {
      searchMenu.classList.remove('active-search');
      searchMenu.classList.add('no-active-search');
   }
})

