// nav.js

var mobile = window.matchMedia("(max-width: 600px)")

$(document).ready(() => {
    const closeMenu = () => {
        anime({
            targets: '.menu',
            left: '100vw',
            easing: 'easeInQuad',
            duration: 500
        })
        $('nav').css('opacity','1');
    }

    $('nav').click(() => {
        if(mobile.matches) {
            anime({
                targets: '.menu',
                left: '0vw',
                easing: 'easeOutBounce',
                duration: 1000
            })
        } else {
            anime({
                targets: '.menu',
                left: '75vw',
                easing: 'easeOutBounce',
                duration: 1000
            })
        }
        
        $('nav').css('opacity','0');
    })

    $('.close-menu').click(() => {
        closeMenu();
    })

    $('.close-menu').mouseenter(() => {
        anime({
            targets: ".cursor",
            background: "#111",
            height: '10px',
            width: '10px',
            border: '5px solid',
            borderColor: '#fff',
            easing: "easeInQuad",
            duration: "250ms"
        })
        anime({
            targets: '.close-menu svg path',
            stroke: '#EBFF00',
            easing: "easeInQuad",
            duration: 250
        })
    })
    $('.close-menu').mouseleave(() => {
        anime({
            targets: ".cursor",
            background: "#fff",
            height: '10px',
            width: '10px',
            border: '0px solid',
            borderColor: '#fff',
            easing: "easeInQuad",
            duration: "250ms"
        })
        anime({
            targets: '.close-menu svg path',
            stroke: '#fff',
            easing: "easeInQuad",
            duration: 250
        })
    })

    $('.menu-item').mouseenter((e) => {
        anime({
            targets: e.target,
            color: "#EBFF00",
            easing: "easeInQuad",
            duration: "250ms"
        })
        anime({
            targets: ".cursor",
            background: "#111",
            height: '10px',
            width: '10px',
            border: '5px solid',
            borderColor: '#fff',
            easing: "easeInQuad",
            duration: "250ms"
        })
    })
    $('.menu-item').mouseleave((e) => {
        anime({
            targets: e.target,
            color: "#fff",
            easing: "easeInQuad",
            duration: "250ms"
        })
        anime({
            targets: ".cursor",
            background: "#fff",
            height: '10px',
            width: '10px',
            border: '0px solid',
            borderColor: '#fff',
            easing: "easeInQuad",
            duration: "250ms"
        })
    })

    $('.menu-item').click((e) => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        toolTitleSize = 0;
        processTitleSize = 0;

        let id = e.target.getAttribute('id');
        let newTarget = "#" + id;

        if($(newTarget).hasClass("toggled") === false) {
            $('.toggledContainer').removeClass('toggledContainer');

            $('.menu-item').removeClass('toggled');
            $(newTarget).addClass('toggled');

            let containerString = newTarget.split('-')[1];
            containerString = "." + containerString + "Container";
            $(containerString).addClass('toggledContainer')

            closeMenu();
        }
    })

    $('nav').mouseenter(() => {
        anime({
            targets: "#path1",
            d: "M56 59.5V56.55C56 55.7235 56 55.0816 56 54.3383C56 53.595 56 53.0207 56 52.311C56 50.6557 56 51.2183 56 50.1599C56 49.1016 56 48.0133 56 46.3466V43.12C56 41.4533 56 40.5201 56 39.439C56 38.3579 56 36.4997 56 35.3172C56 34.1347 56 29.7088 56 31.0935C56 32.3103 56 28.3574 56 27.45V24.5C57.9333 24.5 58.5137 24.5 60.3043 24.5C62.0949 24.5 59.3083 24.5 60.7611 24.5C62.2138 24.5 59.8479 24.5 61.2331 24.5C62.348 24.5 61.5834 24.5 62 24.5V59.5C61.252 59.5 61.7039 59.5 60.8491 59.5C59.5021 59.5 61.7051 59.5 60.4099 59.5C58.9593 59.5 61.696 59.5 59.768 59.5C58.0066 59.5 57.7667 59.5 56 59.5ZM41.8956 59.5V24.5H44.9456V59.5H41.8956Z",
            duration: 2000,
            easing: "easeOutExpo"
        })
        anime({
            targets: "#path2",
            d: "M28 59.5V56.55C28 55.7235 28 55.0816 28 54.3383C28 53.595 28 53.0207 28 52.311C28 50.6557 28 51.2183 28 50.1599C28 49.1016 28 48.0133 28 46.3466V43.12C28 41.4534 28 40.5201 28 39.439C28 38.3579 28 36.4997 28 35.3172C28 34.1347 28 29.7088 28 31.0935C28 32.3103 28 28.3574 28 27.45V24.5C26.0667 24.5 25.4863 24.5 23.6957 24.5C21.9051 24.5 24.6917 24.5 23.2389 24.5C21.7861 24.5 24.1521 24.5 22.7669 24.5C21.652 24.5 22.4166 24.5 22 24.5V59.5C22.748 59.5 22.2961 59.5 23.1509 59.5C24.4978 59.5 22.2949 59.5 23.5901 59.5C25.0407 59.5 22.304 59.5 24.232 59.5C25.9934 59.5 26.2333 59.5 28 59.5ZM42.1044 59.5V24.5H39.0544V59.5H42.1044Z",
            fill: '#FFF',
            duration: 2000,
            easing: "easeOutExpo"
        })
        anime({
            targets: "#logo2",
            rotateZ: "90deg",
            duration: 500,
            easing: "easeOutExpo"
        })
        anime({
            targets: ".cursor",
            background: "#111",
            height: '10px',
            width: '10px',
            border: '5px solid',
            borderColor: '#fff',
            easing: "easeInQuad",
            duration: "250ms"
        })
    })

    $('nav').mouseleave(() => {
        anime({
            targets: "#path1",
            d: "M49.35 57.5V54.55C50.8167 54.55 52.2167 54.5 53.55 54.4C54.8833 54.3 56.0833 54.05 57.15 53.65C58.2167 53.2167 59.05 52.5333 59.65 51.6C60.2833 50.6333 60.6 49.3167 60.6 47.65V32.35C60.6 30.6833 60.2833 29.3833 59.65 28.45C59.05 27.5167 58.2333 26.8333 57.2 26.4C56.1667 25.9667 54.9667 25.7 53.6 25.6C52.2667 25.5 50.85 25.45 49.35 25.45V22.5C51.2833 22.5 53.1 22.6167 54.8 22.85C56.5 23.05 58 23.4833 59.3 24.15C60.6333 24.8167 61.6833 25.8 62.45 27.1C63.2167 28.4 63.6 30.15 63.6 32.35V47.65C63.6 49.9833 63.2 51.8167 62.4 53.15C61.6 54.4833 60.5 55.4667 59.1 56.1C57.7333 56.7 56.2 57.0833 54.5 57.25C52.8333 57.4167 51.1167 57.5 49.35 57.5ZM44 57.5V22.5H47.05V57.5H44Z",
            duration: 2000,
            easing: "easeOutExpo"
        })
        anime({
            targets: "#path2",
            d: "M34.65 57.5V54.55C33.1833 54.55 31.7833 54.5 30.45 54.4C29.1167 54.3 27.9167 54.05 26.85 53.65C25.7833 53.2167 24.95 52.5333 24.35 51.6C23.7167 50.6333 23.4 49.3167 23.4 47.65V32.35C23.4 30.6833 23.7167 29.3833 24.35 28.45C24.95 27.5167 25.7667 26.8333 26.8 26.4C27.8333 25.9667 29.0333 25.7 30.4 25.6C31.7333 25.5 33.15 25.45 34.65 25.45V22.5C32.7167 22.5 30.9 22.6167 29.2 22.85C27.5 23.05 26 23.4833 24.7 24.15C23.3667 24.8167 22.3167 25.8 21.55 27.1C20.7833 28.4 20.4 30.15 20.4 32.35V47.65C20.4 49.9833 20.8 51.8167 21.6 53.15C22.4 54.4833 23.5 55.4667 24.9 56.1C26.2667 56.7 27.8 57.0833 29.5 57.25C31.1667 57.4167 32.8833 57.5 34.65 57.5ZM40 57.5V22.5H36.95V57.5H40Z",
            fill: '#EBFF00',
            duration: 2000,
            easing: "easeOutExpo"
        })
        anime({
            targets: "#logo2",
            rotateZ: "0deg",
            duration: 500,
            easing: "easeOutExpo"
        })
        anime({
            targets: ".cursor",
            background: "#fff",
            height: '10px',
            width: '10px',
            border: '0px solid',
            borderColor: '#fff',
            easing: "easeInQuad",
            duration: "250ms"
        })
    })
});