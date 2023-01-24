var listaPalavras = ['arroz','alface','couve','cenoura','batata','atum','alho','cebola']

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}


listaPalavras = shuffle(listaPalavras)

var  secreta = listaPalavras[0]
var digitadas = []
var chance = 3
var secretaArray = []

for(y in secreta){
    secretaArray.push(secreta[y])
}

function input(letra){
    if(chance == 0){
        console.log('Você não pode mais jogar, deu mole')
        return
    }

    if(letra.size > 1){
        console.log('Você deve informar somente uma letra')
        return
    }

    if(secretaArray.includes(letra)){
        console.log('Você acertou uma letra')
        digitadas.push(letra) 
    }else{
        console.log('Você errou uma letra')
        chance -= 1
    }

    let descoberto = ''

    console.log(secreta.length)

    for(x in secreta){
        if(digitadas.includes(secreta[x])){
            descoberto += secreta[x]
        }else{
            descoberto += '*'
        }
    }

    if(descoberto == secreta){
        console.log('Você acertou, meus parabéns, a palavra era ', descoberto)
        return
    }

    if(chances > 0){
        console.log(`A palavra atualmente está como: ${descoberto} e você tem ${chance} chances restantes`)
    }else{
        console.log('Suas chances acabaram')
    }
};
