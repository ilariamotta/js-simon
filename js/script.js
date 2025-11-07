const countdown = document.querySelector("#countdown")
const numMem = document.querySelector("#numMem");

const form = document.querySelector("form");
const btn = document.querySelector("button");
const numIndovinati = document.querySelector("#numInd")

//NUMERI INPUT
const numInputOne = document.querySelector("#n1");
const numInputTwo = document.querySelector("#n2");
const numInputThree = document.querySelector("#n3");
const numInputFour = document.querySelector("#n4");
const numInputFive = document.querySelector("#n5");


// NUMERI DA RICORDARE
const memo1 = document.querySelector("#memo1")
const memo2 = document.querySelector("#memo2")
const memo3 = document.querySelector("#memo3")
const memo4 = document.querySelector("#memo4")
const memo5 = document.querySelector("#memo5")

// GENERAZIONE NUMERI

const numGen = [];

for (let i = 0; i < 5; i++) {
    const num = Math.floor(Math.random() * 99) + 1;
    if (!numGen.includes(num)) {
        numGen.push(num);
    } if (numGen.length === 5) {
        break;
    }

}

console.log(numGen)
//STAMPA NUMERI IN PAGINA
memo1.innerHTML = numGen[0];
memo2.innerHTML = numGen[1];
memo3.innerHTML = numGen[2];
memo4.innerHTML = numGen[3];
memo5.innerHTML = numGen[4];


//FUNZIONE COUNTDOWN
let count = 30;
countdown.innerHTML = 30;
const intervalId = setInterval(function () {
    if (count > 0) {
        count--;
        countdown.innerHTML = count;

    } else if (count === 0) {
        clearInterval(intervalId);
        countdown.classList.add("d-none");
        numMem.classList.add("d-none");

    }
}, 1000);


let result = 0;
let numOk = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();
const numUtente = [parseInt(numInputOne.value), parseInt(numInputTwo.value), parseInt(numInputThree.value), parseInt(numInputFour.value), parseInt(numInputFive.value)];

for (let i = 0; i < numGen.length; i++) {
    for (let j = 0; j < numUtente.length; j++) {
        if (numGen[i] === numUtente[j]) {
            result++;
            numOk.push(numGen[i])
            
        }
    }
}
numIndovinati.innerHTML = `${result} numeri &#40;${numOk}&#41;`;
});





































