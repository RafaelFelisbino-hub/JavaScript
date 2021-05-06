let tempo = setInterval(time,1000)
let regressivo = 10

function time(){
    regressivo--;
    console.log(regressivo);
    if(regressivo == 0) clearInterval(tempo);
}

// regressivo == 0 && (clearInterval(tempo));