// Слайдеры портфолио
$(document).ready(function() {
  $('.portfolio__foto_img-1').slick({
    prevArrow: $('.arrows__left-1'),
    nextArrow: $('.arrows__right-1')
  });
});

$(document).ready(function() {
  $('.portfolio__foto_img-2').slick({
    prevArrow: $('.arrows__left-2'),
    nextArrow: $('.arrows__right-2')
  });
});

$(document).ready(function() {
  $('.portfolio__foto_img-3').slick({
    prevArrow: $('.arrows__left-3'),
    nextArrow: $('.arrows__right-3')
  });
});

$(document).ready(function() {
  $('.portfolio__foto_img-4').slick({
    prevArrow: $('.arrows__left-4'),
    nextArrow: $('.arrows__right-4')
  });
});

$(document).ready(function() {
  $('.portfolio__foto_img-5').slick({
    prevArrow: $('.arrows__left-5'),
    nextArrow: $('.arrows__right-5')
  });
});



// Модальное окно
$(document).ready(function(){
	var button = $('#button');
	var modal = $('#modal');
	var close = $('#close');
	
	button.on('click', function() {
		modal.addClass('modal_active');
	});

	close.on('click', function() {
		modal.removeClass('modal_active');
	});
});