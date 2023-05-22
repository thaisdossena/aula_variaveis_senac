    //Exercícios de interpretação de código

    //1.Analise o programa abaixo e diga o que será impresso no console

// let a = 10;
// let b = 10;

// console.log(b);//10

// b = 5;
// console.log(a, b);//10,5

    //2.Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10;
let b = 20;
c = a;
b = c;
a = b;

console.log(a, b, c);//10,10,10

    // 3.Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis.

let p = prompt("Quantas horas você trabalha por dia?");//let horasTrabalhadas
let t = prompt("Quanto você recebe por dia?");//let valorHora
alert(`Voce recebe ${t/p} por hora`);//

    // Exercícios de escrita de código

    // 1. Construa um programa, seguindo os seguintes passos:    
    //     a) Declare uma variável para armazenar um nome, sem atribuir um valor.  
    //     b) Declare uma variável para armazenar uma idade, sem atribuir um valor.    
    //     c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.    
    //     d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.    
    //     e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.        
    //     f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.    
    //     g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos".

let nome;
let idade;

nome = prompt(`Qual o seu nome?`);//string, prompt sempre retorna uma string
idade = prompt(`Qual a sua idade?`);//string, prompt sempre retorna uma string

console.log( typeof nome);//undifined representa a falta de valor da variável
console.log( typeof idade);//undifined representa a falta de valor da variável
console.log(`Olá ${nome};! Você tem ${idade} anos.`)

    // 2. Escreva um programa que faça 3 perguntas de 'Sim' ou 'Não', armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:        
    // a) Crie três novas variáveis, contendo as respostas
    // b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

let amigos = prompt(`Você considera seus amigos como parte da sua família?`).toUpperCase();
let doutorGoogle = prompt(`Quando você sente uma dor, pesquisa no Google?`).toUpperCase();
let tarefas = prompt(`Já fez suas tarefas?`).toUpperCase();

console.log(`
Você considera seus amigos como parte da sua família? - ${amigos}
Quando você sente uma dor, pesquisa no Google? - ${doutorGoogle}
Já fez suas tarefas?- ${tarefas}`);

    //3.Suponha que temos duas variáveis a e b, cada uma com um valor inicial  a=10 b=25. Agora, queremos trocar os valores delas de forma que a passe a ter o valor de b e b passe a ter o valor de a. 

let a = 10;
let b = 25;
let c;

c = a;
a = b;
b = c;

console.log("O novo valor de a é", a); 
console.log("O novo valor de b é", b); 


    //Desafio

    // Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:
        // 1. O primeiro número somado ao segundo número resulta em: x.
        // 2. O primeiro número multiplicado pelo segundo número resulta em: y.

let valorUm = Number(prompt(`Digite um número`));
let valorDois = Number(prompt(`Digite outro número`));

let x = valorUm + valorDois;
let y = valorUm * valorDois;

console.log(`O primeiro número somado ao segundo número resulta em: ${x}`)
console.log(`O primeiro número multiplicado pelo segundo número resulta em: ${y}`)