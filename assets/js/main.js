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

const ticketMinors = ticketPrice * 20 / 100;

console.log(ticketMinors);

const ticketSeniors = ticketPrice * 40 / 100;

console.log(ticketSeniors);

const ticketNormal = ticketPrice;

console.log(ticketNormal);

let result_discount;

if (userBirth <= 18) {

    console.log('ticketMinors');

    result_discount= ticketMinors

    alert('ticketPrice * 20 / 100')


} else if (userBirth >= 65){

    console.log('ticketSeniors');

    result_discount= ticketSeniors

    alert('ticketPrice * 40 / 100')
} else {

    console.log('ticketNormal');

    result_discount= ticketNormal

    alert('ticketPrice')
}

const finalPrice = document.getElementById('result_price');

finalPrice.innerHTML = `${result_discount} ${ticketPrice.toFixed(2)}`;
