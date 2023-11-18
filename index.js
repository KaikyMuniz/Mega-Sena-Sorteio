function limitInput() {
    let inputFields = document.querySelectorAll('.escolher-numero-input');
    let maxLength = 2;

    inputFields.forEach((inputField) => {
        if (inputField.value.length > maxLength) {
            inputField.value = inputField.value.slice(0, maxLength);
        }
    });
}

const btnSorteio = document.querySelector('#sorteio-btn');
btnSorteio.addEventListener('click', PrepararSorteio);

function VerificarValoresInseridos(...variaveis){

    let algumaVazia = false;
    
    variaveis.forEach((variavel, index) => {
        if (variavel === '' || variavel === null || variavel > 60 || variavel <= 0) {
            document.getElementById('aviso').innerText = "INSIRA OS VALORES DE 1 A 60";
            algumaVazia = true;
        }else{
            document.getElementById('aviso').innerText = '';
            document.getElementById('resultado-numero-1').style.visibility = 'hidden';
            document.getElementById('resultado-numero-2').style.visibility = 'hidden';
            document.getElementById('resultado-numero-3').style.visibility = 'hidden';
            document.getElementById('resultado-numero-4').style.visibility = 'hidden';
            document.getElementById('resultado-numero-5').style.visibility = 'hidden';
            document.getElementById('resultado-numero-6').style.visibility = 'hidden';
            RealizarSorteioValor1();
            RealizarSorteioValor2();
            RealizarSorteioValor3();
            RealizarSorteioValor4();
            RealizarSorteioValor5();
            RealizarSorteioValor6();
            ExibirResultado();
        }
    });
}

let numerosSorteados = [];

function PrepararSorteio(){
    numerosSorteados = [];
    const valorEscolhido1 = document.getElementById('numero-escolhido-1').value;
    const valorEscolhido2 = document.getElementById('numero-escolhido-2').value;
    const valorEscolhido3 = document.getElementById('numero-escolhido-3').value;
    const valorEscolhido4 = document.getElementById('numero-escolhido-4').value;
    const valorEscolhido5 = document.getElementById('numero-escolhido-5').value;
    const valorEscolhido6 = document.getElementById('numero-escolhido-6').value;

    const numeroEscolhido1 = document.getElementById('numero-escolhido-1');
    numeroEscolhido1.style.backgroundColor = '#00A056';

    const respostaNumero1 = document.getElementById('resultado-numero-1');
    respostaNumero1.style.backgroundColor = '#00A056';

    const numeroEscolhido2 = document.getElementById('numero-escolhido-2');
    numeroEscolhido2.style.backgroundColor = '#00A056';
    
    const respostaNumero2 = document.getElementById('resultado-numero-2');
    respostaNumero2.style.backgroundColor = '#00A056';

    const numeroEscolhido3 = document.getElementById('numero-escolhido-3');
    numeroEscolhido3.style.backgroundColor = '#00A056';

    const respostaNumero3 = document.getElementById('resultado-numero-3');
    respostaNumero3.style.backgroundColor = '#00A056';

    const numeroEscolhido4 = document.getElementById('numero-escolhido-4');
    numeroEscolhido4.style.backgroundColor = '#00A056';
    
    const respostaNumero4 = document.getElementById('resultado-numero-4');
    respostaNumero4.style.backgroundColor = '#00A056';

    const numeroEscolhido5 = document.getElementById('numero-escolhido-5');
    numeroEscolhido5.style.backgroundColor = '#00A056';

    const respostaNumero5 = document.getElementById('resultado-numero-5');
    respostaNumero5.style.backgroundColor = '#00A056';

    const numeroEscolhido6 = document.getElementById('numero-escolhido-6');
    numeroEscolhido6.style.backgroundColor = '#00A056';
    
    const respostaNumero6 = document.getElementById('resultado-numero-6');
    respostaNumero6.style.backgroundColor = '#00A056';


    VerificarValoresInseridos(valorEscolhido1, valorEscolhido2, valorEscolhido3, 
    valorEscolhido4, valorEscolhido5, valorEscolhido6);
}

function GerarNumeroNaoRepetido() {
    let numero;
    do {
        numero = Math.floor(Math.random() * 60 + 1);
        numero = numero < 10 ? `0${numero}` : numero.toString();
    } while (numerosSorteados.includes(numero));
    
    numerosSorteados.push(numero);
    return numero;
}

function RealizarSorteioValor1() {
    setTimeout(() => {
        const valorSorteado1 = document.getElementById('resultado-numero-1');
        valorSorteado1.style.visibility = 'visible';        
        valorSorteado1.innerText = GerarNumeroNaoRepetido();
    }, 1000);
}

function RealizarSorteioValor2(){
    setTimeout(() => {
        const valorSorteado2 = document.getElementById('resultado-numero-2');
        valorSorteado2.style.visibility = 'visible';
        valorSorteado2.innerText = GerarNumeroNaoRepetido();
    }, 2000);
}

function RealizarSorteioValor3(){
    setTimeout(() => {
        const valorSorteado3 = document.getElementById('resultado-numero-3');
        valorSorteado3.style.visibility = 'visible';
        valorSorteado3.innerText = GerarNumeroNaoRepetido();
    }, 3000);
}

function RealizarSorteioValor4(){
    setTimeout(() => {
        const valorSorteado4 = document.getElementById('resultado-numero-4');
        valorSorteado4.style.visibility = 'visible';
        valorSorteado4.innerText = GerarNumeroNaoRepetido();
    }, 4000);
}

function RealizarSorteioValor5(){
    setTimeout(() => {
        const valorSorteado5 = document.getElementById('resultado-numero-5');
        valorSorteado5.style.visibility = 'visible';
        valorSorteado5.innerText = GerarNumeroNaoRepetido();
    }, 5000);
}

function RealizarSorteioValor6(){
    setTimeout(() => {
        const valorSorteado6 = document.getElementById('resultado-numero-6');
        valorSorteado6.style.visibility = 'visible';
        valorSorteado6.innerText = GerarNumeroNaoRepetido();
    }, 6000);
}

function ExibirResultado(){
    const numeroEscolhido1 = document.getElementById('numero-escolhido-1');
    const numeroEscolhido2 = document.getElementById('numero-escolhido-2');
    const numeroEscolhido3 = document.getElementById('numero-escolhido-3');
    const numeroEscolhido4 = document.getElementById('numero-escolhido-4');
    const numeroEscolhido5 = document.getElementById('numero-escolhido-5');
    const numeroEscolhido6 = document.getElementById('numero-escolhido-6');
    const respostaNumero1 = document.getElementById('resultado-numero-1');
    const respostaNumero2 = document.getElementById('resultado-numero-2');
    const respostaNumero3 = document.getElementById('resultado-numero-3');
    const respostaNumero4 = document.getElementById('resultado-numero-4');
    const respostaNumero5 = document.getElementById('resultado-numero-5');
    const respostaNumero6 = document.getElementById('resultado-numero-6');
    setTimeout(() => {
        switch(numeroEscolhido1.value){
            case respostaNumero1.innerText:
                numeroEscolhido1.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero1.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero2.innerText:
                numeroEscolhido1.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero2.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero3.innerText:
                numeroEscolhido1.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero3.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero4.innerText:
                numeroEscolhido1.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero4.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero5.innerText:
                numeroEscolhido1.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero5.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero6.innerText:
                numeroEscolhido1.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero6.style.backgroundColor = 'rgb(0, 95, 51)';
            break;
        }
    }, 6000);

    setTimeout(() => {
        switch(numeroEscolhido2.value){
            case respostaNumero1.innerText:
                numeroEscolhido2.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero1.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero2.innerText:
                numeroEscolhido2.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero2.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero3.innerText:
                numeroEscolhido2.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero3.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero4.innerText:
                numeroEscolhido2.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero4.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero5.innerText:
                numeroEscolhido2.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero5.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero6.innerText:
                numeroEscolhido2.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero6.style.backgroundColor = 'rgb(0, 95, 51)';
            break;
        }
    }, 6000);

    setTimeout(() => {
        switch(numeroEscolhido3.value){
            case respostaNumero1.innerText:
                numeroEscolhido3.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero1.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero2.innerText:
                numeroEscolhido3.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero2.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero3.innerText:
                numeroEscolhido3.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero3.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero4.innerText:
                numeroEscolhido3.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero4.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero5.innerText:
                numeroEscolhido3.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero5.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero6.innerText:
                numeroEscolhido3.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero6.style.backgroundColor = 'rgb(0, 95, 51)';
            break;
        }
    }, 6000);

    setTimeout(() => {
        switch(numeroEscolhido4.value){
            case respostaNumero1.innerText:
                numeroEscolhido4.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero1.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero2.innerText:
                numeroEscolhido4.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero2.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero3.innerText:
                numeroEscolhido4.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero3.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero4.innerText:
                numeroEscolhido4.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero4.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero5.innerText:
                numeroEscolhido4.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero5.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero6.innerText:
                numeroEscolhido4.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero6.style.backgroundColor = 'rgb(0, 95, 51)';
            break;
        }
    }, 6000);

    setTimeout(() => {
        switch(numeroEscolhido5.value){
            case respostaNumero1.innerText:
                numeroEscolhido5.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero1.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero2.innerText:
                numeroEscolhido5.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero2.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero3.innerText:
                numeroEscolhido5.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero3.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero4.innerText:
                numeroEscolhido5.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero4.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero5.innerText:
                numeroEscolhido5.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero5.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero6.innerText:
                numeroEscolhido5.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero6.style.backgroundColor = 'rgb(0, 95, 51)';
            break;
        }
    }, 6000);

    setTimeout(() => {
        switch(numeroEscolhido6.value){
            case respostaNumero1.innerText:
                numeroEscolhido6.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero1.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero2.innerText:
                numeroEscolhido6.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero2.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero3.innerText:
                numeroEscolhido6.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero3.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero4.innerText:
                numeroEscolhido6.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero4.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero5.innerText:
                numeroEscolhido6.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero5.style.backgroundColor = 'rgb(0, 95, 51)';
            break;

            case respostaNumero6.innerText:
                numeroEscolhido6.style.backgroundColor = 'rgb(0, 95, 51)';
                respostaNumero6.style.backgroundColor = 'rgb(0, 95, 51)';
            break;
        }
    }, 6000);
}