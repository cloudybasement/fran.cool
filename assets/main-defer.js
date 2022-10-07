let darkmodeSwitch = document.getElementById('darkmode-switch');
console.log(darkmodeSwitch);
darkmodeSwitch.addEventListener("click", e =>{
    console.log(e);
    document.querySelector('body').classList.toggle('dark-mode');
})