let vacinacao = [
    {
        pais: 'Reino Unido',
        cada100: 61.14,
        ranking: 1
    },
    {
        pais: 'Estados Unidos',
        cada100: 60.48,
        ranking: 2
    },
    {
        pais: 'Brasil',
        cada100: 16.53,
        ranking: 9
    }
]

let paises = vacinacao.map((item,indice) =>{
    if(item.pais == 'Brasil') indice = 8;
    return `${indice + 1} - ${item.pais}. A cada 100 pessoas: ${item.cada100} pessoas vacinadas; Ranking: ${item.ranking}`;
});

console.log(paises)