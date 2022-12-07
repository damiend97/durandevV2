// homeAnimation.js

$(document).ready(() => {
    // scroll to top of page
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    // HOME ANIMATION
    setTimeout(() => {
        $('#logo').css('display','unset');
    }, 300)
    setTimeout(() => {
        $('.title').slideDown(1000);
    }, 1000);
    $('#aboutButton').click(() => {
        $('.homeContainer').slideUp(1000);
        $('.page-content').slideUp(1000);
        $('body').css('overflow-y','scroll');
        $('nav').css('opacity','1');

        $('.aboutContainer').addClass('toggledContainer');
        $('.workContainer').removeClass('toggledContainer');
        $('.contactContainer').removeClass('toggledContainer');

        $('#menu-about').addClass('toggled');
        $('#menu-work').removeClass('toggled');
        $('#menu-contact').removeClass('toggled');
    })
    $('#workButton').click(() => {
        $('.homeContainer').slideUp(1000);
        $('.page-content').slideUp(1000);
        $('body').css('overflow-y','scroll');
        $('nav').css('opacity','1');

        $('.workContainer').addClass('toggledContainer');
        $('.aboutContainer').removeClass('toggledContainer');
        $('.contactContainer').removeClass('toggledContainer');

        $('#menu-work').addClass('toggled');
        $('#menu-about').removeClass('toggled');
        $('#menu-contact').removeClass('toggled');
    })
    $('#contactButton').click(() => {
        $('.homeContainer').slideUp(1000);
        $('.page-content').slideUp(1000);
        $('body').css('overflow-y','scroll');
        $('nav').css('opacity','1');

        $('.contactContainer').addClass('toggledContainer');
        $('.aboutContainer').removeClass('toggledContainer');
        $('.workContainer').removeClass('toggledContainer');

        $('#menu-contact').addClass('toggled');
        $('#menu-about').removeClass('toggled');
        $('#menu-work').removeClass('toggled');
    })
})