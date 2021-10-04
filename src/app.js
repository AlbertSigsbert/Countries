//DOM Vars
const iconToggle = document.getElementById('toggle-icon');
const darkModeToggle = document.getElementById('dark-mode-toggle');

//Theme Vars
const bgColor = '--bg-color';
const txtColor = '--text-color';
const elmntColor = '--elements-color';
const inptColor = '--input-color';
let darkMode = true;


const switchToLightMode  = () => {
    document.documentElement.style.setProperty(bgColor, 'hsl(0, 0%, 98%)');
    document.documentElement.style.setProperty(txtColor, 'hsl(200, 15%, 8%)');
    document.documentElement.style.setProperty(elmntColor, 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty(inptColor, 'hsl(0, 0%, 52%)');
    iconToggle.classList.remove('fas');
    iconToggle.classList.add('far');
    localStorage.setItem('isDark', 'no');
    darkMode = false;
 
};

const switchToDarkMode  = () => {
    document.documentElement.style.setProperty(bgColor, 'hsl(207, 26%, 17%)');
    document.documentElement.style.setProperty(txtColor, 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty(elmntColor, 'hsl(209, 23%, 22%)');
    document.documentElement.style.setProperty(inptColor, 'hsl(0, 0%, 100%)');
    iconToggle.classList.remove('far');
    iconToggle.classList.add('fas');
    localStorage.setItem('isDark', 'yes');
    darkMode = true;
 
};

//On Document Load
document.addEventListener('DOMContentLoaded', () => {
    const isDark = localStorage.getItem('isDark');
     (isDark === 'yes') ?    switchToDarkMode() : switchToLightMode();
       
})

//On icon Click
darkModeToggle.addEventListener('click', e => {
    darkMode ? switchToLightMode() :  switchToDarkMode();

    e.preventDefault();
})

//Dropdown toggle
const dropBtn = document.querySelector('.dropbtn');
const dropContent = document.querySelector('.dropdown-content');

dropBtn.addEventListener('click', e => {
    dropContent.classList.toggle('show');
    e.preventDefault();
})