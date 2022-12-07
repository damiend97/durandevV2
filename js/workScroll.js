// workScroll.js

$(document).ready(() => {
    let workItem = 1;

    const scrollDown = (current, target) => {
        anime({
            targets: current,
            top: '-100vh',
            duration: 250,
            easing: 'easeInCirc'
        })
        anime({
            targets: target,
            top: '5vh',
            duration: 250,
            easing: 'easeInCirc'
        })
    }
    const scrollUp = (current, target) => {
        anime({
            targets: current,
            top: '100vh',
            duration: 250,
            easing: 'easeInCirc'
        })
        anime({
            targets: target,
            top: '5vh',
            duration: 250,
            easing: 'easeInCirc'
        })
    }

    const checkWork = (workItem) => {
        if(workItem > 1) {
            $('#work-up').css('opacity','1');
        }
        if(workItem === 6) {
            $('#work-down').css('opacity','0');
        }
        if(workItem < 6) {
            $('#work-down').css('opacity','1');
        }
        if(workItem === 1) {
            $('#work-up').css('opacity','0');
        }
    }

    $('#work-down').click(() => {
        if (workItem + 1 <= 6) {
            let current = `#r${workItem}`;
            workItem++;
            checkWork(workItem);
            let target = `#r${workItem}`;
            scrollDown(current, target)

        }
    })

    $('#work-up').click(() => {
        if (workItem - 1 >= 1) {
            let current = `#r${workItem}`;
            workItem--;
            checkWork(workItem);
            let target = `#r${workItem}`;
            scrollUp(current, target)
        }
    })

    // SCROLL EVENT *********************************
    window.addEventListener("wheel", e => {
        if($('.workContainer').hasClass('toggledContainer')) {
            let direction = Math.sign(e.deltaY);
            if(direction === 1) {
                if(workItem +1 <= 6) {
                    let current = `#r${workItem}`;
                    workItem++;
                    checkWork(workItem)
                    let target = `#r${workItem}`;
                    scrollDown(current, target);
                }
            } else {
                if(workItem -1 >= 1) {
                    let current = `#r${workItem}`;
                    workItem--;
                    checkWork(workItem);
                    let target = `#r${workItem}`;
                    scrollUp(current, target);
                }
            }
        };
    });
})