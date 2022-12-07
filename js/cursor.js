$(document).ready(() => {
    const cursorHover = () => {
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
    }

    const cursorClose = () => {
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
    }

    const cursorTag = document.querySelector('div.cursors');
    const balls = cursorTag.querySelectorAll('div');

    let aimX = 0;
    let aimY = 0;
    
    balls.forEach((ball, i) => {
        let currentX = 0;
        let currentY = 0;
    
        let speed = 0.2 - i * 0.010;

        const animate = () => {
            currentX += (aimX - currentX) * speed;
            currentY += (aimY - currentY) * speed;
    
            ball.style.left = currentX + "px";
            ball.style.top = currentY + "px"
    
            requestAnimationFrame(animate)
        }
    
        animate();
    })

    // MOUSE EVENT *********************************
    $(document).mousemove((e) => {
        aimX = e.pageX;
        aimY = e.pageY;
    })

    let scroll = $(window).scrollTop();

    // SCROLL EVENT *********************************
    $(window).scroll(e => {
        let scrollTo = $(window).scrollTop();
        let scrollDif = scrollTo - scroll;
        scroll = scrollTo;
        aimY += scrollDif;
    })

    $('#work-up, #work-down, button, .view-link a, .code-link a, input, textarea, .social a').mouseenter(() => {
        cursorHover();
    })
    $('#work-up, #work-down, button, .view-link a, .code-link a, input, textarea, .social a').mouseleave(() => {
        cursorClose();
    })
})