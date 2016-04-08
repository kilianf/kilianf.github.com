/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);


$(window).scroll(function(){
    $(".intro").css("opacity", 1 - $(window).scrollTop() / 650);
    $("#play").css("transform", 'scale(' + ( 1 + Math.abs($(window).scrollTop()) / 600 ) + ')');
});


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});


function translatorY(el){
    var $this = $(el);
    if($this.hasClass('activated')){
        $(window).on('scroll',function(){
            console.log("farts")
        })
    }
    var dest = 100;
   // console.log(this)
    $(el).css('transform', 'translateY(-' + dest + 'px)');
}


hunt(document.getElementById('about'), {
    in: function() {
        $(this).toggleClass('activated')
        translatorY(this)
    },
    out: function() {
        $(this).toggleClass('activated')
        console.log("I'm out")
    },
    persist: true
});