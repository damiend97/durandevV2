// hideMouse.js

$(document).ready(() => {
    // SCROLL EVENT *********************************
    $(window).scroll((e) => {
        // HIDE MOUSE
        anime({
            targets: ".cursor",
            opacity: 0,
            easing: 'easeInSine',
            duration: 0
        })  
    });

    var totalDistance = 0;
    var lastSeenAt = {x: null, y: null};

    // MOUSE EVENT *********************************
    $(document).mousemove((e) => {
        if(lastSeenAt.x) {
            totalDistance += Math.sqrt(Math.pow(lastSeenAt.y - e.clientY, 2) + Math.pow(lastSeenAt.x - e.clientX, 2));        
        }

        lastSeenAt.x = e.clientX;
        lastSeenAt.y = e.clientY;

        // SHOW MOUSE AFTER 300 MOVEMENT
        if(totalDistance > 300) {
            anime({
                targets: ".cursor",
                opacity: 1,
                easing: 'easeInSine',
                duration: 50
            })
            totalDistance = 0;
        }
    })
})