let dia = {
    eventos: ["trabalho", "cortar arvore", "pizza", "correr"]
  };

for(i = 0;i <dia.eventos.length; i++){
    console.log(`Dia 1: ${dia.eventos[i]}`)
}

console.log('\n')
// ##################################################################

let dia2 = {
    eventosDia2: ["jogar", "almoçar", "jogar", "aprender"]
};

for(j = 0; j < dia2.eventosDia2.length; j++){
    console.log(`Dia 2: ${dia2.eventosDia2[j]}`)
}

console.log('\n')
// ##################################################################

let dia3 = {
    eventosDia3: ["Hakuna", "Matata"]
};

for(k = 0; k < dia3.eventosDia3.length; k++){
    console.log(`Dia 3: ${dia3.eventosDia3[k]}`)
}

console.log('\n')
// ##################################################################

let rafael = {
    nome: 'Nome: Rafael',
    idade: 'Idade: 24',
    classe: 'Classe: Healer'
};

for(p in rafael){
    console.log(rafael[p])
}

console.log('\n')
// ##################################################################

let array = [80,2,16,5]

function sortArray(a, b) {
    return a > b ? 1 : b > a ? -1 : 0;
}

console.log(array.sort(sortArray))

for(l of array){
    console.log(l)
}

function sortArrayReverse(a, b) {
    if(a > b) return -1
    else if (b > a) return 1
    else return 0
}

console.log(array.reverse(sortArrayReverse))