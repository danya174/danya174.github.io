new WOW().init();
// Первое видео
const video = document.getElementById("video");

function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}

// Второе видео
const video2 = document.getElementById("video-2");

function togglePlay2() {
	if (video2.paused || video2.ended) {
		video2.play();
	} else {
		video2.pause();
	}
}







// Аккордеон
$(document).ready(function(){
    $(".accordion-title").click(function(e){
        var accordionitem = $(this).attr("data-tab");
        $("#"+accordionitem).slideToggle().parent().siblings().find(".accordion-content").slideUp();

        $(this).toggleClass("active-title");
        $("#"+accordionitem).parent().siblings().find(".accordion-title").removeClass("active-title");

        $("i.fa-chevron-down",this).toggleClass("chevron-top");
        $("#"+accordionitem).parent().siblings().find(".accordion-title i.fa-chevron-down").removeClass("chevron-top");
    });
});


// Слайдер
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        navText: ["<img src='../img/reviews/left-arrow.png'>", "<img src='../img/reviews/right-arrow.png'>"],
        responsive : {
            0 : {
                items: 1
            },
            576 : {
                items: 2
            },
            992 : {
                items: 3
            },
        }
    });
});




// Главное модальное окно
$(document).ready(function(){
    var button = $('.button');
    var modal = $('#modal');
    var close = $('#close');

    button.on('click', function() {
        modal.addClass('modal_active');
    });
    close.on('click', function() {
        modal.removeClass('modal_active');
    });
});



// Модальное окно для видео
$(document).ready(function(){
    var button = $('.hero-content__video_button');
    var modal = $('#modal-video');
    var close = $('#close-video');

    button.on('click', function() {
        modal.addClass('modal-video_active');
    });
    close.on('click', function() {
        modal.removeClass('modal-video_active');
    });
});







$(document).ready(function(){
	var button = $('#polinicy_questions__button');
	var modal = $('#modal4');
	var close = $('#close4');
	
	button.on('click', function() {
		modal.addClass('modal4_active4');
	});

	close.on('click', function() {
		modal.removeClass('modal4_active4');
	});
});



$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});