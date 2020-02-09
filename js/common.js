// $(window).on("load", function(){
//  $(".twentytwenty-container").twentytwenty({
//  	no_overlay: true,
//  	move_with_handle_only: true,
//  	move_slider_on_hover: true,
//  }); 
// });

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: 51.490493, lng: 31.306004},
  });

  var image = '../img/Pin.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 51.490493, lng: 31.306004},
    map: map,
    icon: image
  });
}

(function() {



  "use strict";

  var toggles = document.querySelectorAll(".cmn-toggle-switch");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      if (this.classList.contains("active") === true) {
      	this.classList.remove("active");
      }
      else {
      	this.classList.add("active");
      	$("nav").delay(200).fadeIn();
      }
    });
  }

  $("nav .closer").click(function(){
  	$("nav").fadeOut();
  	$(".cmn-toggle-switch").removeClass('active');
  });

})();

//Плавная прокрутка
// $(function(){
	
// 	var $window = $(window);		//Window object
	
// 	var scrollTime = 1;			//Scroll time
// 	var scrollDistance = 250;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
	
// 	$window.on("mousewheel DOMMouseScroll", function(event){
		
// 		event.preventDefault();	
										
// 		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
// 		var scrollTop = $window.scrollTop();
// 		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
// 		TweenMax.to($window, scrollTime, {
// 			scrollTo : { y: finalScroll, autoKill:true },
// 				ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
// 				autoKill: true,
// 				overwrite: 5							
// 			});
					
// 	});
	
// });



$(function(){

	// function blink(selector) {
	// 	$(selector).fadeOut(1000,function() {
	// 		$(this).fadeIn(1000,function() {
	// 			blink(this);
	// 		});
	// 	});
	// }

	// blink('.way');

	

	$(".carousel1").owlCarousel({
		loop:true,
		items: 5,
		autoplay: false,
		autoplayTimeout: 2500,
		autoplayHoverPause: true,
		animateOut: 'fadeOut',
		dots: true,
		nav: true,
		navText: ['', ''],
		margin: 10,
		responsive : {
			0 : {
		        items: 1,
		    },
		    475 : {
		        items: 2,
		    },
		    685 : {
		        items: 3,
		    },
		    910 : {
		        items: 4,
		    },
		    1170 : {
		        items: 5,
		    }
		}
	});

	$(".js-carousel-1").owlCarousel({
		loop:true,
		items: 1,
		autoplay: true,
		autoplayHoverPause: false,
		dots: false,
		nav: false,
		navText: ['&lsaquo;', '&rsaquo;'],
		margin: 0,
	});

	$(".js-carousel-2").owlCarousel({
		loop:true,
		items: 3,
		autoplay: true,
		autoplayHoverPause: false,
		dots: true,
		nav: true,
		navText: ['&lsaquo;', '&rsaquo;'],
		margin: 30,
		responsive : {
			340 : {
		        items: 1,
		    },
		    575 : {
		        items: 2,
		    },
		    991 : {
		        items: 3,
		    },
		}
	});

	// $(".carousel2").owlCarousel({
	// 	loop:true,
	// 	items: 6,
	// 	autoplay: true,
	// 	autoplayHoverPause: true,
	// 	dots: false,
	// 	nav: false,
	// 	navText: ['&larr;', '&rarr;'],
	// 	margin: 10,
	// });

	// $(".owl-carousel").owlCarousel({
	// 	loop:true,
	// 	autoplay: true,
	// 	autoplayHoverPause: true,
	// 	dots: false,
	// 	nav: true,
	// 	navText: ['', ''],
	// 	margin: 50,
	// 	responsiveClass:true,
	//     responsive:{
	//         0:{
	//             items:1,
	//         },
	//         991:{
	//             items:2,
	//         },
	//     }
	// });

	new WOW().init();

	$(".menu a, .logo, .right-menu a, .go-down__link").on("click", function() {
		$("html, body").stop().animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 500);
		let link = $(this).attr("href");
		$(".right-menu__link").removeClass('right-menu__link--active');
		$(".right-menu__link[href='"+link+"']").addClass('right-menu__link--active');

	});


	// var hl = $(".bl2 .l").height();
	// var hr = $(".bl2  .r").height();
	// if(hl > hr) $(".bl2  .r").height(hl);
	// if(hr > hl) $(".bl2  .l").height(hr);

	// new WOW().init();

});

	// if (!device.tablet() && !device.mobile()) {
	// 	$(".block1").css("background", "none");
	// 	$(".player").YTPlayer();
	// 	var filters = {
	// 		brightness: 60
	// 	}
	// 	$(".player").YTPApplyFilters(filters);
	// }




$(document).ready(function() {



	$(".js-gallery_more").click(function(){
		$(".gallery__small--hide").css('display', 'flex');
		$(this).hide();
		return false;
	});

	$(".js-nav-toggle").click(function(){
		$(this).toggleClass('toggler-icon--open');
		$(".js-nav").toggleClass('menu--mobile');
	});


	$("#popup_close").click(function() {
		$("#parent_popup").fadeOut(400);
	});

	$("#popup_close2").click(function() {
		$("#parent_popup2").hide(500);
	});
	
	$("#popup_close3").click(function() {
		$("#parent_popup3").hide(500);
	});

	$("#popup_main3 nav li a, .logo a").click(function(){
		$("html, body").stop().animate({
			scrollTop: $($(this).attr("href")).offset().top - 10
		}, 500);
		$("#parent_popup3").hide(500);
	});

	$(".top-menu").on("click", function() {
		$("#parent_popup3").show(500);
		return false;
	});

	$(".js-popup").on("click", function() {
		$("#parent_popup").fadeIn(400);
		return false;
	});

	$(".order").on("click", function() {
		$("#parent_popup2").show(500);
		return false;
	});



	$('.popup-with-form').click(function(){
		$("input[type='hidden']").remove();
	});


	// console.log($(window).height());

	// $(window).on('resize', function(){
	// 	var win = $(this);
	// 	if (win.height() <= 620) {
	// 		console.log(win.height());
	// 		// $('canvas').attr('width', '100%').css('width', '100%');
	// 	}
	// });


	// $('[data-fancybox="gallery"]').fancybox({
	// 	// Options will go here
	// });


	// jQuery(".eTimer").eTimer({
	// 	etType: 2, etDate: "12.07.2019.0.0", etTitleText: "", etTitleSize: 20, etShowSign: 1, etSep: " ", etFontFamily: "Trebuchet MS", etTextColor: "white", etPaddingTB: 0, etPaddingLR: 0, etBackground: "transparent", etBorderSize: 0, etBorderRadius: 1, etBorderColor: "white", etShadow: " 0px 0px 10px 0px transparent", etLastUnit: 4, etNumberFontFamily: "Impact", etNumberSize: 43, etNumberColor: "#05b4ff", etNumberPaddingTB: 0, etNumberPaddingLR: 3, etNumberBackground: "transparent", etNumberBorderSize: 0, etNumberBorderRadius: 7, etNumberBorderColor: "transparent", etNumberShadow: "inset 0px 0px 10px 0px transparent"
	// });


	//Имитация покупок
	// var i = 0;

 //        function yved() {
 //            i = 1;
 //            $('.yved:nth-child(' + i + ')').fadeIn(500).delay(4000).fadeOut(500);
 //        }
 //        setTimeout(function() {
 //            setInterval(
 //                function() {
 //                    i = i + 1;
 //                    if (i > 12) i = 1;
 //                    $('.yved:nth-child(' + i + ')').fadeIn(1000).delay(4000).fadeOut(300);
 //                }, 9000);
 //            yved();
 //        }, 5000);


//rangeSlider

// 	var valueBubble = '<output class="rangeslider__value-bubble" />';


// function updateValueBubble(pos, value, context) {
//   pos = pos || context.position;
//   value = value || context.value;
//   var $valueBubble = $('.rangeslider__value-bubble', context.$range);
//   var tempPosition = pos + context.grabPos;
//   var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

//   if ($valueBubble.length) {
//     // $valueBubble[0].style.left = Math.ceil(position) + 'px';
//     $valueBubble[0].innerHTML = value;
//   }
// }

// $('input[type="range"]').rangeslider({
//   polyfill: false,
//   onInit: function() {
//     this.$range.append($(valueBubble));
//     updateValueBubble(null, null, this);
//   },
//   onSlide: function(pos, value) {
//     updateValueBubble(pos, value, this);
//   }
// });
//end rangeSlider


	


// Выпадающее меню {
	// $(".services a").click(function(){
	// 	var th = $(this).parent();

	// 	if($(".submenu").is(':visible')) {
	// 		$(".submenu").hide('fast');
	// 		th.removeClass('current');
	// 	}
	// 	else {
	// 		th.addClass('current');
	// 		$(".submenu").show('fast');
	// 	}
	// 	return false;
	// });

	// $(document).mouseup(function(e) {
 //            var $target = $(e.target);
 //            if ($target.closest(".submenu").length === 0) {
 //                $(".submenu").hide('fast');
 //                $(".services").removeClass('current');
 //            }
 //        });
// } Конец выпадающее меню



	$('.gallery__small').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});


var offset = $('#projects').offset().top;
// console.log(offset);
$(window).scroll(function() {
	if($(window).width() <= 991) {
		if ($(window).scrollTop() > offset) {
			$(".js-header").addClass('header--top');
		}
		else {
			$(".js-header").removeClass('header--top');
		}
	}
});



// $(".dropdown").hover(function(){
// 	$(".hide_mnu").slideDown();
// 	$(".hide_mnu").mouseleave(function() {
// 		$(this).slideUp();
// 	});
// });

// var offset = $('.second-screen').offset.top;
// // console.log(offset);
// $(window).scroll(function() {
// 	if ($(window).scrollTop() > offset) {
// 		$("nav").fadeIn(300);
// 	}
// 	else {
// 		$("nav").fadeOut(300);
// 	}
// });

// var offset = $('nav').offset().top;
// // console.log(offset);
// $(window).scroll(function() {
// 	if ($(window).scrollTop() > offset) {
// 		$("nav").addClass('top-menu');
// 		$("nav .logo img").attr("src", "../img/logo-white.png");
// 	}
// 	else {
// 		$("nav").removeClass('top-menu');
// 		$("nav .logo img").attr("src", "../img/logo.png");
// 	}
// });

// var topPadding = 0;
// $(window).scroll(function() {
//     if ($(window).scrollTop() > offset.top) {
//         $('nav').stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding},{duration:0});
//         $('nav').css("opacity", ".7");
//     }
//     else {
//         $('nav').stop().animate({marginTop: 0});
//         $('nav').css("opacity", "1");
//     }
// });


// $('.image-popup-no-margins').magnificPopup({
// 		type: 'image',
// 		closeOnContentClick: true,
// 		closeBtnInside: false,
// 		fixedContentPos: true,
// 		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
// 		image: {
// 			verticalFit: true
// 		},
// 		zoom: {
// 			enabled: true,
// 			duration: 300 // don't foget to change the duration also in CSS
// 		}
// 	});

$('.owl-carousel').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Загрузка изобращения #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">Изображение #%curr%</a> не может загрузиться.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});


	// $(".more").click(function(){
	// 	// $(this).hide();
	// 	$(".old").hide(400);
	// 	$(".new").show(400);
	// 	return false;
	// });

	$("#f1 form").on("submit", function() {  // Проверяем номер типа +7 (999) 999-9999
		var phone = $("#f1 input[type='tel']").val();
		var regex = /\+7 \(\d{3}\) \d{3}\-\d{4}/;
		if (phone.search(regex) == -1) {
			alert("Укажите правильный номер телефона!");
			return false;
		}
		return true;
	});

	$("#f2 form").on("submit", function() {  // Проверяем номер типа +7 (999) 999-9999
		var phone = $("#f2 input[type='tel']").val();
		var regex = /\+7 \(\d{3}\) \d{3}\-\d{4}/;
		if (phone.search(regex) == -1) {
			alert("Укажите правильный номер телефона!");
			return false;
		}
		return true;
	});

	$("#f3 form").on("submit", function() {  // Проверяем номер типа +7 (999) 999-9999
		var phone = $("#f3 input[type='tel']").val();
		var regex = /\+7 \(\d{3}\) \d{3}\-\d{4}/;
		if (phone.search(regex) == -1) {
			alert("Укажите правильный номер телефона!");
			return false;
		}
		return true;
	});

	$("#f4 form").on("submit", function() {  // Проверяем номер типа +7 (999) 999-9999
		var phone = $("#f4 input[type='tel']").val();
		var regex = /\+7 \(\d{3}\) \d{3}\-\d{4}/;
		if (phone.search(regex) == -1) {
			alert("Укажите правильный номер телефона!");
			return false;
		}
		return true;
	});

	$("#f5 form").on("submit", function() {  // Проверяем номер типа +7 (999) 999-9999
		var phone = $("#f5 input[type='tel']").val();
		var regex = /\+7 \(\d{3}\) \d{3}\-\d{4}/;
		if (phone.search(regex) == -1) {
			alert("Укажите правильный номер телефона!");
			return false;
		}
		return true;
	});

	$("#f6 form").on("submit", function() {  // Проверяем номер типа +7 (999) 999-9999
		var phone = $("#f6 input[type='tel']").val();
		var regex = /\+7 \(\d{3}\) \d{3}\-\d{4}/;
		if (phone.search(regex) == -1) {
			alert("Укажите правильный номер телефона!");
			return false;
		}
		return true;
	});









	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});


	$("input[type='tel']").inputmask({"mask": "+7 (999) 999-9999"});


	// $('.popup-youtube').magnificPopup({
	// 	disableOn: 700,
	// 	type: 'iframe',
	// 	mainClass: 'mfp-fade',
	// 	removalDelay: 160,
	// 	preloader: false,

	// 	fixedContentPos: false
	// });


});
