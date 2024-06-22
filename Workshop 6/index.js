// Task 1
function dateAndTime() {
    const date = document.getElementById("date-paragraph");
    date.innerHTML = Date();

    if (date.style.display === "none") {
        date.style.display = "block";

    } else {
        date.style.display = "none";
    }

    date.style.border = "1px solid black";
    date.style.backgroundColor = "lightgrey";
    date.style.padding = "10px";
    date.style.width = "fit-content";
}

// Task 2
let divCount = 0;
function divCreation() {
    if (divCount < 10) {
        const button2 = document.getElementById('button-2');
        const newDiv = document.createElement('div');
        newDiv.textContent = 'Div created with JS';
        button2.appendChild(newDiv);
        divCount++;

        if (divCount === 10) {
            alert('The limit is 10 Div\'s');
        }
    }
}

// Task 3

let firstClick = true;
function dropdown() {

    const dropdownContainer = document.getElementById('dropdown-container'); // napraven div da ne se otvara nov fajl posebno za ovaa zadaca
    
    const dropdown = document.getElementById('dropdown');
    const country = dropdown.options[dropdown.selectedIndex].text;

    if (firstClick) { // first click e dodadeno da ne pravi nov paragraf na priviot klik
        firstClick = false;
        return;
    }

    const countryParagraph = document.createElement('p');
    
    const paragraphs = dropdownContainer.getElementsByTagName('p');
    for (let paragraph of paragraphs) {
        if (paragraph.textContent === `You selected: ${country}`) {
            return;
        }
    }
    

    countryParagraph.textContent = `You selected: ${country}`;
    dropdownContainer.appendChild(countryParagraph);
    
}

// Task 4

for (let i = 0; i < 3; i++) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.classList.add('d-flex');
    cardContainer.classList.add('gap-3');

    const card = document.createElement('div');
    card.classList.add('card');
    cardContainer.appendChild(card);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img-top');
    cardImg.classList.add('img-fluid');
    cardImg.src = 'https://picsum.photos/50/50';
    cardBody.appendChild(cardImg);

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = 'Card title';
    cardTitle.style.marginTop = '10px';
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
    cardBody.appendChild(cardText);

    const button = document.createElement('button');
    button.classList.add('btn');    
    button.classList.add('btn-primary');
    button.textContent = 'Go somewhere';
    cardBody.appendChild(button);

}


