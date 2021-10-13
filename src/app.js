//DOM Vars
const iconToggle = document.getElementById('toggle-icon');
const darkModeToggle = document.getElementById('dark-mode-toggle');

//Theme Vars
const bgColor = '--bg-color';
const txtColor = '--text-color';
const elmntColor = '--elements-color';
const inptColor = '--input-color';
const boxShadow = '--box-shadow';
let darkMode = true;


const refresh =  () =>  {    
    setTimeout(() => {
        window.location.reload();
    }, 50);
}

const switchToLightMode  = () => {
    document.documentElement.style.setProperty(bgColor, 'hsl(0, 0%, 98%)');
    document.documentElement.style.setProperty(txtColor, 'hsl(200, 15%, 8%)');
    document.documentElement.style.setProperty(elmntColor, 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty(inptColor, 'hsl(0, 0%, 52%)');
    document.documentElement.style.setProperty(boxShadow,'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;');
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
    document.documentElement.style.setProperty(boxShadow,'none');

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
    refresh();
    e.preventDefault();
})

//Dropdown toggle
const dropBtn = document.querySelector('.dropbtn');
const dropContent = document.querySelector('.dropdown-content');

dropBtn.addEventListener('click', e => {
    dropContent.classList.toggle('show');
    e.preventDefault();
})

//API REQUESTS
axios.get('https://restcountries.com/v3.1/all')
.then(function (response) {
    // handle success
    // console.log(response.data);
      
    const countriesData = response.data;

     //Render to UI
     const countries = document.querySelector('.countries');

     let output = '';
     countriesData.forEach(country => {
         

          output += `
            <div class="card">
            <img class="card-img" src="${country.flags.svg}" alt="">
            <div class="card-body">
                <h3 class="card-title">${country.name.common}</h3>
                <ul>
                  <li>Population: ${country.population}</li>
                  <li>Region: ${country.region}</li>
                  <li>Capital: ${country.capital}</li>
                </ul>
               
            </div>
            </div>
          `;

          
    });
    
    countries.innerHTML = output;

 
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


