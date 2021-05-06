let classes = ['DPS','HEALER','TANK'];

let res = classes.map((item,indice) => `${indice + 1} : ${item}`);

let i = 0;

while(i < 3){
    console.log(res[i]);
    i++;
}