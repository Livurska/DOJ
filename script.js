let lastScrollTop = 0;
let banner1Page = 1;
const right_arrow = document.getElementById('right_arrow');
const left_arrow = document.getElementById('left_arrow');
const shoes = document.getElementById('shoes');
const pallo1 = document.getElementById('pallo1');
const pallo2 = document.getElementById('pallo2');
const banner2 = document.getElementById("banner2");
const banner3 = document.getElementById("banner3");

function onWindowLoad() {
    setBannerPage();
}

right_arrow.addEventListener('click', function() {
    if (banner1Page < 2) {
        banner1Page += 1;
        setBannerPage();
        console.log('Right Click: Current Page:', banner1Page);
    }
});

left_arrow.addEventListener('click', function() {
    if (banner1Page > 1) {
        banner1Page -= 1;
        setBannerPage();
        console.log('Right Click: Current Page:', banner1Page);
    }
    
});

function setBannerPage() {
    console.log('Setting Banner Page to:', banner1Page);
    switch (banner1Page) {
        case 1:
            shoes.style.left = '36.5vw';
            pallo1.src = 'pallofull.png';
            pallo2.src = 'palloTyhja.png';
            banner3.style.opacity = 0;
            banner2.style.opacity = 1;
            break;
        case 2:
            shoes.style.left = '-40.5vw';
            pallo1.src = 'palloTyhja.png';
            pallo2.src = 'pallofull.png';
            banner2.style.opacity = 0;
            banner3.style.opacity = 1;
            break;
        default:
            console.log('Invalid Page Number');
    }
}