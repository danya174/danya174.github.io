document.querySelectorAll(".v-shadow").forEach(function(el) {
	el.style.position = "relative"
	
	const video = el.getElementsByTagName("video")[0]
	const videoClone = video.cloneNode(true)
	const videoTime = video.currentTime
	const cloneDisplay = el.querySelectorAll(".v-clone")[0]
	const blurValue = video.getAttribute("data-blur")
	
	cloneDisplay.appendChild(videoClone)
	
	videoClone.volume = 0
	videoClone.removeAttribute("controls")
  
	video.addEventListener("playing", event => {
	  videoClone.play()
	})
  
	video.addEventListener("pause", event => {
	  videoClone.pause()
	})
	
	video.addEventListener("timeupdate", event => {
	  videoClone.currentTime = video.currentTime
	})
	  
	const styles = {
	  WebkitFilter: `blur(${blurValue}px)`,
	  position: "absolute",
	  bottom: "-10%",
	  left: "5%",
	  width: "90%",
	  height: "95%",
	  zIndex: "-1"
	}
  
	Object.keys(styles).forEach(function(key) {
	  videoClone.style[key] = styles[key]
	})
})










var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}



















$('.menu-btn').on('click', function(e) {
	e.preventDefault();
	$('.menu').toggleClass('menu_active');
	$('.content').toggleClass('content_active');
})








































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





$(document).ready(function(){
	var button = $('#contacts__button');
	var modal = $('#modal');
	var close = $('#close');
	
	button.on('click', function() {
		modal.addClass('modal_active');
	});

	close.on('click', function() {
		modal.removeClass('modal_active');
	});
});



$(document).ready(function(){
	var button = $('#graphics__button');
	var modal = $('#modal');
	var close = $('#close');
	
	button.on('click', function() {
		modal.addClass('modal_active');
	});

	close.on('click', function() {
		modal.removeClass('modal_active');
	});
});

$(document).ready(function(){
	var button = $('#graphics__button2');
	var modal = $('#modal');
	var close = $('#close');
	
	button.on('click', function() {
		modal.addClass('modal_active');
	});

	close.on('click', function() {
		modal.removeClass('modal_active');
	});
});


$(document).ready(function(){
	var button = $('#graphics__button3');
	var modal = $('#modal');
	var close = $('#close');
	
	button.on('click', function() {
		modal.addClass('modal_active');
	});

	close.on('click', function() {
		modal.removeClass('modal_active');
	});
});


$(document).ready(function(){
	var button = $('#graphics__button4');
	var modal = $('#modal');
	var close = $('#close');
	
	button.on('click', function() {
		modal.addClass('modal_active');
	});

	close.on('click', function() {
		modal.removeClass('modal_active');
	});
});

$(document).ready(function(){
	var button = $('#content__button');
	var modal = $('#modal');
	var close = $('#close');
	
	button.on('click', function() {
		modal.addClass('modal_active');
	});

	close.on('click', function() {
		modal.removeClass('modal_active');
	});
});

$(document).ready(function(){
	var button = $('#content__button2');
	var modal = $('#modal');
	var close = $('#close');
	
	button.on('click', function() {
		modal.addClass('modal_active');
	});

	close.on('click', function() {
		modal.removeClass('modal_active');
	});
});



$(document).ready(function(){
	var button = $('#hero_video');
	var modal = $('#modal2');
	var close = $('#close2');
	
	button.on('click', function() {
		modal.addClass('modal2_active2');
	});

	close.on('click', function() {
		modal.removeClass('modal2_active2');
	});
});























$(document).ready(function(){
	var button = $('#questions__button');
	var modal = $('#modal3');
	var close = $('#close3');
	
	button.on('click', function() {
		modal.addClass('modal3_active3');
	});

	close.on('click', function() {
		modal.removeClass('modal3_active3');
	});
});