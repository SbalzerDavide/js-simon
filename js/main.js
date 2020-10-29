// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

$(document).ready(function(){
    //variabili 
    var outputNumber = [];
    var inputNumber = [];
    var find = 0;
    var findNumber = [];
    //referenze
    var punteggio = $('.find');
    var numeriIndovinati = $('.find-number');
    var results = $('.results');

    //generazione 5 numeri casuali
    for (var i = 0; i < 5; i++ ){
        var random = randomNumber(1,100);
        outputNumber.push(random);
    }

    //visualizzazione tramite alert dei 5 numeri
    alert('Osserva con attezione questi 5 numeri: \n' + outputNumber);

    //dopo 30 secondi, richiesta di inserire i numeri visti precedentemente 
    setTimeout(function(){
        //inserimento numeri
        var userNumber;
        for (var i = 0; i < outputNumber.length; i++){
            userNumber = parseInt(prompt('inserisici uno alla volta i numeri visualizzati precedentemente'));
            while (isNaN(userNumber)){
                userNumber = parseInt(prompt('ATTENZIONE: inserisci un numero'));
            }
            inputNumber.push(userNumber);
        }

        //analisi tra i due array
        for (var i = 0; i < 5; i++ ){
            if (outputNumber.includes(inputNumber[i])){
                find++;
                findNumber.push(inputNumber[i]);
            }
        }

        //stampa dei risultati su html
        results.show();
        punteggio.text(find);
        for (var i = 0; i < findNumber.length; i++ ){
            numeriIndovinati.append(findNumber[i] + ' ');
        }
    },30000);

})//<-- end jQuery

//functions
/**
 * generazione numeri random definendo il range dati i parametri (che saranno compresi)
 * @param {*} min numero minimo 
 * @param {*} max numero massimo 
 */
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}