/* Utilizzando i dati forniti, creare un array di stringhe con i nomi dei membri del team.
MILESTONE 0:
Creare l’array di stringhe contenente i nomi dei membri del team.
MILESTONE 1:
Stampare le informazioni su DOM come card.
MILESTONE 3:
Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.
BONUS 1:
In generale curare la parte di UI e organizzare i singoli membri in card/schede.
BONUS 2:
Inserire un form per l’aggiunta di un elemento alla lista.
Consigli del giorno: Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico! */

// Ask user how many people the team should be
const teamNumber = prompt('Quanti membri vuoi inserire?\nIl dato deve essere un numero da 1 a 10.');

if (isNaN(teamNumber) || Number(teamNumber) < 1 || Number(teamNumber) > 10) {
    alert('Non è stato inserito un numero da 1 a 10');
}

// Create variable for team members array
const teamMembers = [];

// Create a loop to insert every team member in the array
for (let i = 1; i <= Number(teamNumber); i++) {

    const teamMember = prompt(`Inserisci il nome del ${i}° elemento`);
    teamMembers.push(teamMember);

}

// Create a loop to add a new card element for each team member
for (let i = 0; i < teamMembers.length; i++) {
    newCard(teamMembers[i]);
}

// Add an eventListener to add/remove a class to highlight (or not) the single card
const cards = document.querySelectorAll(".card");
const cardPressed = e => {
    console.log(e.target.id);  // Get ID of Clicked Element
}
for (let card of cards) {
    card.addEventListener("click", cardPressed);
}


/******************
*FUNCTIONS SECTION*
******************/

//Create a function to generete a card element and add it to the .row element
/**
 * ### newCard
 * Create a new card element for the person and add it to .row element
 * @param {string} person The name of the person
 */
function newCard(person) {

    // Create a new div element
    const newElement = document.createElement('div');

    // Add the .col-cs class
    newElement.className = 'col-cs';

    // Add the new element HTML code
    newElement.innerHTML = `<div id="${person.toLowerCase()}" class="card"><img src="https://xsgames.co/randomusers/avatar.php?g=male" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${person}</h5><p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis nobis, aspernatur quod ab officia odit praesentium a corrupti? Facilis.</p><a href="#" class="btn btn-primary">Rimuovi</a></div></div><!-- /.card -->`;

    // Select the .row element
    const rowElement = document.querySelector('.row');

    // Add the new element at the end of the .row class
    rowElement.appendChild(newElement);

}