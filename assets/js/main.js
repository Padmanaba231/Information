/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 200}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__item',{interval: 200}); 
sr.reveal('.info-card', { interval: 200 });

// Tambahkan ini:
sr.reveal('.about__intro-card', {
  origin: 'left',
  delay: 200,
});

sr.reveal('.about__skills', {
  origin: 'right',
  delay: 200,
});

sr.reveal('.download__btn', {
  origin: 'bottom',
  distance: '20px',
  delay: 300,
  duration: 1000
});

document.addEventListener("DOMContentLoaded", () => {
    const titles = [
        "Data Scientist ",
        "AI Engineer ",
        "Computer Vision \nResearcher ",
    ];
  
    const animatedText = document.getElementById("animated-text");
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = "";
    let typingSpeed = 100;
  
    function typeWriter() {
      const fullText = titles[titleIndex];
  
      if (isDeleting) {
        currentText = fullText.substring(0, charIndex--);
      } else {
        currentText = fullText.substring(0, charIndex++);
      }
  
      animatedText.innerHTML  = currentText.replace(/\n/g, "<br>");;
  
      if (!isDeleting && charIndex === fullText.length) {
        isDeleting = true;
        setTimeout(typeWriter, 1500); // tunggu sebelum menghapus
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(typeWriter, 500); // tunggu sebelum mengetik teks berikutnya
      } else {
        setTimeout(typeWriter, isDeleting ? 50 : typingSpeed);
      }
    }
  
    typeWriter(); // mulai animasi saat halaman dimuat
  });
  