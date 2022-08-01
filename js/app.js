// INSERISCO IL BOTTONE CON EVENTLISTENER PER GENERARE LA GRIGLIA 
const buttonElement = document.getElementById('genera_griglia');
// const gridEl = document.getElementById('grid_container')
const gridEl = document.querySelector('.grid_container')

// console.log(gridEl)
// console.log(buttonElement)
// IL BOTTONE AVVIERA' UN CICLO CHE GENERERA' 100 DIV
buttonElement.addEventListener('click', function(){
    let diff = document.getElementById('diff').value
    // reset classe stile griglia
    gridEl.classList.remove('normal', 'hard')
    // aggiungo la classe per lo stile css della griglia a seconda della difficoltà selezionata
    if (diff == 9){
        gridEl.classList.add('normal')
    } else if (diff == 7 ){
        gridEl.classList.add('hard')
    }

    // console.log(diff)
    let dimensioneGriglia = diff **2
    // console.log(dimensioneGriglia)
    // RESET
    gridEl.innerHTML = ''
    for (let i = 0; i < dimensioneGriglia; i++) {
    // gridEl.append(div)
    const cella = creaCelleDiv()
    // creo il contenuto del div (il numero della casella)
    cella.innerHTML = i + 1
    // inserisco il div creato nel div "grid"
    gridEl.append(cella)
    }   
}
)
function creaCelleDiv () {
    // creo il div
    const div = document.createElement('div')
    // aggiungo la classe cella ai div creati
    div.classList.add('cella')
    // Aggiungo l'event listener ad ogni div
    div.addEventListener('click', clickHandler)
    return div
}
// console.log(this)

function generaBombe(max){
    // creo array (da 16 in questo caso)
    const bombe = []
    // ciclo per creare le bombe
    while (bombe.length < 16)
        // GENERO UN NUMERO CASUALE DA 1 A MAX
        const n = numeroBombeRandom(1, max)
        // 
        if (!bombe.includes(n)) {
            bombe.push(n)
    }
}
function numeroBombeRandom (min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1 ) + min)
}
function clickHandler() {
    const div = this;
    div.classList.toggle('clicked');
    // scrivo in console il numero della cella
    // console.log(div.innerHTML);

    // rimuovo il listener
    div.removeEventListener('click', clickHandler);
}
