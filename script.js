let lastScrollTop = 0;
let banner1Page = 1;
const right_arrow = document.getElementById('right_arrow');
const left_arrow = document.getElementById('left_arrow');
const shoes = document.getElementById('shoes');
const pallo1 = document.getElementById('pallo1');
const pallo2 = document.getElementById('pallo2');
const banner2 = document.getElementById("banner2");
const banner3 = document.getElementById("banner3");
const banner4 = document.getElementById("banner4");
const banner5 = document.getElementById("banner5");
const button = document.getElementById('scrollButton');
const button2 = document.getElementById('scrollButton2');
const topBarButton1 = document.getElementById('topBarButton1');
const topBarButton2 = document.getElementById('topBarButton2');
const topBarButton3 = document.getElementById('topBarButton3');


button.addEventListener('click', () => {
    document.getElementById('banner2').scrollIntoView({
        behavior: 'smooth', // For smooth scrolling
        block: 'start'      // Align the top of the element with the top of the scrollable area
    });
});

// Adding touchstart event for mobile devices

button2.addEventListener('click', () => {
    // Scroll the page by 100vw to the right
    document.getElementById('banner2').scrollIntoView({
        behavior: 'smooth', // For smooth scrolling
        block: 'start'      // Align the top of the element with the top of the scrollable area
    });
  });
function onWindowLoad() {
    setBannerPage();
}

topBarButton1.addEventListener('click', () => {
    // Scroll the page by 100vw to the right
    document.getElementById('banner2').scrollIntoView({
        behavior: 'smooth', // For smooth scrolling
        block: 'start'      // Align the top of the element with the top of the scrollable area
    });
  });
topBarButton2.addEventListener('click', () => {
    // Scroll the page by 100vw to the right
    document.getElementById('banner4').scrollIntoView({
        behavior: 'smooth', // For smooth scrolling
        block: 'start'      // Align the top of the element with the top of the scrollable area
    });
  });
topBarButton3.addEventListener('click', () => {
    // Scroll the page by 100vw to the right
    document.getElementById('banner6').scrollIntoView({
        behavior: 'smooth', // For smooth scrolling
        block: 'start'      // Align the top of the element with the top of the scrollable area
    });
  });

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
            banner5.style.opacity = 0;
            banner2.style.opacity = 1;
            banner4.style.opacity = 1;
            topBarButton1.innerHTML = "Lawyer"
            topBarButton2.innerHTML = "Judge"
            topBarButton3.innerHTML = "About Us"
            break;
        case 2:
            shoes.style.left = '-40.5vw';
            pallo1.src = 'palloTyhja.png';
            pallo2.src = 'pallofull.png';
            banner2.style.opacity = 0;
            banner4.style.opacity = 0;
            banner3.style.opacity = 1;
            banner5.style.opacity = 1;
            topBarButton1.innerHTML = "USMS"
            topBarButton2.innerHTML = "Most Wanted"
            topBarButton3.innerHTML = "About Us"
            break;
        default:
            console.log('Invalid Page Number');
    }
}