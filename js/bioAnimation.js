$(document).ready(() => {
    $('#aboutButton').click(() => {
        setTimeout(() => {
            // Wrap every letter in a span
            var textWrapper = document.querySelector('.hello .hello-inner');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

            var engaging = document.querySelector('.engaging');
            engaging.innerHTML = engaging.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

            anime.timeline({loop: false})
            .add({
                targets: '.hello .letter',
                scale: [0, 1],
                duration: 1500,
                elasticity: 600,
                delay: (el, i) => 45 * (i+1)
            }).add({
                targets: '.hello',
                opacity: 1,
                duration: 0,
                easing: "easeOutExpo",
            });
        }, 1000);
        
        setTimeout(() => {
            anime.timeline({loop: false})
            .add({
                targets: '.bio-text',
                opacity: 1,
                duration: 1500
            })
        }, 2000);

        setTimeout(() => {
            anime.timeline({loop: true})
            .add({
                targets: '.engaging .letter',
                color: ['#FFF', '#EBFF00', '#FFF'],
                duration: 1000,
                elasticity: 600,
                delay: (el, i) => 45 * (i+1)
            }); 
        }, 2000)

        setTimeout(() => {
            anime.timeline({loop: false})
            .add({
                targets: '.scroll-text',
                opacity: 1,
                duration: 1500
            })
        }, 3000);

        setTimeout(() => {
            anime.timeline({loop: false})
            .add({
                targets: '.dcontain',
                opacity: 1,
                duration: 1500
            });
        }, 3000);

        $('.aboutContainer').addClass('toggledAnimation');

    });

    $('#menu-about').click(() => {
        if($('.aboutContainer').hasClass('toggledAnimation')) {
            // do nothing
        } else {
            setTimeout(() => {
                // Wrap every letter in a span
                var textWrapper = document.querySelector('.hello .hello-inner');
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
                var engaging = document.querySelector('.engaging');
                engaging.innerHTML = engaging.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
                anime.timeline({loop: false})
                .add({
                    targets: '.hello .letter',
                    scale: [0, 1],
                    duration: 1500,
                    elasticity: 600,
                    delay: (el, i) => 45 * (i+1)
                }).add({
                    targets: '.hello',
                    opacity: 1,
                    duration: 0,
                    easing: "easeOutExpo",
                });
            }, 500);
            
            setTimeout(() => {
                anime.timeline({loop: false})
                .add({
                    targets: '.bio-text',
                    opacity: 1,
                    duration: 1500
                })
            }, 1500);
    
            setTimeout(() => {
                anime.timeline({loop: true})
                .add({
                    targets: '.engaging .letter',
                    color: ['#FFF', '#EBFF00', '#FFF'],
                    duration: 1000,
                    elasticity: 600,
                    delay: (el, i) => 45 * (i+1)
                }); 
            }, 1500)
    
            setTimeout(() => {
                anime.timeline({loop: false})
                .add({
                    targets: '.scroll-text',
                    opacity: 1,
                    duration: 1500
                })
            }, 2500);
    
            setTimeout(() => {
                anime.timeline({loop: false})
                .add({
                    targets: '.dcontain',
                    opacity: 1,
                    duration: 1500
                });
            }, 2500);

            $('.aboutContainer').addClass('toggledAnimation');
        }
    });
})