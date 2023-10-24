//---Menu

const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body

// Получаем ссылки в меню
const menuLinks = document.querySelectorAll('.menu__link');

// Функция, которая будет закрывать меню
function closeMenu() {
	burger.classList.remove('_active');
	menu.classList.remove('_active');
	body.classList.remove('_lock');
}

// Добавляем обработчик события на каждую ссылку
menuLinks.forEach((link) => {
	link.addEventListener('click', () => {
		closeMenu();
	});
});

// Добавляем обработчик на бургер-кнопку
if (burger && menu) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
		body.classList.toggle('_lock');
	});
}
//---Swiper

const popularSlider = new Swiper('.popular-slider', {
	spaceBetween: 20,
	slidesPerView: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.popular-slider-next',
		prevEl: '.popular-slider-prev',
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		660: {
			slidesPerView: 2,
		}
	}
});

const galleryItems = document.querySelectorAll(".gallery__item");

if (galleryItems.length > 0) {
	galleryItems.forEach(item => {
		new Swiper(item, {
			slidesPerView: 1,
			autoplay: {
				delay: 5000,
			},
			effect: 'fade',
		})
	})
}
let header = document.querySelector('.js-header'),
	headerH = document.querySelector('.js-header').clientHeight;

document.onscroll = function () {
	let scroll = window.scrollY;
	 if (scroll > headerH) {
		 header.classList.add('fixed')
		 document.body.style.paddingTop = headerH + 'px'
	 } else {
		 header.classList.remove('fixed')
		 document.body.removeAttribute('style')
	 }

}