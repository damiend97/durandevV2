// titleText.js

var lastScrollTop = 0;
let toolTitleSize = 0;
let processTitleSize = 0;
var mobile = window.matchMedia("(max-width: 600px)")

$(document).ready(() => {
    // SCROLL EVENT *********************************
    window.addEventListener("scroll", function(){
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if($('.aboutContainer').hasClass('toggledContainer')) {    
            if(st > lastScrollTop) {
                if($('.tools .title-inner').isInViewport(0)) {
                    if(!mobile.matches) {
                        toolTitleSize += .2;
                    }
                    $('.tools .title-text').css('font-size', `${toolTitleSize}em`);
                }
                if($('.process .title-inner').isInViewport(0)) {
                    if(!mobile.matches) {
                        processTitleSize += .2;
                    }
                    $('.process .title-text').css('font-size', `${processTitleSize}em`);
                }
            } else {
                if($('.tools .title-inner').isInViewport(0)) {
                    if(!mobile.matches) {
                        toolTitleSize -= .2;
                    }
                    $('.tools .title-text').css('font-size', `${toolTitleSize}em`);
                }
                if($('.process .title-inner').isInViewport(0)) {
                    if(!mobile.matches) {
                        processTitleSize -= .2;
                    }
                    $('.process .title-text').css('font-size', `${processTitleSize}em`);
                }
            }
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
})