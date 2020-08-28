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
});

const contactBtns = document.querySelectorAll('.contactsBtns');
const modal = document.querySelector('.contacts');

contactBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

const closeBtn = document.getElementById('close');

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', e => {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
});

const callBtn = document.getElementById('call');

callBtn.addEventListener('click', () => {
    document.location.href = 'tel:+359895077786';
})