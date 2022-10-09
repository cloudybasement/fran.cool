
let currentTheme = localStorage.getItem("theme");
if(currentTheme == undefined){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        currentTheme = "dark"
    } else {
        currentTheme = "light"
    }
}

if(currentTheme == "dark"){
    document.querySelector('body').classList.add('dark-mode');
} else {
    document.querySelector('body').classList.remove('dark-mode');
}
