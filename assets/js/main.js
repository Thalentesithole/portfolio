/*=============== Active Link ============= */
const navlink = document.querySelectorAll('.nav__link');

function activelink(){
    navlink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}

navlink.forEach((a) => a.addEventListener('click', activelink));


/*=============== MixItUp Filter ============= */
let mixerProjects = mixitup('.project__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300
    }
});

/* Active Work */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork(){
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));




