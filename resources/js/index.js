// VARIÁVEIS GLOBAIS

var numbA = document.querySelector('.inputA');
var numbB = document.querySelector('.inputB');

// var results = document.querySelector('.results');
// var resultsArray = document.querySelectorAll('.results');
var sum = document.querySelector('.sum');
var percent = document.querySelector('.percent');
var mult = document.querySelector('.mult');
var factorialA = document.querySelector('.factorialA');
var factorialB = document.querySelector('.factorialB');
var divider = document.querySelector('.divider');
var dividerB = document.querySelector('.dividerB');
var squareA = document.querySelector('.squareA');
var squareB = document.querySelector('.squareB');
var dividerIntA = document.querySelector('.dividerIntA');
var dividerIntB = document.querySelector('.dividerIntB');
var subA = document.querySelector('.subA');
var subB = document.querySelector('.subB');
var sumId = document.querySelector('#sum');
var percentId = document.querySelector('#percent');
var multId = document.querySelector('#mult');
var factorialAId = document.querySelector('#factorialA');
var factorialBId = document.querySelector('#factorialB');
var dividerId = document.querySelector('#divider');
var dividerBId = document.querySelector('#dividerB');
var squareAId = document.querySelector('#squareA');
var squareBId = document.querySelector('#squareB');
var dividerIntAId = document.querySelector('#dividerIntA');
var dividerIntBId = document.querySelector('#dividerIntB');
var subAId = document.querySelector('#subA');
var subBId = document.querySelector('#subB');


function start() {

    numbA.addEventListener('input', inputA)    
    numbB.addEventListener('input', inputB);
    // resultsArray = Array.from(resultsArray);
    // if (screen.width<=480) {
    //     sum.remove();
    //     percent.remove()
    //     mult.remove()
    //     factorialA.remove()
    //     factorialB.remove()
    //     divider.remove()
    //     dividerB.remove()
    //     squareA.remove()
    //     squareB.remove()
    //     dividerIntA.remove()
    //     dividerIntB.remove()
    //     subA.remove() 
    //     subB.remove() 
    //     }

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

    // if(screen.width<=480) {
    //     return console.log('tela menor');
        
    // }
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

    sumId.value = soma(numA, numB);
    percentId.value = porcentagem(numA, numB);
    multId.value = multiplicacao(numA, numB);
    factorialAId.value = fatorialA(numA);
    factorialBId.value = fatorialB(numB);
    squareAId.value = quadradoA(numA);
    squareBId.value = quadradoB(numB);
    dividerId.value = divisao(numA, numB);
    dividerBId.value = divisao2(numA, numB);
    dividerIntAId.value = divisoresInteirosA(numA);
    dividerIntBId.value = divisoresInteirosB(numB);
    subAId.value = subtracao(numA, numB);
    subBId.value = subtracao2(numA, numB);
    
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