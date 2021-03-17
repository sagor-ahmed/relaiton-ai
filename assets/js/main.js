/***************************************************

==================== JS INDEX ======================

****************************************************

    01. Sticky Js	
    02. Mobile Menu  Js
    03. Data-Background Js
    04. Scroll To Top Js


****************************************************/


(function ($) {
    "use strict";

    ////////////////////////////////////////////////////

    // 01. Sticky Js

    
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $("#header-sticky").removeClass("sticky");
        } else {
            $("#header-sticky").addClass("sticky");
        }
    });


    ////////////////////////////////////////////////////

    // 02. Mobile Menu  Js

 /*   const navToggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".links");

    navToggle.addEventListener("click", function () {

        links.classList.toggle("show-links");
    });

*/
    ////////////////////////////////////////////////////

    // 03. Data-Background Js

    $("[data-background").each(function () {

        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");

    });

 
    // owlCarousel
    $('.carousel-item').owlCarousel({
        loop:true,
        margin:20,
        fade: true,
        autoplay: false,
		autoplaySpeed: 1000,
    	items:1,
    	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        nav:true,
    	dots:false,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            992:{
                items:1
            }
        }
    })

    // owlCarousel
    $('.tailor-carousel').owlCarousel({
        loop:true,
        margin:50,
        fade: true,
        autoplay: false,
		autoplaySpeed: 500,
    	items:1,
         nav:true,
    	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
       
    	dots:false,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            992:{
                items:1
            }
        }
    })


    ////////////////////////////////////////////////////

    // 04. Scroll To Top Js

    function smoothSctollTop() {

        $('.smooth-scroll a').on('click', function (event) {

            var target = $(this.getAttribute('href'));

            if (target.length) {

                event.preventDefault();

                $('html, body').stop().animate({

                    scrollTop: target.offset().top - 0

                }, 1500);

            }

        });

    }

    smoothSctollTop();



    // Show or hide the sticky footer button

    $(window).on('scroll', function (event) {

        if ($(this).scrollTop() > 600) {

            $('#scroll').fadeIn(200)

        } else {

            $('#scroll').fadeOut(200)

        }

    });



    //Animate the scroll to yop

    $('#scroll').on('click', function (event) {

        event.preventDefault();



        $('html, body').animate({

            scrollTop: 0,

        }, 1500);

    });








/*
// WOW active
new WOW().init();
*/


})(jQuery);
