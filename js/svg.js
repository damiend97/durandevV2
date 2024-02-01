// svg.js

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

$(document).ready(() => {
    // SCROLL EVENT *********************************
    $(window).scroll((e) => {
        // PROCESS ANIMATIONS
        if($('#sbox1').isInViewport(200)) {
            document.getElementById("GT1").style.animation = "fadeIn 1s forwards";
            document.getElementById("GV1").style.animation = "outline 10s forwards";
            document.getElementById("GV2").style.animation = "outline 10s forwards";
        }

        if($('#sbox2').isInViewport(200)) {
            document.getElementById("LV1").style.animation = "outline 10s forwards";
            document.getElementById("LV2").style.animation = "outline 10s forwards";
            document.getElementById("LV3").style.animation = "outline 10s forwards";
            document.getElementById("LV4").style.animation = "outline 10s forwards";
            document.getElementById("LV5").style.animation = "outline 10s forwards";
            document.getElementById("LT1").style.animation = "fadeIn 1s forwards";
        }
        if($('#sbox3').isInViewport(200)) {
            document.getElementById("TT1").style.animation = "fadeIn 1s forwards";
            document.getElementById("TT2").style.animation = "fadeIn 1s forwards";
            document.getElementById("TV1").style.animation = "outline 10s forwards";
            document.getElementById("TV2").style.animation = "outline 10s forwards";
        }

        if($('#sbox4').isInViewport(200)) {
            document.getElementById("CODETEXT").style.animation = "fadeIn 1s forwards";
            document.getElementById("CV1").style.animation = "outline 10s forwards";
            document.getElementById("CV2").style.animation = "outline 10s forwards";
            document.getElementById("CV3").style.animation = "outline 10s forwards";
            document.getElementById("CV4").style.animation = "outline 10s forwards";
            document.getElementById("CV6").style.animation = "outline 10s forwards";
            document.getElementById("CV7").style.animation = "outline 10s forwards";
            document.getElementById("CV8").style.animation = "outline 10s forwards";
            document.getElementById("CV9").style.animation = "outline 10s forwards";
            document.getElementById("CV10").style.animation = "outline 10s forwards";
            document.getElementById("CV11").style.animation = "outline 10s forwards";
            document.getElementById("CV12").style.animation = "outline 10s forwards";
            document.getElementById("CV13").style.animation = "outline 10s forwards";
            document.getElementById("CV14").style.animation = "outline 10s forwards";
            document.getElementById("CV15").style.animation = "outline 10s forwards";
            document.getElementById("CV16").style.animation = "outline 10s forwards";
            document.getElementById("CV17").style.animation = "outline 10s forwards";
            document.getElementById("CV18").style.animation = "outline 10s forwards";
            document.getElementById("CV19").style.animation = "outline 10s forwards";
            document.getElementById("CV20").style.animation = "outline 10s forwards";
            document.getElementById("CV21").style.animation = "outline 10s forwards";
            document.getElementById("CV22").style.animation = "outline 10s forwards";
            document.getElementById("CV23").style.animation = "outline 10s forwards";
            document.getElementById("CV24").style.animation = "outline 10s forwards";
            document.getElementById("CV25").style.animation = "outline 10s forwards";
            document.getElementById("CV26").style.animation = "outline 10s forwards";
            document.getElementById("CV27").style.animation = "outline 10s forwards";
            document.getElementById("CV28").style.animation = "outline 10s forwards";
            document.getElementById("CR1").style.animation = "outline 10s forwards";
            document.getElementById("CR2").style.animation = "fadeIn 1s forwards";
            document.getElementById("CR3").style.animation = "fadeIn 1s forwards";
            document.getElementById("CR4").style.animation = "fadeIn 1s forwards";
            document.getElementById("CR5").style.animation = "fadeIn 1s forwards";
            document.getElementById("CR6").style.animation = "fadeIn 1s forwards";
            document.getElementById("CR7").style.animation = "fadeIn 1s forwards";
            document.getElementById("CR8").style.animation = "fadeIn 1s forwards";
        }
        if($('#sbox5').isInViewport(200)) {
            document.getElementById("RT1").style.animation = "fadeIn 1s forwards";
            document.getElementById("RR1").style.animation = "fadeIn 1s forwards";
            document.getElementById("RR2").style.animation = "fadeIn 1s forwards";
            document.getElementById("RR3").style.animation = "fadeIn 1s forwards";
            document.getElementById("RR4").style.animation = "fadeIn 1s forwards";
            document.getElementById("RR5").style.animation = "fadeIn 1s forwards";
            document.getElementById("RR6").style.animation = "fadeIn 1s forwards";
            document.getElementById("RR7").style.animation = "fadeIn 1s forwards";
            document.getElementById("RR8").style.animation = "fadeIn 1s forwards";
            document.getElementById("RR9").style.animation = "fadeIn 1s forwards";
            document.getElementById("RR10").style.animation = "fadeIn 1s forwards";
            document.getElementById("RR11").style.animation = "fadeIn 1s forwards";
            document.getElementById("RR12").style.animation = "fadeIn 1s forwards";
            document.getElementById("RR13").style.animation = "fadeIn 1s forwards";
            document.getElementById("RR14").style.animation = "fadeIn 1s forwards";
            document.getElementById("RC1").style.animation = "fadeIn 1s forwards";
            document.getElementById("RC2").style.animation = "fadeIn 1s forwards";
            document.getElementById("RC3").style.animation = "fadeIn 1s forwards";
            document.getElementById("RV1").style.animation = "outline 10s forwards";
            document.getElementById("RV2").style.animation = "outline 10s forwards";
            document.getElementById("RV3").style.animation = "outline 10s forwards";
            document.getElementById("RV4").style.animation = "outline 10s forwards";
            document.getElementById("RV5").style.animation = "outline 10s forwards";
            document.getElementById("RV6").style.animation = "outline 10s forwards";
            document.getElementById("RV7").style.animation = "outline 10s forwards";
            document.getElementById("RV8").style.animation = "outline 10s forwards";
            document.getElementById("RV9").style.animation = "outline 10s forwards";
            document.getElementById("RV10").style.animation = "outline 10s forwards";
            document.getElementById("RV11").style.animation = "outline 10s forwards";
        }
        if($('#sbox6').isInViewport(200)) {
            document.getElementById("ST1").style.animation = "fadeIn 1s forwards";
            document.getElementById("ST2").style.animation = "fadeIn 1s forwards";
            document.getElementById("SR1").style.animation = "fadeIn 1s forwards";
            document.getElementById("SC1").style.animation = "fadeIn 1s forwards";
            document.getElementById("SP1").style.animation = "fadeIn 1s forwards";
            document.getElementById("SP2").style.animation = "fadeIn 1s forwards";
            document.getElementById("SV1").style.animation = "outline 10s forwards";
        }

        if($('#sbox7').isInViewport(200)) {
            document.getElementById("DT1").style.animation = "fadeIn 1s forwards";
            document.getElementById("DT2").style.animation = "fadeIn 1s forwards";
            document.getElementById("DC1").style.animation = "fadeIn 1s forwards";
            document.getElementById("DR1").style.animation = "fadeIn 1s forwards, outline 10s forwards";
        }
        if($('#sbox8').isInViewport(200)) {
            document.getElementById("HFRAME").style.animation = "fadeIn 1s forwards";
            document.getElementById("HR1").style.animation = "outline 10s forwards";
        }
        if($('#sbox9').isInViewport(200)) {
            document.getElementById("SST1").style.animation = "fadeIn 1s forwards";
            document.getElementById("SSR1").style.animation = "fadeIn 1s forwards";
            document.getElementById("SSR2").style.animation = "fadeIn 1s forwards";
            document.getElementById("SSC1").style.animation = "fadeIn 1s forwards";
            document.getElementById("SSP1").style.animation = "outline 10s forwards";
            document.getElementById("SSP2").style.animation = "outline 20s forwards";
        }
    })
})