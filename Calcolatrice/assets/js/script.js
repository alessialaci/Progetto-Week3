var schermo = document.getElementById('operazioni');


/* Inserire valori sullo schermo */

function scrivi(id) {
    schermo.value += id;
}


/* Operazioni */

document.getElementById('uguale').addEventListener('click', operazione);

function operazione() {
    schermo.value = eval(schermo.value);
}


/* C - Cancella */

document.getElementById('C').addEventListener('click', cancella);

function cancella() {
    schermo.value = '';
}


/* DEL - Elimina carattere */

document.getElementById('DEL').addEventListener('click', eliminaCarattere);

function eliminaCarattere() {
    schermo.value = schermo.value.slice(0, -1);
}