$(function() {
	
	/* Select-Menu */
	$('.h-nav__select').selectmenu();

	/*Owl-Carousel2*/
	$('.p-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			567:{
				items:2
			},
			768:{
				items:3
			},
			992:{
				items:3,
				dots:true
			},
			993:{
				items:4,
				dots:false
			}
		}
	});
	$('.p-sectionslider-carousel .p-sectionslider__prev').on('click', function() {
		$('.p-carousel .owl-prev').trigger('click');
		return false;
	});
	$('.p-sectionslider-carousel .p-sectionslider__next').on('click', function() {
		$('.p-carousel .owl-next').trigger('click');
		return false;
	});
	$('.p-carousel1').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			567:{
				items:2
			},
			768:{
				items:3
			},
			992:{
				items:3,
				dots:true
			},
			993:{
				items:4,
				dots:false
			}
		}
	});
	$('.p-sectionslider-carousel1 .p-sectionslider__prev').on('click', function() {
		$('.p-carousel1 .owl-prev').trigger('click');
		return false;
	});
	$('.p-sectionslider-carousel1 .p-sectionslider__next').on('click', function() {
		$('.p-carousel1 .owl-next').trigger('click');
		return false;
	});
	$('.p-carousel2').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			567:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3,
				dots:true
			},
			993:{
				items:4,
				dots:false
			}
		}
	});
	$('.p-sectionslider-carousel2 .p-sectionslider__prev').on('click', function() {
		$('.p-carousel2 .owl-prev').trigger('click');
		return false;
	});
	$('.p-sectionslider-carousel2 .p-sectionslider__next').on('click', function() {
		$('.p-carousel2 .owl-next').trigger('click');
		return false;
	});

	$('.p-carousel3').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			567:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3,
				dots:true
			},
			993:{
				items:4,
				dots:false
			}
		}
	});

/* Скрипт для каталог меню */
	if ($(window).width() > 1399) {
		$('.h-catalog__button').on('click', function() {
			if($(this).parent().parent().hasClass('active')) {
				var bodyleftline = $('.body-white-line').width();
				
				$('.body-white-line').animate({
					'left': '0'
				}, 1000);
				$('.h-catalog__toggle').animate({
					'left': '0'
				}, 1000);
				$('.page').animate({
					'margin-left': bodyleftline + 'px'
				}, 1000);
				$('.footer').animate({
					'margin-left': bodyleftline + 'px'
				}, 1000);
				$('.header__h-catalog').removeClass('active');
				return false;
			} else {
				var bodyleftline = $('.body-white-line').width();
				$('.body-white-line').animate({
					'left': '-' + bodyleftline + 'px'
				}, 1000);
				$('.h-catalog__toggle').animate({
					'left': '-' + bodyleftline + 'px'
				}, 1000);
				$('.page').animate({
					'margin-left': '0'
				}, 1000);
				$('.footer').animate({
					'margin-left': '0'
				}, 1000);
				$('.header__h-catalog').addClass('active');
				return false;
			}
		});
	}
	if ($(window).width() < 1400) {
		$('.header__h-catalog').addClass('active');

		$('.h-catalog__button').on('click', function() {
			if($(this).parent().parent().hasClass('active')) {
				var bodyleftline = $('.body-white-line').width();
				$('.body-white-line').animate({
					'left': '0'
				}, 1000);
				$('.h-catalog__toggle').animate({
					'left': '0'
				}, 1000);
				$('.header__h-catalog').removeClass('active');
				return false;
			} else {
				var bodyleftline = $('.body-white-line').width();
				$('.body-white-line').animate({
					'left': '-' + bodyleftline + 'px'
				}, 1000);
				$('.h-catalog__toggle').animate({
					'left': '-' + bodyleftline + 'px'
				}, 1000);
				$('.header__h-catalog').addClass('active');
				return false;
			}
		});
	}

	/* Скрипт замены логотипа */
	$('.h-logo__img').attr('src', 'img/mob-logo.svg');
});