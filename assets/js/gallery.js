function initGalleries() {
	const swiper = new Swiper('.gallery', {
		slidesPerView: 1,
		spaceBetween: 10,
		pagination: {
			el: '.swiper-pagination',
		},
		breakpoints: {
			640: {
				slidesPerView: 3,
				spaceBetween: 20
			}
		}
	});
}
function initSwiper(slidesPerView) {
	const swiper = new Swiper('.swiper', {
		slidesPerView: 1,
		spaceBetween: 10,
		  pagination: {
		    el: '.swiper-pagination',
		  },
	});
}
window.addEventListener("DOMContentLoaded", function () {
	initGalleries();
	initSwiper();
});
initGalleries();
initSwiper();
