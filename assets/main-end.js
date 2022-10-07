// Event Listeners
// Dark Mode Toggle
let darkmodeSwitch = document.getElementById('darkmode-switch');
darkmodeSwitch.addEventListener("click", e =>{
    console.log(e);
    document.querySelector('body').classList.toggle('dark-mode');
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
if(introSlide){
    if(document.documentElement.scrollTop-introSlide.getBoundingClientRect().height+window.innerHeight>0){
        console.log(document.documentElement.scrollTop-introSlide.getBoundingClientRect().height+window.innerHeight);
        window.requestAnimationFrame(() => {
            console.log(-introSlide.getBoundingClientRect().height+window.innerHeight);
            introSlide.style.transform = `translateY(${-introSlide.getBoundingClientRect().height+window.innerHeight}px)`
        })
    }
    document.addEventListener("scroll", () => {
        if(document.documentElement.scrollTop-introSlide.getBoundingClientRect().height+window.innerHeight<0){
            window.requestAnimationFrame(() => {
                introSlide.style.transform = `translateY(${-document.documentElement.scrollTop}px)`
            })
        }
        //console.log(document.documentElement.scrollTop, introSlide.getBoundingClientRect().height);
        //if(document.documentElement.scrollTop>introSlide.getBoundingClientRect().height){
        //    introSlide.style.display = 'none'
        //}
    })
}