let word = prompt("inserisci una parola");
let resultword = document.getElementById("result-word");
let parolaInversa = invertiParola(word);

if(word == parolaInversa){
    console.log('la parola è palindroma');
    resultword.innerHTML = "la parola è palindroma";
    } else {
    console.log('la parola non è palindroma');
    resultword.innerHTML = "la parola non è palindroma";
    }

function invertiParola(str){
    let strInversa = str.split('').reverse().join('');  
    return strInversa;
}

const buttoneven = document.getElementById("btneven");
let even;
const buttonodd = document.getElementById("btnodd");
let odd;


buttoneven.addEventListener("click", function(){
    console.log("even true")
    return even = true
})

buttonodd.addEventListener("click", function(){
    console.log("odd true")
    odd = true
})

let usernum = document.getElementById("user-num");

let pcnum = randomnum(1, 5);

const buttonplay = document.getElementById("btnplay");

buttonplay.addEventListener("click", function(){
    console.log(odd);
    console.log(even);
    console.log(usernum.value);
    console.log(pcnum);
    let winner = document.getElementById("winner");
    let sumnum = usernum.value + pcnum;
    console.log(sumnum);
    if (sumnum % 2 === 0){
        console.log("il risultato è pari");
        if(even == true){
            console.log("hai vinto!");
            winner.innerHTML = "hai vinto!";
        }
        else if(odd == true){
            console.log("hai perso!");
            winner.innerHTML = "hai perso!";
        }
    }
    else{
        console.log("il risultato è dispari");
        if(odd == true){
            console.log("hai vinto!")
            winner.innerHTML = "hai vinto!";
        }
        else if(even == true){
            console.log("hai perso!");
            winner.innerHTML = "hai perso!";
        }
    }
    
})

function randomnum(min, max){

    let pcnum = Math.floor(Math.random() * max) + min;
    return pcnum;
}