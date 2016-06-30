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


$('.fellows a').on('click', function(e){
    var $fellows = $(this).closest('.fellows'),
        $hidDiv = $fellows.find('div')

    e.preventDefault();
    $fellows.toggleClass('active');
    $hidDiv.animate({height: $hidDiv.get(0).scrollHeight}, 500 );
});


// Video
$("#play").click(function(e) {
    var $intro = $(".intro")
      , $body = $("body");
    e.preventDefault(),
    $body.toggleClass("playing"),
    document.getElementById("gvideo").innerHTML = '<button class="close-video" style="display: inline-block;"><span class="top"></span><span class="left"></span><span class="bottom"></span></button><div id="youtube-video"><iframe width=' + $intro.width() + " height=" + $intro.outerHeight() + ' src="https://www.youtube.com/embed/NgjndLlF7GU?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen autoplay></iframe></div>',
    $(".close-video").click(function() {
        $(".play").removeClass("hidden"),
        $body.toggleClass("playing"),
        document.getElementById("gvideo").innerHTML = ""
    })


});