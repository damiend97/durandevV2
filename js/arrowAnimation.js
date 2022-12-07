// arrowAnimation.js

$(document).ready(() => {
    // SCROLL EVENT *********************************
    // $(window).scroll(() => {
    //     if(document.documentElement.scrollTop < 600) {
    //         startArrow();
    //     }
    //     else {
    //         stopArrow();
    //     }
    // })
    
    const startArrow = () => {
        document.getElementById("da3").style.animation = "crossColor 1s infinite";
        document.getElementById("da2").style.animation = "crossColor 1s infinite";
        document.getElementById("da1").style.animation = "crossColor 1s infinite";
    }
    const stopArrow = () => {
        document.getElementById("da3").style.animation = "none";
        document.getElementById("da2").style.animation = "none";
        document.getElementById("da1").style.animation = "none";
    }

    startArrow();
})

