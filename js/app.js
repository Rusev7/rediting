// Initializie image slider
new Cocoen(document.querySelector('.cocoen'));

// Initialize scroll animations
AOS.init();

window.addEventListener('scroll', () => {
    let windowHight = window.outerHeight;
    let scrollLimit = Math.floor(windowHight / 400) * 100;
    const navigation = document.querySelector('.navigation');

    if(window.pageYOffset >= scrollLimit) {
        navigation.classList.add('navi-appearance');
        navigation.classList.remove('navi-disappear');
    } else {
        navigation.classList.remove('navi-appearance');
        navigation.classList.add('navi-disappear');
    }
})