//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10) //Função JS para criar um número aleatório
let tentQuant = 1; //Variável de controle de tentativas

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

//Funções
function handleTryClick(event) {
    event.preventDefault() //Não realize o procedimento padrão do HTML 

    const   ber = document.querySelector("#inputNumber") // Cria uma variável (const) com o número colocado no HTML <input id="inputNumber" type="number">

    if(Number(inputNumber.value) == randomNumber) {  // Compara se o número colocado no HTML <input id="inputNumber" type="number"> é igual ao número criado aleatóriamente
        toggleScreen() 
        document.querySelector(".screen2 h2").innerText = `Acertou em ${tentQuant} tentativas` // Modifica o texto em h2, no HTML para que ele mostre a quantidade de tentativas
    }    
    
    tentQuant++ //Adciona +1 na variável de controle
}

function handleResetClick() {
    toggleScreen()

    inputNumber.value = ""
    randomNumber = Math.round(Math.random() * 10)
    tentQuant = 1;
}

function toggleScreen() {
    screen2.classList.toggle("hide")//Adciona ou remove o termo hide na <div class="screen2">, fazendo com que ele encontre o atributo já feito no CSS e suma a pág 
    screen1.classList.toggle("hide")//Adciona ou remove o termo hide na <div class="screen1">, fazendo com que ele encontre o atributo já feito no CSS e suma a pág
}