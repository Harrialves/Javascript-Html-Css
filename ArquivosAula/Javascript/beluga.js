// função que calcula a media das notas 
function calcularMedia(){                    
                    
    var total = 0;
    var qtd = arguments.length;
    var x = 0;

    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++
    }                    

    // método estático que seleciona as casas decimais
    return (total / qtd).toFixed(2);
   
}

function sortear(n){
    var n1 = n||1;
    // gera os números alatorios 
    var nSorteado = Math.random();
    nSorteado = nSorteado * n1;
    // arredonda o valor do números aleatórios 
    nSorteado = Math.floor(nSorteado);
    return nSorteado;
    debugger; 

}