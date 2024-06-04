/*=============== Show menu ============= */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*=============== Menu show =============== */
/*valiadte if constant exists*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
}

/*=============== Hide show =============== */
/*valiadte if constant exists*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    });
}

/*=============== Remove Menu Mobile =============== */
const navLink =document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    //when we click on each link, we remove the show menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction))

/*=============== Background Header ============= */
function scrollHeader(){
    const header = document.getElementById('header');
    // when the scroll is greater then 50 viewport height, add the scroll-header class to hearder tag.

    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============== Contact Form ============= */
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail =document.getElementById('contact-email'),
    Message = document.getElementById('message'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    //check if the field has a value
    if (
        contactName.value == '' ||
        contactEmail.value == '' ||
        Message.value == ''
    ){
        //add and remove color
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        //show message
        contactMessage.textContent = 'Write all the input fields';
    }else{
        //serviceID - templeteID - #form - publickey
        emailjs.sendForm(
            'service_v5p6u3h',
            'template_70m38kd',
            '#contact-form',
            '_sEvzwV8RwYy7RX9V'
        )
        .then(() => {
            //Show Message and color
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message Sent!';

            //remove message after 5 seconds
            setTimeout(() =>{
                contactMessage.textContent = '';
            }, 5000);
        });
    }
};

contactForm.addEventListener('submit', sendEmail);