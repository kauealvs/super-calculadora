// VARIÁVEIS GLOBAIS

var numbA = document.querySelector('.inputA');
var numbB = document.querySelector('.inputB');

var sum = document.querySelector("[id='sum']");
var percent = document.querySelector("[id='percent']");
var mult = document.querySelector("[id='mult']");
var factorialA = document.querySelector("[id='factorialA']");
var factorialB = document.querySelector("[id='factorialB']");
var divider = document.querySelector("[id='divider']");
var dividerB = document.querySelector("[id='dividerB']");
var squareA = document.querySelector("[id='squareA']");
var squareB = document.querySelector("[id='squareB']");
var dividerIntA = document.querySelector("[id='dividerIntA']");
var dividerIntB = document.querySelector("[id='dividerIntB']");
var subA = document.querySelector("[id='subA']");
var subB = document.querySelector("[id='subB']");


function start() {

    numbA.addEventListener('input', inputA)    
    numbB.addEventListener('input', inputB);

};

function inputB(event) {

    calculate()
    
};


function inputA(event) {

    calculate();

};

function calculate() {
        
    numA = parseInt(numbA.value, 10);
    numB = parseInt(numbB.value, 10);
    
    sum.value = soma(numA, numB);
    percent.value = porcentagem(numA, numB);
    mult.value = multiplicacao(numA, numB);
    factorialA.value = fatorialA(numA);
    factorialB.value = fatorialB(numB);
    squareA.value = quadradoA(numA);
    squareB.value = quadradoB(numB);
    divider.value = divisao(numA, numB);
    dividerB.value = divisao2(numA, numB);
    dividerIntA.value = divisoresInteirosA(numA);
    dividerIntB.value = divisoresInteirosB(numB);
    subA.value = subtracao(numA, numB);
    subB.value = subtracao2(numA, numB);
};


function soma(numA, numB) {
    var soma = numA + numB;
    return soma;
};

function porcentagem(numA, numB) {
    var porcentagemA = numB * (numA / 100);
    var porcentagemA = porcentagemA + " %";
    return porcentagemA;
}

function subtracao(numA, numB) {
    var subtracao = numA - numB;
    return subtracao;
};

function subtracao2(numA, numB) {
    var subtracao = numB - numA;
    return subtracao;
};

function multiplicacao(numA, numB) {
    var multiplicacao = numA * numB;
    return multiplicacao;
};

function divisao(numA, numB) {
    var divisao = numA / numB;
    if(numA === 0 || numB === 0) {
        return "Divisão por zero";
    } else {
            return divisao;
    }
};

function divisao2(numA, numB) {
    var divisao = numB / numA;
    if(numA === 0 || numB === 0) {
        return "Divisão por zero";
    } else {
            return divisao;
    }
};


function quadradoA(numA) {
    var quadradoA = Math.pow(numA, 2);
    return quadradoA;    
};

function quadradoB(numB) {
    var quadradoB = Math.pow(numB, 2);
    return quadradoB;    
};

function divisoresInteirosA(numA) {
    var inteiros = [];
    var contInt = 0;
    for(var i = 1; i <= numA; i++) {
        if(numA % i === 0) {
            inteiros.push(i);
            contInt = ++ contInt
        }; 
    };
    return inteiros + " ( " + contInt + " números)";
}

function divisoresInteirosB(numB) {
    var inteiros = [];
    var contInt = 0;
    for(var i = 1; i <= numB; i++) {
        if(numB % i === 0) {
            inteiros.push(i);
            contInt = ++ contInt
        }; 
    };
    return inteiros + " ( " + contInt + " números )";
}

function fatorialA(numA) {
    var fatorial = 1;
    for(var i = 1; i <= numA; i++) {
        fatorial = fatorial * i;
    };
    if(numA > 21){
        return "Número muito grande";
    }
    return fatorial;
}

function fatorialB(numB) {
    var fatorial = 1;
    for(var i = 1; i <= numB; i++) {
        fatorial = fatorial * i;
    };
    if(numB > 21){
        return "Número muito grande";
    }
    return fatorial;
}

start();