// Initializie image slider
new Cocoen(document.querySelector('.cocoen'));

// Initialize scroll animations
AOS.init();

// GLOBAL VARS
let language = "eng";
const contactBtns = document.querySelectorAll('.contactsBtns');
const modal = document.querySelector('.contacts');
const closeBtn = document.getElementById('close');
const langBtn = document.getElementById('lang');

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

contactBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', e => {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
});

langBtn.addEventListener('click', () => {
    if(language == 'eng') {
        language = 'bg';
        localStorage.setItem('lang', language);
    } else {
        language = 'eng';
        localStorage.setItem('lang', language);
    }

    console.log(language);
    changeLanguage(language);
})

if(localStorage.getItem('lang')) {
    language = localStorage.getItem('lang');
} else {
    localStorage.setItem('lang', language);
}

changeLanguage(language);

function changeLanguage(lang) {

    const heading = document.querySelector('.service-text');
    const experience = document.querySelector('.experience');
    const about = document.querySelector('.story__text');
    const portfolioBtns = document.querySelectorAll('.portfolioBtns');
    const contactsHeading = document.querySelector('.contacts__heading');
    const callBtn = document.getElementById('call');
    
    langBtn.src = `./img/${language}.jpg`;

    if(lang == 'bg') {
        heading.innerHTML = `Ще преработя вашите</br>
        снимки / картинки</br>
        и ще създам вашите</br>
        рекламни продукти`;

        experience.innerText = `4+ години опит с Photoshop`;

        contactsHeading.innerText = 'контакти';

        about.innerHTML = `Казвам се Руси Русев и съм от</br>
        България. В момента изучавам уеб </br>
        технологиите, но през свободното си </br>
        време обичам да си \"играя\" с Photoshop. </br>
        Използвам го от 2012-2013 и се считам</br>
        за опитен с него. Не се притеснявайте да се</br>
        свържете с мен и да ми споделите идеята</br>
        си, а аз ще я направя реалност!</br>`;

        contactBtns.forEach(btn => {
            btn.innerText = 'контакти';
        });

        portfolioBtns.forEach(btn => {
            btn.innerText = 'портфолио';
        });

        callBtn.innerHTML = '<svg class="contacts__icon"><use xlink:href="./img/symbol-defs.svg#icon-phone"></use></svg>Обади се';

    } else {
        heading.innerHTML = `I will edit your</br>
        pictures / photos</br>
        and create your</br>
        advertising materials`;

        experience.innerText = `4+ years experience with Photoshop`;

        contactsHeading.innerText = 'contacts';

        about.innerHTML = `My name is Rusi Rusev and i am from</br>
        Bulgaria. I’m studying web </br>
        technologies right now, but in my free </br>
        time i like to play with Photoshop. I’m </br>
        using it since 2012-2013 and I concider</br>
        myself as experienced with it. </br>
        Feel free to contact me and share your</br>
        idea with me and i’ll make it reality!</br>`;

        contactBtns.forEach(btn => {
            btn.innerText = 'contacts';
        });

        portfolioBtns.forEach(btn => {
            btn.innerText = 'portfolio';
        });

        callBtn.innerHTML = '<svg class="contacts__icon"><use xlink:href="./img/symbol-defs.svg#icon-phone"></use></svg>Call me';
    }
}
