/*
2. Esporta la funzione dal file.
2 - hobbies.js
1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.
2. Esporta la funzione dal file.
*/

function hobbies(hobbyOne, hobbyTwo, hobbyThree) {
    return { hobby: [hobbyOne, hobbyTwo, hobbyThree] }
};


module.exports = hobbies