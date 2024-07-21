// Clock

const time = document.getElementById('clock');
let isClockRunning = true;
let clockInterval;

function showTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    time.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function startClock() {
    clockInterval = setInterval(showTime, 1000);
}

function stopClock() {
    clearInterval(clockInterval);
}

startClock();

let clockContainer = document.getElementById('clockContainer');
let clockButton = document.createElement('button');
clockButton.setAttribute('id', 'clockButton')
clockContainer.appendChild(clockButton);

clockButton.innerText = 'Stop Clock';

function toggleClock() {
    if (isClockRunning) {
        stopClock();
        clockButton.innerText = 'Start Clock';
    } else {
        startClock();
        clockButton.innerText = 'Stop Clock';
    }
    isClockRunning = !isClockRunning;
}
clockButton.innerText = 'Stop Clock';
clockButton.addEventListener('click', toggleClock);
clockButton.classList.add('btn', 'btn-primary');
clockButton.style.marginTop = '10px';

// Input

let inputContainer = document.getElementById('inputContainer');


let inputForm = document.createElement('form');
inputForm.setAttribute('id', 'inputForm');
inputContainer.appendChild(inputForm);

let input = document.createElement('input');
input.setAttribute('id', 'input');
input.classList.add('form-control');
inputForm.appendChild(input);

let button = document.createElement('button');
button.setAttribute('id', 'button');
button.innerText = 'Submit';
button.classList.add('btn', 'btn-secondary', 'mt-3');
inputForm.appendChild(button);


let divParagraph = document.createElement('div');
let inputParagraph = document.createElement('p');
inputParagraph.setAttribute('id', 'inputParagraph');
divParagraph.appendChild(inputParagraph);
inputContainer.appendChild(divParagraph);

button.addEventListener('click', function(event) {
    event.preventDefault();
    inputParagraph.classList.add('form-control', 'mt-3');
    localStorage.setItem('inputValue', input.value);
    inputParagraph.innerText = localStorage.getItem('inputValue');
});

// button body background changer

let bodyBgButton = document.getElementById('bodyBgButton');
bodyBgButton.innerText = 'Dark Mode';
bodyBgButton.classList.add('btn', 'btn-secondary', 'mt-3');
document.body.appendChild(bodyBgButton);
let bodyBackground;
let bodyLastBackground = localStorage.getItem('bodyBackground');

function StoredBodyBg(){
    if (bodyLastBackground === 'true') {
        changeBodyBg();
    } else if (bodyLastBackground === 'false') {
        lightBodyBg();
    }
}
StoredBodyBg();

function lightBodyBg() {
    document.body.classList.add('bg-light', 'text-dark',);
    document.body.classList.remove('bg-dark', 'text-light');
    bodyBgButton.classList.add('btn-secondary');
    bodyBgButton.classList.remove('btn-light');
}

function darkBodyBg() {
    document.body.classList.add('bg-dark', 'text-light');
    document.body.classList.remove('bg-light', 'text-dark');
    bodyBgButton.classList.add('btn-light');
    bodyBgButton.classList.remove('btn-secondary');
}

function changeBodyBg() {
    if (bodyBackground){
        lightBodyBg();
        bodyBgButton.innerText = 'Dark Mode';
        bodyBackground = false;
    } else {
        darkBodyBg();
        bodyBgButton.innerText = 'Light Mode';
        bodyBackground = true;
    }
    

}

bodyBgButton.addEventListener('click', function() {
    changeBodyBg();
    localStorage.setItem('bodyBackground', bodyBackground);
});

// dropdown font size

// font size

function applyFontSizeClass(fonts) {
    document.body.classList.remove('fs-1', 'fs-2', 'fs-3', 'fs-4', 'fs-5');
    document.body.classList.add(fonts);  
}

function saveFontSize(fonts) {
    localStorage.setItem('fontSize', fonts);
    applyFontSizeClass(fonts);
}
function fontSize1() {
    saveFontSize('fs-1');
}

function fontSize2() {
    saveFontSize('fs-2');
}

function fontSize3() {
    saveFontSize('fs-3');

}

function fontSize4() {
    saveFontSize('fs-4');
}

function fontSize5() {
    saveFontSize('fs-5');
}

function lastFontSize() {
   const savedFontSize = localStorage.getItem('fontSize');
   if (savedFontSize) {
    applyFontSizeClass(savedFontSize);
   };
}

lastFontSize();

// dropdown
let dropdownFontSize = document.getElementById('fontSizeDropdown');

dropdownFontSize.classList.add('dropdown', 'mt-3');


// toggle button
let dropdownFontSizeToggle = document.createElement('button');
dropdownFontSizeToggle.classList.add('btn', 'btn-secondary', 'dropdown-toggle');
dropdownFontSizeToggle.setAttribute('data-bs-toggle', 'dropdown');
dropdownFontSizeToggle.innerText = 'Font size';
dropdownFontSize.appendChild(dropdownFontSizeToggle);

// ul list
let ulDropdownFontSize = document.createElement('ul');
ulDropdownFontSize.classList.add('dropdown-menu');
dropdownFontSize.appendChild(ulDropdownFontSize);

ulDropdownFontSize.innerHTML =`
<li><a class="dropdown-item" href="#" onclick="fontSize1()"> Font size 1</a></li>
<li><a class="dropdown-item" href="#" onclick="fontSize2()"> Font size 2</a></li>
<li><a class="dropdown-item" href="#" onclick="fontSize3()"> Font size 3</a></li>
<li><a class="dropdown-item" href="#" onclick="fontSize4()"> Font size 4</a></li>
<li><a class="dropdown-item" href="#" onclick="fontSize5()"> Font size 5</a></li>
`

// dropdown language

//dropdown container

let languageDropdownContainer = document.getElementById('languageDropdownContainer');
languageDropdownContainer.classList.add('mt-3');

// dropdown
let languageDropdown = document.createElement('div');
languageDropdown.classList.add('dropdown', 'mt-3');
languageDropdownContainer.appendChild(languageDropdown);

// toggle button
let languageDropdownToggle = document.createElement('button');
languageDropdownToggle.classList.add('btn', 'btn-secondary', 'dropdown-toggle');
languageDropdownToggle.setAttribute('data-bs-toggle', 'dropdown');
languageDropdownToggle.innerText = 'Language';
languageDropdown.appendChild(languageDropdownToggle);

// ul list
let ulLanguageDropdown = document.createElement('ul');
ulLanguageDropdown.classList.add('dropdown-menu');
languageDropdown.appendChild(ulLanguageDropdown);

ulLanguageDropdown.innerHTML =`
<li><a class="dropdown-item" href="#" onclick="languageEnglish()"> English</a></li>
<li><a class="dropdown-item" href="#" onclick="languageGerman()"> German</a></li>
<li><a class="dropdown-item" href="#" onclick="languageSpanish()"> Spanish</a></li>
`

let languageParagraph = document.createElement('p');
languageParagraph.setAttribute('id', 'languageParagraph');
languageDropdownContainer.appendChild(languageParagraph);


function languageEnglish() {
    languageParagraph.innerText = 'English language';
    languageParagraph.classList.add('form-control', 'mt-3');
    setCookie();
}

function languageGerman() {
    languageParagraph.innerText = 'German language';
    languageParagraph.classList.add('form-control', 'mt-3');
    setCookie();
}

function languageSpanish() {
    languageParagraph.innerText = 'Spanish language';
    languageParagraph.classList.add('form-control', 'mt-3');
    setCookie();
}

function setCookie(){
    document.cookie = `language = ${languageParagraph.innerText}; max-age=604800` ;
}







