$.fn.isInViewport = function(dist) {
    // top of element
    var elementTop = $(this).offset().top;
    // bottom of element
    var elementBottom = elementTop + $(this).outerHeight();
    // top of view
    var viewportTop = $(window).scrollTop();
    // bottom of view
    var viewportBottom = viewportTop + $(window).height();
    // return bool
    return elementBottom > viewportTop && elementTop < (viewportBottom - dist);
};

var mobile = window.matchMedia("(max-width: 600px)")

$(document).ready(() => {
    // SCROLL EVENT *********************************
    $(window).scroll(() => {
        if($('#s1').isInViewport(0)) {
            let changeX = $("#s1").offset().top - document.documentElement.scrollTop;
            if(mobile.matches) {
                $('#s-c1').css('transform', `translateX(${(changeX)*2}px)`);
            }
            else {
                $('#s-c1').css('transform', `translateX(${changeX}px)`);
            }
            
        }
        if($('#s2').isInViewport(0)) {
            let changeX = $("#s2").offset().top - document.documentElement.scrollTop;
            if(mobile.matches) {
                $('#s-c2').css('transform', `translateX(${(changeX)*2}px)`);
            }
            else {
                $('#s-c2').css('transform', `translateX(${changeX}px)`);
            }
            
        }
        if($('#s3').isInViewport(0)) {
            let changeX = $("#s3").offset().top - document.documentElement.scrollTop;
            if(mobile.matches) {
                $('#s-c3').css('transform', `translateX(${(changeX)*2}px)`);
            }
            else {
                $('#s-c3').css('transform', `translateX(${changeX}px)`);
            }
            
        }
    })
})