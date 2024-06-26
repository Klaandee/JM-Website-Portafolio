// ScrollReveal

window.sr = ScrollReveal();

sr.reveal('.navbar-container', {
    duration: 1500,
    origin: 'top',
    distance: '100px',
    reset: true
});

sr.reveal('.home-right', {
    duration: 1500,
    origin: 'left',
    distance: '100px',
    reset: true
});

sr.reveal('.home-left', {
    duration: 1500,
    origin: 'top',
    distance: '100px',
    reset: true
});

sr.reveal('.lang-icons', {
    duration: 1500,
    origin: 'bottom',
    distance: '100px',
    reset: true
});

sr.reveal('.tools-icons', {
    duration: 1500,
    origin: 'bottom',
    distance: '100px',
    reset: true
});

sr.reveal('.proyects', {
    duration: 1500,
    origin: 'bottom',
    distance: '100px',
    reset: true
});

// Form Contact

history.replaceState(null,null,location.pathname);

const $form = document.querySelector('#contact-form');
const $buttonMailTo = document.querySelector('#email-send');
const $reloadWeb = document.querySelector('#reload');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    $buttonMailTo.setAttribute('href', `mailto:jh0n4as@gmail.com?subject=${form.get('asunt')}&body=${form.get('message')}`);
    $reloadWeb.setAttribute('href', `index`);
    $buttonMailTo.click();
    $reloadWeb.click();
}