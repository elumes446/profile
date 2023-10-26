/* ===================== SHOW MENU================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*============= Menu Show ==========*/
/* validate if constant exists */

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


/*======== MENU HIDDEN ======*/
/* validate if constant exists*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*====================== REMOVE MENU MOBILE========*/
const navLink= document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*===================== SHADOW HEADER==============*/
const shadowHeader = () =>{
    const headr = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the shadow header class to the header tag
    this.scrollY >= 50? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*==================EMAIL JS=====================*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    //serviceID - temeplet - #form - publickey

    emailjs.sendForm("service_bvj2jo7","template_pf8zd2n","#contact-form","smIjOhUiSuEj2OnXF")
    .then(() =>{
        // Show sent message 
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(()=>{
            contactMessage.textContent = ''
        }, 5000)

        //Clear input Fields
        contactForm.reset()

    }, () =>{
        // Show error message
        contactMessage.textContent= 'Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)
/*================== SHOW SCROLL UP =============*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //When the scroll is higher than 350 viewport height, and the show-scroll class to the a tag with the scrollup class.
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)


/*================== SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown= window.scrolly

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector(' .nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-Link')
        }

    }) 
}
window.addEventListener('scroll', scrollActive)

/*===================DARK LIGHT THEME=================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user previously chose a topic
if(selectedTheme){
    //if the validation is fulfilled , we ask what the issue was to know if we activated or deactivate the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove' ](darkTheme) 
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate/ deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme ad the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*===================== SCROOL REVEAL ANIMATION =========*/
