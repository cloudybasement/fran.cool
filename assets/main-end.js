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

// Decode Email
function decodeEmail(encodedString) {
    // Holds the final output
    var email = ""; 
    
    // Extract the first 2 letters
    var keyInHex = encodedString.substr(0, 2);

    // Convert the hex-encoded key into decimal
    var key = parseInt(keyInHex, 16);

    // Loop through the remaining encoded characters in steps of 2
    for (var n = 2; n < encodedString.length; n += 2) {
        
        // Get the next pair of characters
        var charInHex = encodedString.substr(n, 2)
        
        // Convert hex to decimal
        var char = parseInt(charInHex, 16);

        // XOR the character with the key to get the original character
        var output = char ^ key;

        // Append the decoded character to the output
        email += String.fromCharCode(output);
    }
    return email;
}

function updateAnchor(el) {
    var encoded = el.innerHTML;
    var decoded = decodeEmail(encoded);
    el.textContent = decoded;
    el.href = 'mailto:' + decoded;
}

let emlElements = document.getElementsByClassName("eml-protected");
emlElements.forEach((e) => {
    updateAnchor(e)
})

// import cloudinary from 'cloudinary-core';
// let cl = cloudinary.Cloudinary.new( { cloud_name: "dikhrro6y"});
// cl.responsive();