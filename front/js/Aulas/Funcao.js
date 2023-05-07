//Funções = São trechos de código que podem ser chamado a qualquer momento

function nome(){

    // após o return ser executado é finalizado a função
    return "Eduardo Kim";
}

nome(); //Chamando a função 

function idadeUser(){
    let idade = 21;
    console.log("Idade : " + idade);
}

idadeUser();

function statusUser(nome,idade,peso,altura){

    let resultado = [nome,idade,peso,altura];

    console.log(resultado);
}

statusUser('Eduardo',21,90,1,8);

// Mesma coisa que let name =  "Eduardo";
var nameUser =  nome();

console.log(nameUser);
console.log("----------------------------------------------------------------------");

// Função dentro de uma variável 

const func = function(){
    console.log("Função dentro da variável !!");
}

func();
