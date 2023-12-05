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

// Chiedo all'utente quanti membri vuole inserire nel team
const teamNumber = prompt('Quanti membri vuoi inserire?\nIl dato deve essere un numero da 1 a 10.');

if (isNaN(teamNumber) || Number(teamNumber) < 1 || Number(teamNumber) > 10) {
    alert('Non è stato inserito un numero da 1 a 10');
}

// Creo variabile array per membri del team
const teamMembers = [];

// Creo un ciclo per inserire i singoli membri del team
for (let i = 1; i <= Number(teamNumber); i++) {

    const teamMember = prompt(`Inserisci il nome del ${i} elemento`);
    teamMembers.push(teamMember);

}

// Creo un ciclo per aggiunge una card per ogni elemento dell'array
for (let i = 0; i < teamMembers.length; i++) {
    newCard(teamMembers[i]);
}

//Creo una funzione che genera un elemento card e lo aggiunge alla row
/**
 * ### newCard
 * Create a new card element for the person and add it to .row element
 * @param {string} person The name of the person
 */
function newCard(person) {

    // Creo un nuovo elemento div
    const newElement = document.createElement('div');

    // Aggiungo la classe .col-cs
    newElement.className = 'col-cs';

    // Inserisco il contenuto HTML del nuovo elemento
    newElement.innerHTML = `<div id="${person}" class="card"><img src="https://xsgames.co/randomusers/avatar.php?g=male" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${person}</h5><p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis nobis, aspernatur quod ab officia odit praesentium a corrupti? Facilis.</p><a href="#" class="btn btn-primary">Rimuovi</a></div></div><!-- /.card -->`;

    // Seleziono l'elemento con classe .row
    const rowElement = document.querySelector('.row');

    // Aggiungo il nuovo elemento alla fine della classe .row
    rowElement.appendChild(newElement);

}