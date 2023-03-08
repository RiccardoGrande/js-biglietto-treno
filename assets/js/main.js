/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
 */

const numberKilometer = prompt('Quanti chilometri devi percorrere?');

console.log(numberKilometer);

const userBirth = prompt('Quanti anni hai?');

console.log(userBirth);

const ticketPrice = numberKilometer * 0.21;

console.log(ticketPrice);

if (userBirth <= 18) {

    console.log(ticketPrice * 20 / 100);

} else if (userBirth >= 65){

    console.log(ticketPrice * 40 / 100);
} else {

    console.log(ticketPrice * numberKilometer);
}

document.getElementById('result_price').innerHTML =