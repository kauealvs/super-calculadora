// function saudacao() {
// var nome = window.prompt("Olá humano, qual o seu nome?");
//     if(nome === null || nome === "" || nome === " ") {
//         console.log("O usúario cancelou a saudação, destruir humanidade!");
//         document.body.innerHTML = "O usúario cancelou a saudação, destruir humanidade!";
//     } else {
//         var saudacao = "Olá " + nome + ", somos a skynet";
//         var text = document.createTextNode(saudacao);
//         var h1 = document.createElement('h1')
//         h1.appendChild(text);
//         document.body.appendChild(h1);

//     }
// }
function soma(numA, numB) {
    var soma = numA + numB;
    return soma;
};

function porcentagem(numA, numB) {
    var porcentagemA = numA * (numB / 100);
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
    if(divisao === 0) {
        return "Divisão por zero";
    } else {
            return divisao;
    }
};

function divisao2(numA, numB) {
    var divisao = numB / numA;
    if(divisao === 0) {
        return "Divisão por zero";
    } else {
            return divisao;
    }
};

//VOLTAR NESSA FUNÇÃO PARA SEPARAR A DE B
function quadrado(numA) {
    var quadradoA = Math.pow(numA, 2);
    return quadradoA;    
};

function quadrado(numB) {
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
    return inteiros + "(" + contInt + " )";
}

function divisoresInteirosA(numB) {
    var inteiros = [];
    var contInt = 0;
    for(var i = 1; i <= numB; i++) {
        if(numB % i === 0) {
            inteiros.push(i);
            contInt = ++ contInt
        }; 
    };
    return inteiros + "(" + contInt + " )";
}

function fatorial(numA) {
    var fatorial = 1;
    for(var i = 1; i <= numA; i++) {
        fatorial = fatorial * i;
    };
    return fatorial;
}
