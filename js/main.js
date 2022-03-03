let word = prompt("inserisci una parola");
let resultword = document.getElementById("result-word");
let parolaInversa = invertiParola(word);

if(word == parolaInversa){
    console.log('la parola è palindroma');
    resultword.innerHTML = "la parola è palindroma"
    } else {
    console.log('la parola non è palindroma');
    resultword.innerHTML = "la parola non è palindroma"
    }

function invertiParola(str){
    let strInversa = str.split('').reverse().join('');  
    return strInversa;
}

