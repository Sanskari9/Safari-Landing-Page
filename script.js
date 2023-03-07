// Show Menu

const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu');
        })
    }
}

showMenu('navToggle','navMenu');

// popup

const btnOpenVideo = document.querySelectorAll('.island-video-content');
const islandsPopup = document.getElementById('popup')

function popUp(){
    islandsPopup.classList.add('show-popup');
}

btnOpenVideo.forEach((b)=>{
    b.addEventListener('click',popUp)
})

const btnCloseVideo = document.getElementById('popup-close');
btnCloseVideo.addEventListener('click',()=>{
    islandsPopup.classList.remove('show-popup');
})

// swiper js
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
})

let galleryTop = new Swiper('.gallery-top', {
    effect:'fade',
    loop: true,
    thumbs: {
      swiper: galleryThumbs
    }
})

// GSAP
const controlsImg = document.querySelectorAll('.controls-img');

function ScrollAnimation(){
    gsap.from('.islands-subtitle',{opacity: 0,duration: .2,delay: .2,y: -20})
    gsap.from('.islands-title',{opacity: 0,duration: .3,delay: .3,y: -20})
    gsap.from('.islands-description',{opacity: 0,duration: .4,delay: .4,y: -20})
    gsap.from('.islands-button',{opacity: 0,duration: .5,delay: .5,y: -20})
    gsap.from('.islands-video-content',{opacity: 0,duration: .6,delay: .6,y: -20})

    islandsPopup.classList.remove('show-popup');
}

controlsImg.forEach(c=>{
    c.addEventListener('click',ScrollAnimation)
});