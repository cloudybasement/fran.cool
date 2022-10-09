// Event Listeners
// Dark Mode Toggle

let darkmodeSwitch = document.getElementById('darkmode-switch');
darkmodeSwitch.addEventListener("click", e =>{
    document.querySelector('body').classList.add('animate-dark-mode');
    console.log(e);
    if(currentTheme == "light"){
        document.querySelector('body').classList.add('dark-mode');
        currentTheme = "dark"
        localStorage.setItem("theme", currentTheme);
    } else {
        document.querySelector('body').classList.remove('dark-mode');
        currentTheme = "light"
        localStorage.setItem("theme", currentTheme);
    }
})

// Button follow mouse effect
let followButtonCards = [...document.querySelectorAll('.hover-invert-button-trigger')];
if(followButtonCards){
    followButtonCards.forEach(e => {
        //console.log(e);
        let button = e.querySelector("button");
        e.addEventListener("mousemove", (e) => {
            //console.log(e);
            window.requestAnimationFrame(() => {
                // button.style.setProperty('--scale', Math.abs(e.offsetX/(button.getBoundingClientRect().width/2)));
                button.style.setProperty('--translateX', e.offsetX - button.getBoundingClientRect().width/2+'px');
                button.style.setProperty('--translateY', e.offsetY - button.getBoundingClientRect().height/2+'px');
            })
        }, false)
    })
}

// Intro scroll slide
let introSlide = document.getElementById('intro');
// console.log(introSlide);
if(introSlide){
    if(document.documentElement.scrollTop-introSlide.getBoundingClientRect().height+window.innerHeight>0){
        // console.log(document.documentElement.scrollTop-introSlide.getBoundingClientRect().height+window.innerHeight);
        window.requestAnimationFrame(() => {
            console.log(-introSlide.getBoundingClientRect().height+window.innerHeight);
            introSlide.style.transform = `translateY(${-introSlide.getBoundingClientRect().height+window.innerHeight}px)`
        })
    }
    window.addEventListener("scroll", () => {
        let scrollThreshold = document.documentElement.scrollTop-introSlide.getBoundingClientRect().height+window.innerHeight;
        // console.log(scrollThreshold)
        if(scrollThreshold<0){
            window.requestAnimationFrame(() => {
                introSlide.style.transform = `translateY(${-document.documentElement.scrollTop}px)`
            })
        }
    })
}

// Title Parallax
const parallaxEls = document.querySelectorAll("[data-speed]");
 
window.addEventListener("scroll", parallaxUpdate);
parallaxUpdate()
 
function parallaxUpdate() {
  parallaxEls.forEach(parallaxEl => {
   const transformY = parallaxEl.dataset.speed * ((parallaxEl.getBoundingClientRect().top-(window.innerHeight-parallaxEl.getBoundingClientRect().height)/2) * ((window.scrollY)/20000));
    window.requestAnimationFrame(()=>{
        parallaxEl.style.transform = `translate3d(0,${-transformY}px,0)`;
    })
  })
}

import cloudinary from 'cloudinary-core';
let cl = cloudinary.Cloudinary.new( { cloud_name: "dikhrro6y"});
cl.responsive();