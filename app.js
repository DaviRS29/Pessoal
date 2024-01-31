alert('Boas vindas ao jogo');
let numeroMaximo = 200
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;


while(chute != numeroSecreto){
   chute = prompt('Escolha um numero de 1 a '+numeroMaximo);
    if (numeroSecreto == chute) { 
    break
    } else {
    if(numeroSecreto < chute){
        alert("O numero é menor que " + chute)
        }else {
        alert('O numero é maior que '+chute)
        }
    }
    tentativas ++;
}

let  palavraTentativas = tentativas> 1 ? 'tentativas' : 'tentativa'
alert('Você acertou o numero secrteto é '+ numeroSecreto + ' com '+tentativas+' '+palavraTentativas)
